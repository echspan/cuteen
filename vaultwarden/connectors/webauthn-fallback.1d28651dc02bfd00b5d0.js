(()=>{"use strict";var e={68674:(e,t,n)=>{n.r(t)}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function e(e){const t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");const n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function t(e,t=!1){return t&&(e=e.replace(/ /g,"+")),decodeURIComponent(Array.prototype.map.call(atob(e),(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2))).join(""))}function a(e){if(Array.isArray(e)&&(e=Uint8Array.from(e)),e instanceof ArrayBuffer&&(e=new Uint8Array(e)),e instanceof Uint8Array){let t="";const n=e.byteLength;for(let a=0;a<n;a++)t+=String.fromCharCode(e[a]);e=window.btoa(t)}if("string"!=typeof e)throw new Error("could not coerce to string");return e=e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=*$/g,"")}var s=function(e,t,n,a){return new(n||(n=Promise))((function(s,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function r(e){try{l(a.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}l((a=a.apply(e,t||[])).next())}))};class o{constructor(e,t,n){this.systemLanguage=e,this.localesDirectory=t,this.getLocalesJson=n,this.supportedTranslationLocales=["en"],this.defaultLocale="en",this.localeNames=new Map([["af","Afrikaans"],["ar","العربية الفصحى"],["az","Azərbaycanca"],["be","Беларуская"],["bg","български"],["bn","বাংলা"],["bs","bosanski jezik"],["ca","català"],["cs","čeština"],["da","dansk"],["de","Deutsch"],["el","Ελληνικά"],["en","English"],["en-GB","English (British)"],["en-IN","English (India)"],["eo","Esperanto"],["es","español"],["et","eesti"],["eu","euskara"],["fa","فارسی"],["fi","suomi"],["fil","Wikang Filipino"],["fr","français"],["he","עברית"],["hi","हिन्दी"],["hr","hrvatski"],["hu","magyar"],["id","Bahasa Indonesia"],["it","italiano"],["ja","日本語"],["ka","ქართული"],["km","ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ"],["kn","ಕನ್ನಡ"],["ko","한국어"],["lt","lietuvių kalba"],["lv","Latvietis"],["me","црногорски"],["ml","മലയാളം"],["nb","norsk (bokmål)"],["nl","Nederlands"],["nn","Norsk Nynorsk"],["pl","polski"],["pt-BR","português do Brasil"],["pt-PT","português"],["ro","română"],["ru","русский"],["si","සිංහල"],["sk","slovenčina"],["sl","Slovenski jezik, Slovenščina"],["sr","Српски"],["sv","svenska"],["th","ไทย"],["tr","Türkçe"],["uk","українська"],["vi","Tiếng Việt"],["zh-CN","中文（中国大陆）"],["zh-TW","中文（台灣）"]]),this.defaultMessages={},this.localeMessages={},this.systemLanguage=e.replace("_","-")}init(e){return s(this,void 0,void 0,(function*(){if(this.inited)throw new Error("i18n already initialized.");if(null==this.supportedTranslationLocales||0===this.supportedTranslationLocales.length)throw new Error("supportedTranslationLocales not set.");this.inited=!0,this.translationLocale=null!=e?e:this.systemLanguage;try{this.collator=new Intl.Collator(this.translationLocale,{numeric:!0,sensitivity:"base"})}catch(t){this.collator=null}-1===this.supportedTranslationLocales.indexOf(this.translationLocale)&&(this.translationLocale=this.translationLocale.slice(0,2),-1===this.supportedTranslationLocales.indexOf(this.translationLocale)&&(this.translationLocale=this.defaultLocale)),null!=this.localesDirectory&&(yield this.loadMessages(this.translationLocale,this.localeMessages),this.translationLocale!==this.defaultLocale&&(yield this.loadMessages(this.defaultLocale,this.defaultMessages)))}))}t(e,t,n,a){return this.translate(e,t,n,a)}translate(e,t,n,a){let s;return s=this.localeMessages.hasOwnProperty(e)&&this.localeMessages[e]?this.localeMessages[e]:this.defaultMessages.hasOwnProperty(e)&&this.defaultMessages[e]?this.defaultMessages[e]:"",""!==s&&(null!=t&&(s=s.split("__$1__").join(t.toString())),null!=n&&(s=s.split("__$2__").join(n.toString())),null!=a&&(s=s.split("__$3__").join(a.toString()))),s}loadMessages(e,t){return s(this,void 0,void 0,(function*(){const n=e.replace("-","_"),a=yield this.getLocalesJson(n);for(const e in a)if(a.hasOwnProperty(e)&&(t[e]=a[e].message,a[e].placeholders))for(const n in a[e].placeholders){if(!a[e].placeholders.hasOwnProperty(n)||!a[e].placeholders[n].content)continue;const s="\\$"+n.toUpperCase()+"\\$";let o=a[e].placeholders[n].content;"$1"!==o&&"$2"!==o&&"$3"!==o||(o="__$"+o+"__"),t[e]=t[e].replace(new RegExp(s,"g"),o)}}))}}const i=["en","af","ar","az","be","bg","bn","bs","ca","cs","da","de","el","en-GB","en-IN","eo","es","et","eu","fi","fil","fr","he","hi","hr","hu","id","it","ja","ka","km","kn","ko","lv","ml","nb","nl","nn","pl","pt-PT","pt-BR","ro","ru","si","sk","sl","sr","sv","tr","uk","vi","zh-CN","zh-TW"];var r=function(e,t,n,a){return new(n||(n=Promise))((function(s,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function r(e){try{l(a.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}l((a=a.apply(e,t||[])).next())}))};class l extends o{constructor(e,t){super(e||"en-US",t,(e=>r(this,void 0,void 0,(function*(){const t=this.localesDirectory+"/"+e+"/messages.json?cache=mw0sn",n=yield fetch(t);return yield n.json()})))),this.supportedTranslationLocales=i}get translationLocale(){return this._translationLocale}set translationLocale(e){this._translationLocale=e}}var c=function(e,t,n,a){return new(n||(n=Promise))((function(s,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function r(e){try{l(a.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}l((a=a.apply(e,t||[])).next())}))};n(68674);let u,d=!1,h=null,f=!1,p=null,g=null;function y(){var n;if(d)return;if(h=e("parent"),!h)return void v("No parent.");h=decodeURIComponent(h),p=null!==(n=e("locale"))&&void 0!==n?n:"en";"1"===e("v")?function(){const n=e("data");if(!n)return void v("No data.");u=t(n)}():function(){let n=null;try{n=JSON.parse(t(e("data")))}catch(a){return void v("Cannot parse data.")}u=n.data}(),d=!0}function m(){if(f)return;if(!("credentials"in navigator))return void v(g.t("webAuthnNotSupported"));if(y(),!u)return void v("No data.");let e;try{e=function(e){const t=JSON.parse(e),n=t.challenge.replace(/-/g,"+").replace(/_/g,"/");return t.challenge=Uint8Array.from(atob(n),(e=>e.charCodeAt(0))),t.allowCredentials.forEach((e=>{const t=e.id.replace(/\_/g,"/").replace(/\-/g,"+");e.id=Uint8Array.from(atob(t),(e=>e.charCodeAt(0)))})),t}(u)}catch(t){return void v("Cannot parse data.")}!function(e){c(this,void 0,void 0,(function*(){try{const t=yield navigator.credentials.get({publicKey:e});if(f)return;const n=function(e){const t=e.response,n=new Uint8Array(t.authenticatorData),s=new Uint8Array(t.clientDataJSON),o=new Uint8Array(e.rawId),i=new Uint8Array(t.signature),r={id:e.id,rawId:a(o),type:e.type,extensions:e.getClientExtensionResults(),response:{authenticatorData:a(n),clientDataJson:a(s),signature:a(i)}};return JSON.stringify(r)}(t),s=document.getElementById("remember").checked;window.postMessage({command:"webAuthnResult",data:n,remember:s},"*"),f=!0,function(e){document.getElementById("webauthn-button").disabled=!0;const t=document.getElementById("msg");w(t),t.textContent=e,t.classList.add("alert"),t.classList.add("alert-success")}(g.t("webAuthnSuccess"))}catch(t){v(t)}}))}(e)}function v(e){const t=document.getElementById("msg");w(t),t.textContent=e,t.classList.add("alert"),t.classList.add("alert-danger")}function w(e){e.classList.remove("alert"),e.classList.remove("alert-danger"),e.classList.remove("alert-success")}document.addEventListener("DOMContentLoaded",(()=>c(void 0,void 0,void 0,(function*(){y();try{g=new l(p,"locales")}catch(n){v("Failed to load the provided locale "+p),g=new l("en","locales")}yield g.init(),document.getElementById("msg").innerText=g.t("webAuthnFallbackMsg"),document.getElementById("remember-label").innerText=g.t("rememberMe");const e=document.getElementById("webauthn-button");e.innerText=g.t("webAuthnAuthenticate"),e.onclick=m,document.getElementById("spinner").classList.add("d-none");const t=document.getElementById("content");t.classList.add("d-block"),t.classList.remove("d-none")}))))})()})();
//# sourceMappingURL=webauthn-fallback.1d28651dc02bfd00b5d0.js.map