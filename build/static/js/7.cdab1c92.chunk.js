(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{214:function(t,e,r){},223:function(t,e,r){"use strict";r.r(e);var n=r(4),a=r(0),c=r(1),o=r(40),i=r(31),s=r(41),u=r(2),l=function(t){var e=t.data,r=e.name,n=e.description,a=e.thumbnail,c=e.homepage,o=e.wiki;return Object(u.jsxs)("div",{className:"single-comic",children:[Object(u.jsxs)(s.a,{children:[Object(u.jsx)("meta",{name:"description",content:"".concat(r," information")}),Object(u.jsx)("title",{children:"".concat(r)})]}),Object(u.jsx)("img",{src:a,alt:r,className:"single-comic__char-img"}),Object(u.jsxs)("div",{className:"single-comic__info",children:[Object(u.jsx)("h2",{className:"single-comic__name",children:r}),Object(u.jsx)("p",{className:"single-comic__descr",children:n}),Object(u.jsxs)("div",{className:"single__charactersBTNS",children:[Object(u.jsx)("a",{href:c,className:"button button__main",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{style:{marginLeft:"20px"},href:o,className:"button button__secondary",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})};r(214),e.default=function(){var t=Object(a.useState)(null),e=Object(n.a)(t,2),r=e[0],s=e[1],h=Object(c.g)().charId,f=Object(i.a)(),p=f.clearError,d=f.getCharacter,m=f.process,v=f.setProcess;Object(a.useEffect)((function(){g()}),[h]);var g=function(){p(),d(h).then(b).then((function(){return v("confirmed")}))},b=function(t){s(t)};return Object(u.jsx)("div",{className:"single-comic",children:Object(o.a)(l,m,r)})}},27:function(t,e,r){"use strict";var n=r.p+"static/media/error.95e73800.gif",a=r(2);e.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"150px",height:"150px",margin:"auto"},src:n,alt:"error gif"})}},28:function(t,e,r){t.exports=r(36)},29:function(t,e,r){"use strict";function n(t,e,r,n,a,c,o){try{var i=t[c](o),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,c){var o=t.apply(e,r);function i(t){n(o,a,c,i,s,"next",t)}function s(t){n(o,a,c,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))},31:function(t,e,r){"use strict";var n=r(28),a=r.n(n),c=r(29),o=r(4),i=r(0);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(o.a)(t,2),r=e[0],n=e[1];return{request:Object(i.useCallback)(function(){var t=Object(c.a)(a.a.mark((function t(e){var r,c,o,i,s=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",c=s.length>2&&void 0!==s[2]?s[2]:null,o=s.length>3&&void 0!==s[3]?s[3]:{"Content-type":"application/json"},n("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:c,headers:o});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,"; status: ").concat(i.status));case 10:return t.abrupt("return",i.json());case 13:throw t.prev=13,t.t0=t.catch(4),n("error"),t.t0;case 17:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:r,setProcess:n}}(),e=t.request,r=t.clearError,n=t.process,s=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=bc1bc939b59f4d12e5d6c2fcf66f7563",h=function(){var t=Object(c.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.total);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(){var r,n,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:100,t.next=3,e("".concat(u,"characters?limit=100&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(b));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(){var r,n,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:10,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(b));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(r,"&").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(b));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",b(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(){var r,n,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:0,t.next=3,e("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(y));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(c.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",y(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){return{id:t.id,name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},y=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available",pageCount:t.pageCount?"".concat(t.pageCount," pages"):"No information about the number of pages",url:t.urls[0].url}};return{total:h,process:n,getEveryOne:f,getAllCharacters:p,getCharacterByName:d,getCharacter:m,clearError:r,setProcess:s,getAllComics:v,getComics:g}}},36:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,c=Object.create(a.prototype),o=new L(n||[]);return c._invoke=function(t,e,r){var n=h;return function(a,c){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw c;return P()}for(r.method=a,r.arg=c;;){var o=r.delegate;if(o){var i=k(o,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,o),c}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function b(){}var y={};s(y,c,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(C([])));x&&x!==r&&n.call(x,c)&&(y=x);var w=b.prototype=v.prototype=Object.create(y);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(a,c,o,i){var s=l(t[a],t,c);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,i)}),(function(t){r("throw",t,o,i)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,i)}))}i(s.arg)}var a;this._invoke=function(t,n){function c(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(c,c):c()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var c=a.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var r=t[c];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=b,s(w,"constructor",b),s(b,"constructor",g),g.displayName=s(b,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(_.prototype),s(_.prototype,o,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,c){void 0===c&&(c=Promise);var o=new _(u(e,r,n,a),c);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(w),s(w,i,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=t,o.arg=e,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},40:function(t,e,r){"use strict";var n=r(27),a=r(9),c=(r(42),r(2)),o=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(c.jsxs)("div",{className:"skeleton",children:[Object(c.jsxs)("div",{className:"pulse skeleton__header",children:[Object(c.jsx)("div",{className:"pulse skeleton__circle"}),Object(c.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(c.jsx)("div",{className:"pulse skeleton__block"}),Object(c.jsx)("div",{className:"pulse skeleton__block"}),Object(c.jsx)("div",{className:"pulse skeleton__block"})]})]})};e.a=function(t,e,r){switch(e){case"waiting":return Object(c.jsx)(o,{});case"loading":return Object(c.jsx)(a.a,{});case"error":return Object(c.jsx)(n.a,{});case"confirmed":return Object(c.jsx)(t,{data:r});default:throw new n.a("Unexpected process state")}}},42:function(t,e,r){}}]);
//# sourceMappingURL=7.cdab1c92.chunk.js.map