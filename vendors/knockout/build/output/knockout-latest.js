/*!
 * Knockout JavaScript library v3.5.1-sm
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(V=>{function P(a,b){return null===a||da[typeof a]?a===b:!1}function ea(a,b){var d;return()=>{d||(d=setTimeout(()=>{d=0;a()},b))}}function fa(a,b){var d;return()=>{clearTimeout(d);d=setTimeout(a,b)}}function ha(a,b){b?.A?.()}function ia(a,b){var d=this.Zb,f=d[y];f.$||(this.Wa&&this.ya[b]?(d.vb(b,a,this.ya[b]),this.ya[b]=null,--this.Wa):f.B[b]||d.vb(b,a,f.C?{X:a}:d.Rb(a)),a.ka&&a.Vb())}function W(a){a=c.g.i.get(a,K);var b=a?.H;b&&(a.H=null,b.Mb())}function X(a,b){for(var d,f=c.m.firstChild(b);d=f;)f=
c.m.nextSibling(d),Y(a,d);c.l.notify(b,c.l.G)}function Y(a,b){var d=a;if(1===b.nodeType||c.Ab.mc(b))d=Z(b,null,a).bindingContextForDescendants;d&&!b.matches?.("SCRIPT,TEXTAREA,TEMPLATE")&&X(d,b)}function ja(a){var b=[],d={},f=[];c.g.O(a,function e(k){if(!d[k]){var g=c.h[k];g&&(g.after&&(f.push(k),g.after.forEach(h=>{if(a[h]){if(f.includes(h))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+f.join(", "));e(h)}}),f.length--),b.push({key:k,Ib:g}));d[k]=!0}});
return b}function Z(a,b,d){var f=c.g.i.bb(a,K,{}),l=f.Wb;if(!b){if(l)throw Error("You cannot apply bindings multiple times to the same element.");f.Wb=!0}l||(f.context=d);f.fb||(f.fb={});if(b&&"function"!==typeof b)var k=b;else{var e=c.s(()=>{if(k=b?b(d,a):c.Ab.bc(a,d))d[L]?.(),d[aa]?.();return k},{o:a});k&&e.isActive()||(e=null)}var g=d,h;if(k){var n=e?m=>()=>e()[m]():m=>k[m],p={get:m=>k[m]&&n(m)(),has:m=>m in k};c.l.G in k&&c.l.subscribe(a,c.l.G,()=>{var m=k[c.l.G]();if(m){var r=c.m.childNodes(a);
r.length&&m(r,c.Eb(r[0]))}});c.l.ga in k&&(g=c.l.kb(a,d),c.l.subscribe(a,c.l.ga,()=>{var m=k[c.l.ga]();m&&c.m.firstChild(a)&&m(a)}));ja(k).forEach(m=>{var r=m.Ib.init,q=m.Ib.update,t=m.key;if(8===a.nodeType&&!c.m.ca[t])throw Error("The binding '"+t+"' cannot be used with virtual elements");try{"function"==typeof r&&c.u.S(()=>{var u=r(a,n(t),p,g.$data,g);if(u&&u.controlsDescendantBindings){if(void 0!==h)throw Error("Multiple bindings ("+h+" and "+t+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
h=t}}),"function"==typeof q&&c.s(()=>q(a,n(t),p,g.$data,g),{o:a})}catch(u){throw u.message='Unable to process binding "'+t+": "+k[t]+'"\nMessage: '+u.message,u;}})}f=void 0===h;return{shouldBindDescendants:f,bindingContextForDescendants:f&&g}}function Q(a,b){return a&&a instanceof c.ea?a:new c.ea(a,void 0,void 0,b)}var M=V.document,R={},c="undefined"!==typeof R?R:{};c.v=(a,b)=>{a=a.split(".");for(var d=c,f=0,l=a.length-1;f<l;f++)d=d[a[f]];d[a[l]]=b};c.ha=(a,b,d)=>{a[b]=d};c.v("version","3.5.1-sm");
c.g={extend:(a,b)=>b?Object.assign(a,b):a,O:(a,b)=>a&&Object.entries(a).forEach(d=>b(d[0],d[1])),$a:a=>[...a.childNodes].forEach(b=>c.removeNode(b)),Lb:a=>{a=[...a];var b=(a[0]?.ownerDocument||M).createElement("div");a.forEach(d=>b.append(c.fa(d)));return b},xa:(a,b)=>Array.prototype.map.call(a,b?d=>c.fa(d.cloneNode(!0)):d=>d.cloneNode(!0)),ta:(a,b)=>{c.g.$a(a);b&&a.append(...b)},Aa:(a,b)=>{if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&
a[a.length-1].parentNode!==b;)--a.length;if(1<a.length){b=a[0];var d=a[a.length-1];for(a.length=0;b!==d;)a.push(b),b=b.nextSibling;a.push(d)}}return a},Qb:a=>null==a?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,""),Za:a=>a.ownerDocument.documentElement.contains(1!==a.nodeType?a.parentNode:a),Sb:(a,b)=>{if(!a?.nodeType)throw Error("element must be a DOM node when calling triggerEvent");a.dispatchEvent(new Event(b))},j:a=>c.T(a)?a():a,jb:(a,b)=>a.textContent=c.g.j(b)||""};c.v("utils",
c.g);c.v("unwrap",c.g.j);(()=>{let a=0,b="__ko__"+Date.now(),d=new WeakMap;c.g.i={get:(f,l)=>(d.get(f)||{})[l],set:(f,l,k)=>{d.has(f)?d.get(f)[l]=k:d.set(f,{[l]:k});return k},bb:function(f,l,k){return this.get(f,l)||this.set(f,l,k)},clear:f=>d.delete(f),Z:()=>a++ +b}})();c.g.K=(()=>{var a=c.g.i.Z(),b={1:1,8:1,9:1},d={1:1,9:1};const f=(e,g)=>{var h=c.g.i.get(e,a);g&&!h&&(h=new Set,c.g.i.set(e,a,h));return h},l=e=>{var g=f(e);g&&(new Set(g)).forEach(h=>h(e));c.g.i.clear(e);d[e.nodeType]&&k(e.childNodes,
!0)},k=(e,g)=>{for(var h=[],n,p=0;p<e.length;p++)if(!g||8===e[p].nodeType)if(l(h[h.length]=n=e[p]),e[p]!==n)for(;p--&&!h.includes(e[p]););};return{na:(e,g)=>{if("function"!=typeof g)throw Error("Callback must be a function");f(e,1).add(g)},ib:(e,g)=>{var h=f(e);h&&(h.delete(g),h.size||c.g.i.set(e,a,null))},fa:e=>{c.u.S(()=>{b[e.nodeType]&&(l(e),d[e.nodeType]&&k(e.getElementsByTagName("*")))});return e},removeNode:e=>{c.fa(e);e.parentNode&&e.parentNode.removeChild(e)}}})();c.fa=c.g.K.fa;c.removeNode=
c.g.K.removeNode;c.v("utils.domNodeDisposal",c.g.K);c.v("utils.domNodeDisposal.addDisposeCallback",c.g.K.na);c.ab={debounce:(a,b)=>a.Ia(d=>fa(d,b)),rateLimit:(a,b)=>{if("number"==typeof b)var d=b;else{d=b.timeout;var f=b.method}var l="function"==typeof f?f:ea;a.Ia(k=>l(k,d,b))},notify:(a,b)=>{a.qa="always"==b?null:P}};var da={undefined:1,"boolean":1,number:1,string:1};c.v("extenders",c.ab);class ka{constructor(a,b,d){this.X=a;this.pb=b;this.Da=d;this.Oa=!1;this.L=this.ia=null;c.ha(this,"dispose",
this.A)}A(){this.Oa||(this.L&&c.g.K.ib(this.ia,this.L),this.Oa=!0,this.Da(),this.X=this.pb=this.Da=this.ia=this.L=null)}o(a){this.ia=a;c.g.K.na(a,this.L=this.A.bind(this))}}c.V=function(){Object.setPrototypeOf(this,D);D.Fa(this)};var D={Fa:a=>{a.W=new Map;a.W.set("change",new Set);a.ub=1},subscribe:function(a,b,d){var f=this;d=d||"change";var l=new ka(f,b?a.bind(b):a,()=>{f.W.get(d).delete(l);f.Pa?.(d)});f.Ra?.(d);f.W.has(d)||f.W.set(d,new Set);f.W.get(d).add(l);return l},D:function(a,b){b=b||"change";
"change"===b&&this.La();if(this.ra(b)){b="change"===b&&this.Tb||new Set(this.W.get(b));try{c.u.zb(),b.forEach(d=>{d.Oa||d.pb(a)})}finally{c.u.end()}}},Ca:function(){return this.ub},ec:function(a){return this.Ca()!==a},La:function(){++this.ub},Ia:function(a){var b=this,d=c.T(b),f,l,k,e,g;b.va||(b.va=b.D,b.D=(n,p)=>{p&&"change"!==p?"beforeChange"===p?b.rb(n):b.va(n,p):b.sb(n)});var h=a(()=>{b.ka=!1;d&&e===b&&(e=b.qb?b.qb():b());var n=l||g&&b.Ha(k,e);g=l=f=!1;n&&b.va(k=e)});b.sb=(n,p)=>{p&&b.ka||(g=
!p);b.Tb=new Set(b.W.get("change"));b.ka=f=!0;e=n;h()};b.rb=n=>{f||(k=n,b.va(n,"beforeChange"))};b.tb=()=>{g=!0};b.Vb=()=>{b.Ha(k,b.P(!0))&&(l=!0)}},ra:function(a){return(this.W.get(a)||[]).size},Ha:function(a,b){return!this.qa||!this.qa(a,b)},toString:()=>"[object Object]",extend:function(a){var b=this;a&&c.g.O(a,(d,f)=>{d=c.ab[d];"function"==typeof d&&(b=d(b,f)||b)});return b}};c.ha(D,"init",D.Fa);c.ha(D,"subscribe",D.subscribe);c.ha(D,"extend",D.extend);Object.setPrototypeOf(D,Function.prototype);
c.V.fn=D;c.jc=a=>"function"==typeof a?.subscribe&&"function"==typeof a.D;(()=>{var a=[],b,d=0;c.u={zb:f=>{a.push(b);b=f},end:()=>b=a.pop(),Ob:f=>{if(b){if(!c.jc(f))throw Error("Only subscribable things can act as dependencies");b.Xb.call(b.Yb,f,f.Ub||(f.Ub=++d))}},S:(f,l,k)=>{try{return a.push(b),b=void 0,f.apply(l,k||[])}finally{b=a.pop()}},Ba:()=>b?.s.Ba(),eb:()=>b?.eb,s:()=>b?.s}})();const B=Symbol("_latestValue");c.ba=a=>{function b(){if(0<arguments.length)return b.Ha(b[B],arguments[0])&&(b.nb(),
b[B]=arguments[0],b.Ma()),this;c.u.Ob(b);return b[B]}b[B]=a;Object.defineProperty(b,"length",{get:()=>null==b[B]?void 0:b[B].length});c.V.fn.Fa(b);Object.setPrototypeOf(b,F);return b};var F={toJSON:function(){let a=this[B];return a?.toJSON?.()||a},qa:P,P:function(){return this[B]},Ma:function(){this.D(this[B],"spectate");this.D(this[B])},nb:function(){this.D(this[B],"beforeChange")}};Object.setPrototypeOf(F,c.V.fn);var G=c.ba.pc="__ko_proto__";F[G]=c.ba;c.T=a=>{if((a="function"==typeof a&&a[G])&&
a!==F[G]&&a!==c.s.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");return!!a};c.kc=a=>"function"==typeof a&&(a[G]===F[G]||a[G]===c.s.fn[G]&&a.fc);c.v("observable",c.ba);c.v("isObservable",c.T);c.v("observable.fn",F);c.ha(F,"valueHasMutated",F.Ma);c.ja=a=>{a=a||[];if("object"!=typeof a||!("length"in a))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");a=c.ba(a);Object.setPrototypeOf(a,
c.ja.fn);return a.extend({trackArrayChanges:!0})};c.ja.fn={remove:function(a){for(var b=this.P(),d=!1,f="function"!=typeof a||c.T(a)?e=>e===a:a,l=b.length;l--;){var k=b[l];if(f(k)){if(b[l]!==k)throw Error("Array modified during remove; cannot remove item");d||this.nb();d=!0;b.splice(l,1)}}d&&this.Ma()}};Object.setPrototypeOf(c.ja.fn,c.ba.fn);Object.getOwnPropertyNames(Array.prototype).forEach(a=>{"function"===typeof Array.prototype[a]&&"constructor"!=a&&("copyWithin fill pop push reverse shift sort splice unshift".split(" ").includes(a)?
c.ja.fn[a]=function(...b){var d=this.P();this.nb();this.Bb(d,a,b);b=d[a](...b);this.Ma();return b===d?this:b}:c.ja.fn[a]=function(...b){return this()[a](...b)})});c.Jb=a=>c.T(a)&&"function"==typeof a.remove&&"function"==typeof a.push;c.v("observableArray",c.ja);c.v("isObservableArray",c.Jb);c.ab.trackArrayChanges=(a,b)=>{function d(){function m(){if(g){var r=[].concat(a.P()||[]);if(a.ra("arrayChange")){if(!l||1<g)l=c.g.Cb(h,r,a.Ta);var q=l}h=r;l=null;g=0;q?.length&&a.D(q,"arrayChange")}}f?m():(f=
!0,e=a.subscribe(()=>++g,null,"spectate"),h=[].concat(a.P()||[]),l=null,k=a.subscribe(m))}a.Ta={};"object"==typeof b&&c.g.extend(a.Ta,b);a.Ta.sparse=!0;if(!a.Bb){var f=!1,l=null,k,e,g=0,h,n=a.Ra,p=a.Pa;a.Ra=m=>{n?.call(a,m);"arrayChange"===m&&d()};a.Pa=m=>{p?.call(a,m);"arrayChange"!==m||a.ra("arrayChange")||(k?.A(),e?.A(),e=k=null,f=!1,h=void 0)};a.Bb=(m,r,q)=>{function t(A,x,I){return u[u.length]={status:A,value:x,index:I}}if(f&&!g){var u=[],w=m.length,v=q.length,z=0;switch(r){case "push":z=w;case "unshift":for(m=
0;m<v;m++)t("added",q[m],z+m);break;case "pop":z=w-1;case "shift":w&&t("deleted",m[z],z);break;case "splice":z=Math.min(Math.max(0,0>q[0]?w+q[0]:q[0]),w);w=1===v?w:Math.min(z+(q[1]||0),w);v=z+v-2;r=Math.max(w,v);for(var C=[],H=[],O=2;z<r;++z,++O)z<w&&H.push(t("deleted",m[z],z)),z<v&&C.push(t("added",q[O],z));c.g.Hb(H,C);break;default:return}l=u}}}};var y=Symbol("_state");c.s=(a,b)=>{function d(){if(0<arguments.length){if("function"!==typeof f)throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
f(...arguments);return this}l.$||c.u.Ob(d);(l.Y||l.C&&d.sa())&&d.U();return l.M}"object"===typeof a?b=a:(b=b||{},a&&(b.read=a));if("function"!=typeof b.read)throw Error("Pass a function that returns the value of the ko.computed");var f=b.write,l={M:void 0,aa:!0,Y:!0,Ga:!1,lb:!1,$:!1,hb:!1,C:!1,Nb:b.read,o:b.disposeWhenNodeIsRemoved||b.o||null,oa:b.disposeWhen||b.oa,Ya:null,B:{},J:0,Gb:null};d[y]=l;d.fc="function"===typeof f;c.V.fn.Fa(d);Object.setPrototypeOf(d,J);b.pure&&(l.hb=!0,l.C=!0,c.g.extend(d,
la));l.o&&(l.lb=!0,l.o.nodeType||(l.o=null));l.C||d.U();l.o&&d.isActive()&&c.g.K.na(l.o,l.Ya=()=>{d.A()});return d};var J={qa:P,Ba:function(){return this[y].J},cc:function(){var a=[];c.g.O(this[y].B,(b,d)=>a[d.la]=d.X);return a},cb:function(a){if(!this[y].J)return!1;var b=this.cc();return b.includes(a)||!!b.find(d=>d.cb&&d.cb(a))},vb:function(a,b,d){if(this[y].hb&&b===this)throw Error("A 'pure' computed must not be called recursively");this[y].B[a]=d;d.la=this[y].J++;d.ma=b.Ca()},sa:function(){var a,
b=this[y].B;for(a in b)if(Object.prototype.hasOwnProperty.call(b,a)){var d=b[a];if(this.ua&&d.X.ka||d.X.ec(d.ma))return!0}},vc:function(){this[y].Ga||this.ua?.(!1)},isActive:function(){var a=this[y];return a.Y||0<a.J},wc:function(){this.ka?this[y].Y&&(this[y].aa=!0):this.Fb()},Rb:function(a){return a.subscribe(this.Fb,this)},Fb:function(){var a=this,b=a.throttleEvaluation;0<=b?(clearTimeout(this[y].Gb),this[y].Gb=setTimeout(()=>a.U(!0),b)):a.ua?a.ua(!0):a.U(!0)},U:function(a){var b=this[y],d=b.oa,
f=!1;if(!b.Ga&&!b.$){if(b.o&&!c.g.Za(b.o)||d?.()){if(!b.lb){this.A();return}}else b.lb=!1;try{b.Ga=!0,f=this.ac(a)}finally{b.Ga=!1}return f}},ac:function(a){var b=this[y],d=b.hb?void 0:!b.J;var f={Zb:this,ya:b.B,Wa:b.J};c.u.zb({Yb:f,Xb:ia,s:this,eb:d});b.B={};b.J=0;a:{try{var l=b.Nb();break a}finally{c.u.end(),f.Wa&&!b.C&&c.g.O(f.ya,ha),b.aa=b.Y=!1}l=void 0}b.J?f=this.Ha(b.M,l):(this.A(),f=!0);f&&(b.C?this.La():this.D(b.M,"beforeChange"),b.M=l,this.D(b.M,"spectate"),!b.C&&a&&this.D(b.M),this.tb&&
this.tb());d&&this.D(b.M,"awake");return f},P:function(a){var b=this[y];(b.Y&&(a||!b.J)||b.C&&this.sa())&&this.U();return b.M},Ia:function(a){var b=this;c.V.fn.Ia.call(b,a);b.qb=()=>{b[y].C||(b[y].aa?b.U():b[y].Y=!1);return b[y].M};b.ua=d=>{b.rb(b[y].M);b[y].Y=!0;d&&(b[y].aa=!0);b.sb(b,!d)}},A:function(){var a=this[y];!a.C&&a.B&&c.g.O(a.B,(b,d)=>d.A?.());a.o&&a.Ya&&c.g.K.ib(a.o,a.Ya);a.B=void 0;a.J=0;a.$=!0;a.aa=!1;a.Y=!1;a.C=!1;a.o=void 0;a.oa=void 0;a.Nb=void 0}},la={Ra:function(a){var b=this,d=
b[y];if(!d.$&&d.C&&"change"==a){d.C=!1;if(d.aa||b.sa())d.B=null,d.J=0,b.U()&&b.La();else{var f=[];c.g.O(d.B,(l,k)=>f[k.la]=l);f.forEach((l,k)=>{var e=d.B[l],g=b.Rb(e.X);g.la=k;g.ma=e.ma;d.B[l]=g});b.sa()&&b.U()&&b.La()}d.$||b.D(d.M,"awake")}},Pa:function(a){var b=this[y];b.$||"change"!=a||this.ra("change")||(c.g.O(b.B,(d,f)=>{f.A&&(b.B[d]={X:f.X,la:f.la,ma:f.ma},f.A())}),b.C=!0,this.D(void 0,"asleep"))},Ca:function(){var a=this[y];a.C&&(a.aa||this.sa())&&this.U();return c.V.fn.Ca.call(this)}};Object.setPrototypeOf(J,
c.V.fn);var S=c.ba.pc;J[S]=c.s;c.v("computed",c.s);c.v("isComputed",a=>"function"==typeof a&&a[S]===J[S]);c.v("computed.fn",J);c.ha(J,"dispose",J.A);c.qc=a=>{if("function"===typeof a)return c.s(a,{pure:!0});a={...a,pure:!0};return c.s(a)};c.F={R:a=>{switch(a.nodeName){case "OPTION":return!0===a.__ko__hasDomDataOptionValue__?c.g.i.get(a,c.h.options.gb):a.value;case "SELECT":return 0<=a.selectedIndex?c.F.R(a.options[a.selectedIndex]):void 0;default:return a.value}},Na:(a,b,d)=>{switch(a.nodeName){case "OPTION":"string"===
typeof b?(c.g.i.set(a,c.h.options.gb,void 0),delete a.__ko__hasDomDataOptionValue__,a.value=b):(c.g.i.set(a,c.h.options.gb,b),a.__ko__hasDomDataOptionValue__=!0,a.value="number"===typeof b?b:"");break;case "SELECT":for(var f=-1,l=""===b||null==b,k=a.options.length,e;k--;)if(e=c.F.R(a.options[k]),e==b||""===e&&l){f=k;break}if(d||0<=f||l&&1<a.size)a.selectedIndex=f;break;default:a.value=null==b?"":b}}};c.I=(()=>{var a=["true","false","null","undefined"],b=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
d=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,l={"in":1,"return":1,"typeof":1},k=g=>{g=c.g.Qb(g);123===g.charCodeAt(0)&&(g=g.slice(1,-1));g+="\n,";var h=[],n=g.match(d),p=[],m=0;if(1<n.length){for(var r=0,q;q=n[r++];){var t=q.charCodeAt(0);if(44===t){if(0>=m){h.push(u&&p.length?{key:u,value:p.join("")}:{unknown:u||p.join("")});var u=m=
0;p=[];continue}}else if(58===t){if(!m&&!u&&1===p.length){u=p.pop();continue}}else if(47===t&&1<q.length&&(47===q.charCodeAt(1)||42===q.charCodeAt(1)))continue;else 47===t&&r&&1<q.length?(t=n[r-1].match(f))&&!l[t[0]]&&(g=g.slice(g.indexOf(q)+1),n=g.match(d),r=-1,q="/"):40===t||123===t||91===t?++m:41===t||125===t||93===t?--m:u||p.length||34!==t&&39!==t||(q=q.slice(1,-1));p.push(q)}if(0<m)throw Error("Unbalanced parentheses, braces, or brackets");}return h},e=new Set;return{Sa:[],mb:e,nc:k,oc:(g,h)=>
{var n=[],p=[],m=h?.valueAccessors,r=h?.bindingParams,q=(t,u)=>{if(!r){var w=c.h[t];if(w?.preprocess&&!(u=w.preprocess(u,t,q)))return;if(w=e.has(t)){var v=u;a.includes(v)?v=!1:(w=v.match(b),v=null===w?!1:w[1]?"Object("+w[1]+")"+w[2]:v);w=v}w&&p.push("'"+t+"':function(_z){"+v+"=_z}")}m&&(u="function(){return "+u+" }");n.push("'"+t+"':"+u)};("string"===typeof g?k(g):g).forEach(t=>q(t.key||t.unknown,t.value));p.length&&q("_ko_property_writers","{"+p.join(",")+" }");return n.join(",")},lc:(g,h)=>-1<g.findIndex(n=>
n.key==h),ob:(g,h,n,p,m)=>{if(g&&c.T(g))!c.kc(g)||m&&g.P()===p||g(p);else h.get("_ko_property_writers")?.[n]?.(p)}}})();(()=>{function a(e){return 8==e.nodeType&&f.test(e.nodeValue)}function b(e){return 8==e.nodeType&&l.test(e.nodeValue)}function d(e,g){for(var h=e,n=1,p=[];h=h.nextSibling;){if(b(h)&&(c.g.i.set(h,k,!0),!--n))return p;p.push(h);a(h)&&++n}if(!g)throw Error("Cannot find closing comment tag to match: "+e.nodeValue);return null}var f=/^\s*ko(?:\s+([\s\S]+))?\s*$/,l=/^\s*\/ko\s*$/,k="__ko_matchedEndComment__";
c.m={ca:{},childNodes:e=>a(e)?d(e):e.childNodes,pa:e=>{a(e)?(e=d(e))&&[...e].forEach(g=>c.removeNode(g)):c.g.$a(e)},ta:(e,g)=>{a(e)?(c.m.pa(e),e.after(...g)):c.g.ta(e,g)},prepend:(e,g)=>{a(e)?e.nextSibling.before(g):e.prepend(g)},ic:(e,g,h)=>{h?h.after(g):c.m.prepend(e,g)},firstChild:e=>{if(a(e))return e=e.nextSibling,!e||b(e)?null:e;let g=e.firstChild;if(g&&b(g))throw Error("Found invalid end comment, as the first child of "+e);return g},nextSibling:e=>{if(a(e)){var g=d(e,void 0);e=g?(g.length?g[g.length-
1]:e).nextSibling:null}if((g=e.nextSibling)&&b(g)){if(b(g)&&!c.g.i.get(g,k))throw Error("Found end comment without a matching opening comment, as child of "+e);return null}return g},dc:a,uc:e=>(e=e.nodeValue.match(f))?e[1]:null}})();const ba=new Map;c.Ab=new class{mc(a){switch(a.nodeType){case 1:return null!=a.getAttribute("data-bind");case 8:return c.m.dc(a)}return!1}bc(a,b){a:{switch(a.nodeType){case 1:var d=a.getAttribute("data-bind");break a;case 8:d=c.m.uc(a);break a}d=null}if(d)try{let l={valueAccessors:!0},
k=ba.get(d);if(!k){var f="with($context){with($data||{}){return{"+c.I.oc(d,l)+"}}}";k=new Function("$context","$element",f);ba.set(d,k)}return k(b,a)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+d+"\nMessage: "+l.message,l;}return null}};const L=Symbol("_subscribable"),N=Symbol("_ancestorBindingInfo"),aa=Symbol("_dataDependency"),ca={},K=c.g.i.Z();c.h={};c.ea=class{constructor(a,b,d,f,l){var k=this,e=a===ca,g=e?void 0:a,h="function"==typeof g&&!c.T(g),n=l?.dataDependency;
a=()=>{var m=h?g():g,r=c.g.j(m);b?(c.g.extend(k,b),N in b&&(k[N]=b[N])):(k.$parents=[],k.$root=r,k.ko=c);k[L]=p;e?r=k.$data:(k.$rawData=m,k.$data=r);d&&(k[d]=r);f?.(k,b,r);if(b?.[L]&&!c.u.s().cb(b[L]))b[L]();n&&(k[aa]=n);return k.$data};if(l?.exportDependencies)a();else{var p=c.qc(a);p.P();p.isActive()?p.qa=null:k[L]=void 0}}createChildContext(a,b,d,f){!f&&b&&"object"==typeof b&&(f=b,b=f.as,d=f.extend);return new c.ea(a,this,b,(l,k)=>{l.$parentContext=k;l.$parent=k.$data;l.$parents=(k.$parents||[]).slice(0);
l.$parents.unshift(l.$parent);d&&d(l)},f)}extend(a,b){return new c.ea(ca,this,null,d=>c.g.extend(d,"function"==typeof a?a(d):a),b)}};class ma{constructor(a,b,d){this.L=a;this.ia=b;this.wa=new Set;this.G=!1;b.H||c.g.K.na(a,W);d?.H&&(d.H.wa.add(a),this.Da=d)}Mb(){this.Da?.H?.$b(this.L)}$b(a){this.wa.delete(a);this.wa.size||this.Db?.()}Db(){this.G=!0;this.ia.H&&!this.wa.size&&(this.ia.H=null,c.g.K.ib(this.L,W),c.l.notify(this.L,c.l.ga),this.Mb())}}c.l={G:"childrenComplete",ga:"descendantsComplete",subscribe:(a,
b,d,f,l)=>{var k=c.g.i.bb(a,K,{});k.za||(k.za=new c.V);l?.notifyImmediately&&k.fb[b]&&c.u.S(d,f,[a]);return k.za.subscribe(d,f,b)},notify:(a,b)=>{var d=c.g.i.get(a,K);if(d&&(d.fb[b]=!0,d.za?.D(a,b),b==c.l.G))if(d.H)d.H.Db();else if(void 0===d.H&&d.za?.ra(c.l.ga))throw Error("descendantsComplete event not supported for bindings on this node");},kb:(a,b)=>{var d=c.g.i.bb(a,K,{});d.H||(d.H=new ma(a,d,b[N]));return b[N]==d?b:b.extend(f=>{f[N]=d})}};c.tc=a=>(a=c.g.i.get(a,K))&&a.context;c.wb=(a,b,d)=>
Z(a,b,Q(d));c.yb=(a,b)=>{1!==b.nodeType&&8!==b.nodeType||X(Q(a),b)};c.xb=function(a,b,d){if(2>arguments.length){if(b=M.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");Y(Q(a,d),b)};c.Eb=a=>(a=a&&[1,8].includes(a.nodeType)&&c.tc(a))?a.$data:void 0;c.v("bindingHandlers",c.h);c.v("applyBindings",
c.xb);c.v("applyBindingAccessorsToNode",c.wb);c.v("dataFor",c.Eb);(()=>{var a=Object.create(null),b=new Map;c.Ua={get:(k,e)=>{if(b.has(k))e(b.get(k));else{var g=a[k];g?g.subscribe(e):(g=a[k]=new c.V,g.subscribe(e),l(k,h=>{b.set(k,h);delete a[k];g.D(h)}))}},register:(k,e)=>{if(!e)throw Error("Invalid configuration for "+k);if(d[k])throw Error("Component "+k+" is already registered");d[k]=e}};var d=Object.create(null),f=(k,e)=>{throw Error(`Component '${k}': ${e}`);},l=(k,e)=>{var g={},h=d[k]||{},n=
h.template;h=h.viewModel;if(n){n.element||f(k,"Unknown template value: "+n);n=n.element;var p=M.getElementById(n);p||f(k,"Cannot find element with ID "+n);p.matches("TEMPLATE")||f(k,"Template Source Element not a <template>");g.template=c.g.xa(p.content.childNodes)}h&&("function"!==typeof h.createViewModel&&f(k,"Unknown viewModel value: "+h),g.createViewModel=h.createViewModel);e(g.template&&g.createViewModel?g:null)};c.v("components",c.Ua);c.v("components.register",c.Ua.register)})();(()=>{var a=
0;c.h.component={init:(b,d,f,l,k)=>{var e,g,h,n=()=>{var m=e&&e.dispose;"function"===typeof m&&m.call(e);h&&h.A();g=e=h=null},p=[...c.m.childNodes(b)];c.m.pa(b);c.g.K.na(b,n);c.s(()=>{var m=c.g.j(d());if("string"!==typeof m){var r=c.g.j(m.params);m=c.g.j(m.name)}if(!m)throw Error("No component name specified");var q=c.l.kb(b,k),t=g=++a;c.Ua.get(m,u=>{if(g===t){n();if(!u)throw Error("Unknown component '"+m+"'");var w=u.template;if(!w)throw Error("Component '"+m+"' has no template");c.m.ta(b,c.g.xa(w));
e=u.createViewModel(r,{element:b,templateNodes:p});c.yb(q.createChildContext(e,{extend:v=>{v.$component=e;v.$componentTemplateNodes=p}}),b)}})},{o:b});return{controlsDescendantBindings:!0}}};c.m.ca.component=!0})();c.h.attr={update:(a,b)=>{b=c.g.j(b())||{};c.g.O(b,function(d,f){f=c.g.j(f);var l=d.indexOf(":");l="lookupNamespaceURI"in a&&0<l&&a.lookupNamespaceURI(d.slice(0,l));var k=!1===f||null==f;k?l?a.removeAttributeNS(l,d):a.removeAttribute(d):(f=f.toString(),l?a.setAttributeNS(l,d,f):a.setAttribute(d,
f));"name"===d&&(a.name=k?"":f)})}};var T=(a,b,d)=>b&&b.split(/\s+/).forEach(f=>a.classList.toggle(f,d));c.h.css={update:(a,b)=>{b=c.g.j(b());"object"==typeof b?c.g.O(b,(d,f)=>{f=c.g.j(f);T(a,d,!!f)}):(b=c.g.Qb(b),T(a,a.__ko__cssValue,!1),a.__ko__cssValue=b,T(a,b,!0))}};c.h.enable={update:(a,b)=>{(b=c.g.j(b()))&&a.disabled?a.removeAttribute("disabled"):b||a.disabled||(a.disabled=!0)}};c.h.disable={update:(a,b)=>c.h.enable.update(a,()=>!c.g.j(b()))};c.h.event={init:(a,b,d,f,l)=>{c.g.O(b()||{},k=>{"string"==
typeof k&&a.addEventListener(k,(...e)=>{var g=b()[k];if(g)try{f=l.$data;var h=g.apply(f,[f,...e])}finally{!0!==h&&e[0].preventDefault()}})})}};c.h.foreach={Kb:a=>()=>{var b=a(),d=c.T(b)?b.P():b;if(!d||"number"==typeof d.length)return{foreach:b};c.g.j(b);return{foreach:d.data,as:d.as,beforeRemove:d.beforeRemove}},init:(a,b)=>c.h.template.init(a,c.h.foreach.Kb(b)),update:(a,b,d,f,l)=>c.h.template.update(a,c.h.foreach.Kb(b),d,f,l)};c.I.Sa.foreach=!1;c.m.ca.foreach=!0;c.h.hasfocus={init:(a,b,d)=>{var f=
k=>{a.__ko_hasfocusUpdating=!0;k=a.ownerDocument.activeElement===a;c.I.ob(b(),d,"hasfocus",k,!0);a.__ko_hasfocusLastValue=k;a.__ko_hasfocusUpdating=!1},l=f.bind(null,!0);f=f.bind(null,!1);a.addEventListener("focus",l);a.addEventListener("focusin",l);a.addEventListener("blur",f);a.addEventListener("focusout",f);a.__ko_hasfocusLastValue=!1},update:(a,b)=>{b=!!c.g.j(b());a.__ko_hasfocusUpdating||a.__ko_hasfocusLastValue===b||(b?a.focus():a.blur())}};c.I.mb.add("hasfocus");c.h.html={init:()=>({controlsDescendantBindings:!0}),
update:(a,b)=>{c.g.$a(a);b=c.g.j(b());if(null!=b){const d=M.createElement("template");d.innerHTML="string"!=typeof b?b.toString():b;a.appendChild(d.content)}}};(()=>{function a(b,d,f){c.h[b]={init:(l,k,e,g,h)=>{var n,p={};d&&(p={as:e.get("as"),exportDependencies:!0});var m=e.has(c.l.ga);c.s(()=>{var r=c.g.j(k()),q=!f!==!r,t=!n;m&&(h=c.l.kb(l,h));if(q){p.dataDependency=c.u.s();var u=d?h.createChildContext("function"==typeof r?r:k,p):c.u.Ba()?h.extend(null,p):h}t&&c.u.Ba()&&(n=c.g.xa(c.m.childNodes(l),
!0));q?(t||c.m.ta(l,c.g.xa(n)),c.yb(u,l)):(c.m.pa(l),c.l.notify(l,c.l.G))},{o:l});return{controlsDescendantBindings:!0}}};c.I.Sa[b]=!1;c.m.ca[b]=!0}a("if");a("ifnot",!1,!0);a("with",!0)})();var U={};c.h.options={init:a=>{if(!a.matches("SELECT"))throw Error("options binding applies only to SELECT elements");let b=a.length;for(;b--;)a.remove(b);return{controlsDescendantBindings:!0}},update:(a,b,d)=>{var f=a.multiple,l=0!=a.length&&f?a.scrollTop:null,k=c.g.j(b()),e=d.get("valueAllowUnset")&&d.has("value"),
g={},h=[];b=()=>Array.from(a.options).filter(q=>q.selected);var n=(q,t,u)=>{var w=typeof t;return"function"==w?t(q):"string"==w?q[t]:u},p=(q,t)=>{r&&e?c.l.notify(a,c.l.G):h.length&&(q=h.includes(c.F.R(t[0])),t[0].selected=q,r&&!q&&c.u.S(c.g.Sb,null,[a,"change"]))};e||(f?h=b().map(c.F.R):0<=a.selectedIndex&&h.push(c.F.R(a.options[a.selectedIndex])));if(k){"undefined"==typeof k.length&&(k=[k]);var m=k.filter(q=>q||null==q);d.has("optionsCaption")&&(k=c.g.j(d.get("optionsCaption")),null!=k&&m.unshift(U))}var r=
!1;g.beforeRemove=q=>a.removeChild(q);k=p;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=(q,t)=>{p(q,t);c.u.S(d.get("optionsAfterRender"),null,[t[0],q!==U?q:void 0])});c.g.Pb(a,m,(q,t,u)=>{u.length&&(h=!e&&u[0].selected?[c.F.R(u[0])]:[],r=!0);t=a.ownerDocument.createElement("option");q===U?(c.g.jb(t,d.get("optionsCaption")),c.F.Na(t,void 0)):(u=n(q,d.get("optionsValue"),q),c.F.Na(t,c.g.j(u)),q=n(q,d.get("optionsText"),u),c.g.jb(t,q));return[t]},g,k);e||(m=h.length,
(f?m&&b().length<m:m&&0<=a.selectedIndex?c.F.R(a.options[a.selectedIndex])!==h[0]:m||0<=a.selectedIndex)&&c.u.S(c.g.Sb,null,[a,"change"]));(e||c.u.eb())&&c.l.notify(a,c.l.G);l&&20<Math.abs(l-a.scrollTop)&&(a.scrollTop=l)}};c.h.options.gb=c.g.i.Z();c.h.style={update:(a,b)=>{c.g.O(c.g.j(b()||{}),(d,f)=>{f=c.g.j(f);if(null==f||!1===f)f="";if(/^--/.test(d))a.style.setProperty(d,f);else{d=d.replace(/-(\w)/g,(k,e)=>e.toUpperCase());var l=a.style[d];a.style[d]=f;f===l||a.style[d]!=l||isNaN(f)||(a.style[d]=
f+"px")}})}};c.h.submit={init:(a,b,d,f,l)=>{if("function"!=typeof b())throw Error("The value for a submit binding must be a function");a.addEventListener("submit",k=>{var e=b();try{var g=e.call(l.$data,a)}finally{!0!==g&&k.preventDefault()}})}};c.h.text={init:()=>({controlsDescendantBindings:!0}),update:(a,b)=>{8===a.nodeType&&(a.text||a.after(a.text=M.createTextNode("")),a=a.text);c.g.jb(a,b())}};c.m.ca.text=!0;c.h.textInput={init:(a,b,d)=>{var f=a.value,l,k,e=()=>{clearTimeout(l);k=l=void 0;var h=
a.value;f!==h&&(f=h,c.I.ob(b(),d,"textInput",h))},g=()=>{var h=c.g.j(b());null==h&&(h="");void 0!==k&&h===k?setTimeout(g,4):a.value!==h&&(a.value=h,f=a.value)};a.addEventListener("input",e);a.addEventListener("change",e);a.addEventListener("blur",e);c.s(g,{o:a})}};c.I.mb.add("textInput");c.h.textinput={preprocess:(a,b,d)=>d("textInput",a)};c.h.value={init:(a,b,d)=>{var f=a.matches("SELECT"),l=a.matches("INPUT");if(!l||"checkbox"!=a.type&&"radio"!=a.type){var k=new Set,e=d.get("valueUpdate"),g=null,
h=()=>{g=null;var m=b(),r=c.F.R(a);c.I.ob(m,d,"value",r)};e&&("string"==typeof e?k.add(e):e.forEach(m=>k.add(m)),k.delete("change"));k.forEach(m=>{var r=h;(m||"").startsWith("after")&&(r=()=>{g=c.F.R(a);setTimeout(h,0)},m=m.slice(5));a.addEventListener(m,r)});var n=l&&"file"==a.type?()=>{var m=c.g.j(b());null==m||""===m?a.value="":c.u.S(h)}:()=>{var m=c.g.j(b()),r=c.F.R(a);if(null!==g&&m===g)setTimeout(n,0);else if(m!==r||void 0===r)f?(r=d.get("valueAllowUnset"),c.F.Na(a,m,r),r||m===c.F.R(a)||c.u.S(h)):
c.F.Na(a,m)};if(f){var p;c.l.subscribe(a,c.l.G,()=>{p?d.get("valueAllowUnset")?n():h():(a.addEventListener("change",h),p=c.s(n,{o:a}))},null,{notifyImmediately:!0})}else a.addEventListener("change",h),c.s(n,{o:a})}else c.wb(a,{checkedValue:b})},update:()=>{}};c.I.mb.add("value");c.h.visible={update:(a,b)=>{b=c.g.j(b());var d="none"!=a.style.display;b&&!d?a.style.display="":d&&!b&&(a.style.display="none")}};c.h.hidden={update:(a,b)=>a.hidden=!!c.g.j(b())};(function(a){c.h[a]={init:function(b,d,f,l,
k){return c.h.event.init.call(this,b,()=>({[a]:d()}),f,l,k)}}})("click");(()=>{let a=c.g.i.Z();class b{constructor(f){this.Xa=f}Ja(...f){let l=this.Xa;if(!f.length)return c.g.i.get(l,a)||(11===this.L?l.content:1===this.L?l:void 0);c.g.i.set(l,a,f[0])}}class d extends b{constructor(f){super(f);f&&(this.L=f.matches("TEMPLATE")&&f.content?f.content.nodeType:1)}}c.Ka={Xa:d,Qa:b}})();(()=>{var a=(e,g,h)=>{var n;for(g=c.m.nextSibling(g);e&&(n=e)!==g;)e=c.m.nextSibling(n),h(n,e)},b=(e,g)=>{if(e.length){var h=
e[0],n=h.parentNode;a(h,e[e.length-1],p=>{1!==p.nodeType&&8!==p.nodeType||c.xb(g,p)});c.g.Aa(e,n)}},d=(e,g,h,n)=>{var p=(e&&(e.nodeType?e:0<e.length?e[0]:null)||h||{}).ownerDocument;if("string"==typeof h){p=p||M;p=p.getElementById(h);if(!p)throw Error("Cannot find template with ID "+h);h=new c.Ka.Xa(p)}else if([1,8].includes(h.nodeType))h=new c.Ka.Qa(h);else throw Error("Unknown template type: "+h);h=(h=h.Ja?h.Ja():null)?[...h.cloneNode(!0).childNodes]:null;if("number"!=typeof h.length||0<h.length&&
"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");p=!1;switch(g){case "replaceChildren":c.m.ta(e,h);p=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+g);}p&&(b(h,n),"replaceChildren"==g&&c.l.notify(e,c.l.G));return h},f=(e,g,h)=>c.T(e)?e():"function"===typeof e?e(g,h):e;c.rc=function(e,g,h,n){h=h||{};var p=p||"replaceChildren";if(n){var m=n.nodeType?n:0<n.length?n[0]:null;return c.s(()=>{var r=g instanceof c.ea?g:new c.ea(g,
null,null,null,{exportDependencies:!0}),q=f(e,r.$data,r);d(n,p,q,r,h)},{oa:()=>!m||!c.g.Za(m),o:m})}console.log("no targetNodeOrNodeArray")};c.sc=(e,g,h,n,p)=>{function m(v,z){c.u.S(c.g.Pb,null,[n,v,t,h,u,z]);c.l.notify(n,c.l.G)}var r,q=h.as,t=(v,z)=>{r=p.createChildContext(v,{as:q,extend:C=>{C.$index=z;q&&(C[q+"Index"]=z)}});v=f(e,v,r);return d(n,"ignoreTargetNode",v,r,h)},u=(v,z)=>{b(z,r);r=null};if(!h.beforeRemove&&c.Jb(g)){m(g.P());var w=g.subscribe(v=>{m(g(),v)},null,"arrayChange");w.o(n);return w}return c.s(()=>
{var v=c.g.j(g)||[];"undefined"==typeof v.length&&(v=[v]);m(v)},{o:n})};var l=c.g.i.Z(),k=c.g.i.Z();c.h.template={init:(e,g)=>{g=c.g.j(g());if("string"==typeof g||"name"in g)c.m.pa(e);else if("nodes"in g){g=g.nodes||[];if(c.T(g))throw Error('The "nodes" option must be a plain, non-observable array.');let h=g[0]?.parentNode;h&&c.g.i.get(h,k)||(h=c.g.Lb(g),c.g.i.set(h,k,!0));(new c.Ka.Qa(e)).Ja(h)}else if(g=c.m.childNodes(e),g.length)g=c.g.Lb(g),(new c.Ka.Qa(e)).Ja(g);else throw Error("Anonymous template defined, but no template content was provided");
return{controlsDescendantBindings:!0}},update:(e,g,h,n,p)=>{var m=g();g=c.g.j(m);h=!0;n=null;"string"==typeof g?g={}:(m="name"in g?g.name:e,"if"in g&&(h=c.g.j(g["if"])),h&&"ifnot"in g&&(h=!c.g.j(g.ifnot)),h&&!m&&(h=!1));"foreach"in g?n=c.sc(m,h&&g.foreach||[],g,e,p):h?(h=p,"data"in g&&(h=p.createChildContext(g.data,{as:g.as,exportDependencies:!0})),n=c.rc(m,h,g,e)):c.m.pa(e);p=n;c.g.i.get(e,l)?.A?.();c.g.i.set(e,l,!p||p.isActive&&!p.isActive()?void 0:p)}};c.I.Sa.template=e=>{e=c.I.nc(e);return 1==
e.length&&e[0].unknown||c.I.lc(e,"name")?null:"This template engine does not support anonymous templates nested within its templates"};c.m.ca.template=!0})();c.g.Hb=(a,b,d)=>{var f=0,l,k=b.length;k&&a.every(e=>{l=b.findIndex(g=>e.value===g.value);0<=l&&(e.moved=b[l].index,b[l].moved=e.index,b.splice(l,1),f=l=0,--k);f+=k;return k&&(!d||f<d)})};c.g.Cb=(()=>{var a=(b,d,f,l,k)=>{for(var e=Math.min,g=Math.max,h=[],n=-1,p=b.length,m,r=d.length,q=r-p||1,t=p+r+1,u,w,v;++n<=p;)for(w=u,h.push(u=[]),v=e(r,n+
q),m=g(0,n-1);m<=v;m++)u[m]=m?n?b[n-1]===d[m-1]?w[m-1]:e(w[m]||t,u[m-1]||t)+1:m+1:n+1;e=[];g=[];q=[];n=p;for(m=r;n||m;)r=h[n][m]-1,m&&r===h[n][m-1]?g.push(e[e.length]={status:f,value:d[--m],index:m}):n&&r===h[n-1][m]?q.push(e[e.length]={status:l,value:b[--n],index:n}):(--m,--n,k.sparse||e.push({status:"retained",value:d[m]}));c.g.Hb(q,g,!k.dontLimitMoves&&10*p);return e.reverse()};return(b,d,f)=>{f="boolean"===typeof f?{dontLimitMoves:f}:f||{};b=b||[];d=d||[];return b.length<d.length?a(b,d,"added",
"deleted",f):a(d,b,"deleted","added",f)}})();(()=>{function a(f,l,k,e,g){var h=[],n=c.s(()=>{var p=l(k,g,c.g.Aa(h,f))||[];if(0<h.length){var m=h.nodeType?[h]:h;if(0<m.length){var r=m[0],q=r.parentNode;p.forEach(t=>q.insertBefore(t,r));m.forEach(t=>c.removeNode(t))}e&&c.u.S(e,null,[k,p,g])}h.length=0;h.push(...p)},{o:f,oa:()=>!!h.find(c.g.Za)});return{N:h,Va:n.isActive()?n:void 0}}var b=c.g.i.Z(),d=c.g.i.Z();c.g.Pb=(f,l,k,e,g,h)=>{l=l||[];"undefined"==typeof l.length&&(l=[l]);e=e||{};var n=c.g.i.get(f,
b),p=[],m=0,r=0,q=[],t=[],u=[],w=0,v=x=>{A={da:x,Ea:c.ba(r++)};p.push(A)},z=x=>{A=n[x];A.Ea(r++);c.g.Aa(A.N,f);p.push(A)};if(n){if(!h||n&&n._countWaitingForRemove)h=c.g.Cb(Array.prototype.map.call(n,E=>E.da),l,{dontLimitMoves:e.dontLimitMoves,sparse:!0});let x,I;for(h.forEach(E=>{x=E.moved;I=E.index;switch(E.status){case "deleted":for(;m<I;)z(m++);void 0===x&&(A=n[m],A.Va&&(A.Va.A(),A.Va=void 0),c.g.Aa(A.N,f).length&&(e.beforeRemove&&(p.push(A),w++,A.da===d?A=null:u[A.Ea.P()]=A),A&&q.push.apply(q,
A.N)));m++;break;case "added":for(;r<I;)z(m++);void 0!==x?(t.push(p.length),z(x)):v(E.value)}});r<l.length;)z(m++);p._countWaitingForRemove=w}else l.forEach(v);c.g.i.set(f,b,p);q.forEach(e.beforeRemove?c.fa:c.removeNode);var C,H,O=x=>{c.m.ic(f,x,H);H=x};h=f.ownerDocument.activeElement;if(t.length)for(;void 0!=(C=t.shift());){var A=p[C];for(H=void 0;C;)if(l=p[--C].N,l?.length){H=l[l.length-1];break}A.N.forEach(O)}p.forEach(x=>{x.N||c.g.extend(x,a(f,k,x.da,g,x.Ea));x.N.forEach(O);!x.hc&&g&&(g(x.da,
x.N,x.Ea),x.hc=!0,H=x.N[x.N.length-1])});f.ownerDocument.activeElement!=h&&h?.focus();((x,I)=>{x&&I.forEach(E=>E?.N.forEach(na=>x(na,C,E.da)))})(e.beforeRemove,u);u.forEach(x=>x&&(x.da=d))}})();V.ko=R})(this);
