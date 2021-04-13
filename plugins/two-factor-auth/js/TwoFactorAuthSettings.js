/*
import { trigger as translatorTrigger } from 'Common/Translator';
*/

(rl => { if (rl) {

const
	Capa = {
		TwoFactor: 'TWO_FACTOR',
		TwoFactorForce: 'TWO_FACTOR_FORCE',
	},

	pString = value => null != value ? '' + value : '',

	Remote = new class {
		/**
		 * @param {?Function} fCallback
		 */
		getTwoFactor(fCallback) {
			rl.pluginRemoteRequest(fCallback, 'GetTwoFactorInfo');
		}

		/**
		 * @param {?Function} fCallback
		 */
		createTwoFactor(fCallback) {
			rl.pluginRemoteRequest(fCallback, 'CreateTwoFactorSecret');
		}

		/**
		 * @param {?Function} fCallback
		 */
		clearTwoFactor(fCallback) {
			rl.pluginRemoteRequest(fCallback, 'ClearTwoFactorInfo');
		}

		/**
		 * @param {?Function} fCallback
		 */
		showTwoFactorSecret(fCallback) {
			rl.pluginRemoteRequest(fCallback, 'ShowTwoFactorSecret');
		}

		/**
		 * @param {?Function} fCallback
		 * @param {string} sCode
		 */
		testTwoFactor(fCallback, sCode) {
			rl.pluginRemoteRequest(fCallback, 'TestTwoFactorInfo', {
				Code: sCode
			});
		}

		/**
		 * @param {?Function} fCallback
		 * @param {boolean} bEnable
		 */
		enableTwoFactor(fCallback, bEnable) {
			rl.pluginRemoteRequest(fCallback, 'EnableTwoFactor', {
				Enable: bEnable ? 1 : 0
			});
		}

		/**
		 * @param {?Function} fCallback
		 */
		clearTwoFactorInfo(fCallback) {
			rl.pluginRemoteRequest(fCallback, 'ClearTwoFactorInfo');
		}
	};

class TwoFactorAuthSettings
{

	constructor() {
		this.lock = ko.observable(false);

		this.processing = ko.observable(false);
		this.clearing = ko.observable(false);
		this.secreting = ko.observable(false);

		this.viewUser = ko.observable('');
		this.twoFactorStatus = ko.observable(false);

		this.twoFactorTested = ko.observable(false);

		this.viewSecret = ko.observable('');
		this.viewBackupCodes = ko.observable('');
		this.viewUrlTitle = ko.observable('');
		this.viewUrl = ko.observable('');

		this.viewEnable_ = ko.observable(false);

		this.capaTwoFactor = rl.settings.capa(Capa.TwoFactor);

		const fn = iError => iError && this.viewEnable_(false);
		this.addComputables({
			viewEnable: {
				read: this.viewEnable_,
				write: (value) => {
					value = !!value;
					if (value && this.twoFactorTested()) {
						this.viewEnable_(value);
						Remote.enableTwoFactor(fn, value);
					} else {
						if (!value) {
							this.viewEnable_(value);
						}
						Remote.enableTwoFactor(fn, false);
					}
				}
			},

			viewTwoFactorEnableTooltip: () => {
//				translatorTrigger();
				return this.twoFactorTested() || this.viewEnable_()
					? ''
					: rl.i18n('POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_TEST_BEFORE_DESC');
			},

			viewTwoFactorStatus: () => {
//				translatorTrigger();
				return rl.i18n('POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_'
					+ (this.twoFactorStatus() ? '' : 'NOT_')
					+ 'CONFIGURED_DESC'
				);
			},

			twoFactorAllowedEnable: () => this.viewEnable() || this.twoFactorTested()
		});

		this.onResult = this.onResult.bind(this);
		this.onShowSecretResult = this.onShowSecretResult.bind(this);
	}

	showSecret() {
		this.secreting(true);
		Remote.showTwoFactorSecret(this.onShowSecretResult);
	}

	hideSecret() {
		this.viewSecret('');
		this.viewBackupCodes('');
		this.viewUrlTitle('');
		this.viewUrl('');
	}

	createTwoFactor() {
		this.processing(true);
		Remote.createTwoFactor(this.onResult);
	}

	logout() {
		rl.app.logout();
	}

	testTwoFactor() {
		rl.showPluginPopup(TwoFactorAuthTestPopupView, [this.twoFactorTested]);
	}

	clearTwoFactor() {
		this.viewSecret('');
		this.viewBackupCodes('');
		this.viewUrlTitle('');
		this.viewUrl('');

		this.twoFactorTested(false);

		this.clearing(true);
		Remote.clearTwoFactor(this.onResult);
	}

	onShow(bLock) {
		this.lock(!!bLock);

		this.viewSecret('');
		this.viewBackupCodes('');
		this.viewUrlTitle('');
		this.viewUrl('');
	}

	onHide() {
		if (this.lock()) {
			location.reload();
		}
	}

	getQr() {
		return 'otpauth://totp/' + encodeURIComponent(this.viewUser())
			+ '?secret=' + encodeURIComponent(this.viewSecret())
			+ '&issuer=' + encodeURIComponent('');
	}

	onResult(iError, oData) {
		this.processing(false);
		this.clearing(false);

		if (iError) {
			this.viewUser('');
			this.viewEnable_(false);
			this.twoFactorStatus(false);
			this.twoFactorTested(false);

			this.viewSecret('');
			this.viewBackupCodes('');
			this.viewUrlTitle('');
			this.viewUrl('');
		} else {
			this.viewUser(pString(oData.Result.User));
			this.viewEnable_(!!oData.Result.Enable);
			this.twoFactorStatus(!!oData.Result.IsSet);
			this.twoFactorTested(!!oData.Result.Tested);

			this.viewSecret(pString(oData.Result.Secret));
			this.viewBackupCodes(pString(oData.Result.BackupCodes).replace(/[\s]+/g, '  '));

			this.viewUrlTitle(pString(oData.Result.UrlTitle));
			this.viewUrl(qr.toDataURL({ level: 'M', size: 8, value: this.getQr() }));
		}
	}

	onShowSecretResult(iError, data) {
		this.secreting(false);

		if (iError) {
			this.viewSecret('');
			this.viewUrlTitle('');
			this.viewUrl('');
		} else {
			this.viewSecret(pString(data.Result.Secret));
			this.viewUrlTitle(pString(data.Result.UrlTitle));
			this.viewUrl(qr.toDataURL({ level: 'M', size: 6, value: this.getQr() }));
		}
	}

	onBuild() {
		if (this.capaTwoFactor) {
			this.processing(true);
			Remote.getTwoFactor(this.onResult);
		}
	}
}

class TwoFactorAuthTestPopupView extends rl.pluginPopupView {
	constructor() {
		super('TwoFactorAuthTest');

		this.addObservables({
			code: '',
			codeStatus: null,

			testing: false
		});

		this.koTestedTrigger = null;

		ko.decorateCommands(this, {
			testCodeCommand: self => self.code() && !self.testing()
		});
	}

	testCodeCommand() {
		this.testing(true);
		Remote.testTwoFactor(iError => {
			this.testing(false);
			this.codeStatus(!iError);

			if (this.koTestedTrigger && this.codeStatus()) {
				this.koTestedTrigger(true);
			}
		}, this.code());
	}

	clearPopup() {
		this.code('');
		this.codeStatus(null);
		this.testing(false);

		this.koTestedTrigger = null;
	}

	onShow(koTestedTrigger) {
		this.clearPopup();

		this.koTestedTrigger = koTestedTrigger;
	}
}

rl.addSettingsViewModel(
	TwoFactorAuthSettings,
	'TwoFactorAuthSettings',
	'POPUPS_TWO_FACTOR_CFG/LEGEND_TWO_FACTOR_AUTH',
	'two-factor-auth'
);

}})(window.rl);
