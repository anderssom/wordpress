(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[4],{1:function(t,n){t.exports=googlesitekit.i18n},12:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"h",(function(){return o})),e.d(n,"i",(function(){return u})),e.d(n,"f",(function(){return c})),e.d(n,"g",(function(){return s})),e.d(n,"e",(function(){return l})),e.d(n,"d",(function(){return f}));var r="core/user",i="connected_url_mismatch",a="googlesitekit_authenticate",o="googlesitekit_setup",u="googlesitekit_view_dashboard",c="googlesitekit_manage_options",s="googlesitekit_read_shared_module_data",l="googlesitekit_manage_module_sharing_options",f="googlesitekit_delegate_module_sharing_management"},243:function(t,n,e){"use strict";(function(t){var r=e(59),i=e.n(r),a=e(244),o=t._googlesitekitAPIFetchData||{},u=o.nonce,c=o.nonceEndpoint,s=o.preloadedData,l=o.rootURL;i.a.nonceEndpoint=c,i.a.nonceMiddleware=i.a.createNonceMiddleware(u),i.a.rootURLMiddleware=i.a.createRootURLMiddleware(l),i.a.preloadingMiddleware=Object(a.a)(s),i.a.use(i.a.nonceMiddleware),i.a.use(i.a.mediaUploadMiddleware),i.a.use(i.a.rootURLMiddleware),i.a.use(i.a.preloadingMiddleware),n.default=i.a}).call(this,e(21))},244:function(t,n,e){"use strict";var r=e(213);n.a=function(t){var n=Object.keys(t).reduce((function(n,e){return n[Object(r.getStablePath)(e)]=t[e],n}),{}),e=!1;return function(t,i){if(e)return i(t);setTimeout((function(){e=!0}),1e3);var a=t.parse,o=void 0===a||a,u=t.path;if("string"==typeof t.path){var c,s=(null===(c=t.method)||void 0===c?void 0:c.toUpperCase())||"GET",l=Object(r.getStablePath)(u);if(o&&"GET"===s&&n[l]){var f=Promise.resolve(n[l].body);return delete n[l],f}if("OPTIONS"===s&&n[s]&&n[s][l]){var d=Promise.resolve(n[s][l]);return delete n[s][l],d}}return i(t)}}},31:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r="_googlesitekitDataLayer",i="data-googlesitekit-gtag"},32:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return y})),e.d(n,"b",(function(){return m}));var r=e(85),i=t._googlesitekitTrackingData||{},a=i.activeModules,o=void 0===a?[]:a,u=i.isSiteKitScreen,c=i.trackingEnabled,s=i.trackingID,l=i.referenceSiteURL,f=i.userIDHash,d=i.isAuthenticated,v={activeModules:o,trackingEnabled:c,trackingID:s,referenceSiteURL:l,userIDHash:f,isSiteKitScreen:u,userRoles:i.userRoles,isAuthenticated:d,pluginVersion:"1.87.0"},p=Object(r.a)(v),g=p.enableTracking,b=p.disableTracking,h=(p.isTrackingEnabled,p.initializeSnippet),m=p.trackEvent;function y(t){t?g():b()}u&&c&&h()}).call(this,e(21))},36:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return u})),e.d(n,"f",(function(){return c}));var r="Date param must construct to a valid date instance or be a valid date instance itself.",i="Invalid dateString parameter, it must be a string.",a='Invalid date range, it must be a string with the format "last-x-days".',o=3600,u=86400,c=604800},37:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(t){return t instanceof Date&&!isNaN(t)}},38:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(14),i=e.n(r),a=e(7),o=e.n(a),u=e(36),c=e(43),s=function(t){o()(Object(c.a)(t),u.e);var n=t.split("-"),e=i()(n,3),r=e[0],a=e[1],s=e[2];return new Date(r,a-1,s)}},42:function(t,n,e){"use strict";(function(t){var r,i;e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));var a=new Set((null===(r=t)||void 0===r||null===(i=r._googlesitekitBaseData)||void 0===i?void 0:i.enabledFeatures)||[]),o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return n instanceof Set&&n.has(t)}}).call(this,e(21))},43:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(37),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="string"==typeof t;if(!n)return!1;var e=t.split("-");return 3===e.length&&Object(r.a)(new Date(t))}},44:function(t,n,e){"use strict";(function(t){e.d(n,"b",(function(){return h})),e.d(n,"d",(function(){return m})),e.d(n,"a",(function(){return y})),e.d(n,"c",(function(){return w}));var r=e(5),i=e.n(r),a=e(15),o=e.n(a),u=(e(24),e(8));function c(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==e.return||e.return()}finally{if(u)throw a}}}}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var l,f="googlesitekit_".concat("1.87.0","_"),d=["sessionStorage","localStorage"],v=[].concat(d),p=function(){var n=o()(i.a.mark((function n(e){var r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t[e]){n.next=3;break}return n.abrupt("return",!1);case 3:return n.prev=3,a="__storage_test__",r.setItem(a,a),r.removeItem(a),n.abrupt("return",!0);case 10:return n.prev=10,n.t0=n.catch(3),n.abrupt("return",n.t0 instanceof DOMException&&(22===n.t0.code||1014===n.t0.code||"QuotaExceededError"===n.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.t0.name)&&0!==r.length);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(t){return n.apply(this,arguments)}}();function g(){return b.apply(this,arguments)}function b(){return(b=o()(i.a.mark((function n(){var e,r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===l){n.next=2;break}return n.abrupt("return",l);case 2:e=c(v),n.prev=3,e.s();case 5:if((r=e.n()).done){n.next=15;break}if(a=r.value,!l){n.next=9;break}return n.abrupt("continue",13);case 9:return n.next=11,p(a);case 11:if(!n.sent){n.next=13;break}l=t[a];case 13:n.next=5;break;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(3),e.e(n.t0);case 20:return n.prev=20,e.f(),n.finish(20);case 23:return void 0===l&&(l=null),n.abrupt("return",l);case 25:case"end":return n.stop()}}),n,null,[[3,17,20,23]])})))).apply(this,arguments)}var h=function(){var t=o()(i.a.mark((function t(n){var e,r,a,o,u,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(!(e=t.sent)){t.next=10;break}if(!(r=e.getItem("".concat(f).concat(n)))){t.next=10;break}if(a=JSON.parse(r),o=a.timestamp,u=a.ttl,c=a.value,s=a.isError,!o||u&&!(Math.round(Date.now()/1e3)-o<u)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:c,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var n=o()(i.a.mark((function n(e,r){var a,o,c,s,l,d,v,p,b=arguments;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=b.length>2&&void 0!==b[2]?b[2]:{},o=a.ttl,c=void 0===o?u.b:o,s=a.timestamp,l=void 0===s?Math.round(Date.now()/1e3):s,d=a.isError,v=void 0!==d&&d,n.next=3,g();case 3:if(!(p=n.sent)){n.next=14;break}return n.prev=5,p.setItem("".concat(f).concat(e),JSON.stringify({timestamp:l,ttl:c,value:r,isError:v})),n.abrupt("return",!0);case 10:return n.prev=10,n.t0=n.catch(5),t.console.warn("Encountered an unexpected storage error:",n.t0),n.abrupt("return",!1);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[5,10]])})));return function(t,e){return n.apply(this,arguments)}}(),y=function(){var n=o()(i.a.mark((function n(e){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:if(!(r=n.sent)){n.next=13;break}return n.prev=4,r.removeItem("".concat(f).concat(e)),n.abrupt("return",!0);case 9:return n.prev=9,n.t0=n.catch(4),t.console.warn("Encountered an unexpected storage error:",n.t0),n.abrupt("return",!1);case 13:return n.abrupt("return",!1);case 14:case"end":return n.stop()}}),n,null,[[4,9]])})));return function(t){return n.apply(this,arguments)}}(),w=function(){var n=o()(i.a.mark((function n(){var e,r,a,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:if(!(e=n.sent)){n.next=14;break}for(n.prev=4,r=[],a=0;a<e.length;a++)0===(o=e.key(a)).indexOf(f)&&r.push(o.substring(f.length));return n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(4),t.console.warn("Encountered an unexpected storage error:",n.t0),n.abrupt("return",[]);case 14:return n.abrupt("return",[]);case 15:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(){return n.apply(this,arguments)}}()}).call(this,e(21))},48:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a})),e.d(n,"d",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"e",(function(){return c}));var r=e(100);function i(t){try{return new URL(t).pathname}catch(t){}return null}function a(t,n){try{return new URL(n,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof n?n:"")}function o(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function u(t){return/^#\w[A-Za-z0-9-_]*$/.test(t)}function c(t,n){if(!Object(r.a)(t))return t;if(t.length<=n)return t;var e=new URL(t),i=t.replace(e.origin,"");if(i.length<n)return i;var a=i.length-Math.floor(n)+1;return"…"+i.substr(a)}},51:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(31);function i(t){return function(){t[r.a]=t[r.a]||[],t[r.a].push(arguments)}}},58:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"e",(function(){return o})),e.d(n,"d",(function(){return u})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return s}));e(57);var r="missing_required_scopes",i="insufficientPermissions",a="forbidden";function o(t){return(null==t?void 0:t.code)===r}function u(t){var n;return[i,a].includes(null==t||null===(n=t.data)||void 0===n?void 0:n.reason)}function c(t){var n;return!!(null==t||null===(n=t.data)||void 0===n?void 0:n.reconnectURL)}function s(t,n){return!(!(null==n?void 0:n.storeName)||u(t)||o(t)||c(t))}},62:function(t,n,e){"use strict";(function(t){var r=e(0),i=e.n(r),a=e(11),o=e.n(a);function ChangeArrow(n){var e=n.direction,r=n.invertColor,i=n.width,a=n.height;return t.createElement("svg",{className:o()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(e),{"googlesitekit-change-arrow--inverted-color":r}),width:i,height:a,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:i.a.string,invertColor:i.a.bool,width:i.a.number,height:i.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},n.a=ChangeArrow}).call(this,e(3))},63:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return u}));var r=e(30),i=e.n(r),a=e(75),o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:a.a.sanitize(t,n)}};function u(t){var n,e="object"===i()(t)?t.toString():t;return null==e||null===(n=e.replace)||void 0===n?void 0:n.call(e,/\/+$/,"")}},635:function(t,n,e){"use strict";(function(t){var r=e(5),i=e.n(r),a=e(15),o=e.n(a),u=e(7),c=e.n(u),s=e(243),l=e(250),f=e(44),d=e(8),v=e(58),p=e(752),g=e(12),b=!0,h=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=[t,n,e].filter((function(t){return!!t&&t.length}));return 3===i.length&&r&&r.constructor===Object&&Object.keys(r).length&&i.push(Object(d.y)(r)),i.join("::")},m=function(n){var e,r,i,a=null===(e=t.googlesitekit)||void 0===e||null===(r=e.data)||void 0===r||null===(i=r.dispatch)||void 0===i?void 0:i.call(r,g.a);a&&(Object(v.e)(n)?a.setPermissionScopeError(n):Object(v.b)(n)&&a.setAuthError(n))},y=function(){var n=o()(i.a.mark((function n(e,r,a){var o,u,v,g,b,y,w,O,j,_,x,S,D,E,P,N,I,L=arguments;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=L.length>3&&void 0!==L[3]?L[3]:{},u=o.bodyParams,v=o.cacheTTL,g=void 0===v?d.b:v,b=o.method,y=void 0===b?"GET":b,w=o.queryParams,O=o.useCache,j=void 0===O?void 0:O,_=o.signal,c()(e,"`type` argument for requests is required."),c()(r,"`identifier` argument for requests is required."),c()(a,"`datapoint` argument for requests is required."),x="GET"===y&&(void 0!==j?j:k()),S=h(e,r,a,w),!x){n.next=18;break}return n.next=9,Object(f.b)(S);case 9:if(D=n.sent,E=D.cacheHit,P=D.value,!D.isError){n.next=16;break}throw m(P),P;case 16:if(!E){n.next=18;break}return n.abrupt("return",P);case 18:return n.prev=18,n.next=21,Object(s.default)({data:u,method:y,signal:_,path:Object(l.a)("/google-site-kit/v1/".concat(e,"/").concat(r,"/data/").concat(a),w)});case 21:if(N=n.sent,!x){n.next=25;break}return n.next=25,Object(f.d)(S,N,{ttl:g});case 25:return n.abrupt("return",N);case 28:if(n.prev=28,n.t0=n.catch(18),!(null==_?void 0:_.aborted)){n.next=32;break}throw n.t0;case 32:if(!(null===n.t0||void 0===n.t0||null===(I=n.t0.data)||void 0===I?void 0:I.cacheTTL)){n.next=35;break}return n.next=35,Object(f.d)(S,n.t0,{ttl:n.t0.data.cacheTTL,isError:!0});case 35:throw Object(p.a)({method:y,datapoint:a,type:e,identifier:r,error:n.t0}),m(n.t0),t.console.error("Google Site Kit API Error","method:".concat(y),"datapoint:".concat(a),"type:".concat(e),"identifier:".concat(r),'error:"'.concat(n.t0.message,'"')),n.t0;case 39:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t,e,r){return n.apply(this,arguments)}}(),w=function(){var t=o()(i.a.mark((function t(n,e,r,a){var o,u,c,s,l,f,v=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>4&&void 0!==v[4]?v[4]:{},u=o.cacheTTL,c=void 0===u?d.b:u,s=o.useCache,l=void 0===s?void 0:s,f=o.signal,t.abrupt("return",y(n,e,r,{cacheTTL:c,queryParams:a,useCache:l,signal:f}));case 2:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}(),O=function(){var t=o()(i.a.mark((function t(n,e,r,a){var o,u,c,s,l,f,d,v=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>4&&void 0!==v[4]?v[4]:{},u=o.method,c=void 0===u?"POST":u,s=o.queryParams,l=void 0===s?{}:s,f=o.signal,t.next=3,y(n,e,r,{bodyParams:{data:a},method:c,queryParams:l,useCache:!1,signal:f});case 3:return d=t.sent,t.next=6,j(n,e,r);case 6:return t.abrupt("return",d);case 7:case"end":return t.stop()}}),t)})));return function(n,e,r,i){return t.apply(this,arguments)}}(),k=function(){return b},j=function(){var t=o()(i.a.mark((function t(n,e,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h(n,e,r),t.next=3,Object(f.c)();case 3:t.sent.forEach((function(t){0===t.indexOf(a)&&Object(f.a)(t)}));case 5:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),_={invalidateCache:j,get:w,set:O,setUsingCache:function(t){return b=!!t},usingCache:k};n.a=_}).call(this,e(21))},68:function(t,n,e){"use strict";e.d(n,"d",(function(){return r.e})),e.d(n,"c",(function(){return r.d})),e.d(n,"b",(function(){return r.b})),e.d(n,"a",(function(){return r.a})),e.d(n,"e",(function(){return r.f})),e.d(n,"g",(function(){return u})),e.d(n,"h",(function(){return s})),e.d(n,"i",(function(){return l})),e.d(n,"j",(function(){return f.a})),e.d(n,"f",(function(){return v})),e.d(n,"k",(function(){return c.a}));var r=e(36),i=e(7),a=e.n(i),o=e(37),u=function(t){a()(Object(o.a)(t),r.c);var n="".concat(t.getMonth()+1),e="".concat(t.getDate());return[t.getFullYear(),n.length<2?"0".concat(n):n,e.length<2?"0".concat(e):e].join("-")},c=e(38),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,e=Object(c.a)(t);return e.setDate(e.getDate()-n),u(e)},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=t.split("-");return 3===n.length&&"last"===n[0]&&!Number.isNaN(n[1])&&!Number.isNaN(parseFloat(n[1]))&&"days"===n[2]},f=e(43);var d=e(1);function v(){var t=function(t){return Object(d.sprintf)(
/* translators: %s: number of days */
Object(d._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},73:function(t,n,e){"use strict";(function(t){e.d(n,"c",(function(){return O})),e.d(n,"d",(function(){return j})),e.d(n,"b",(function(){return _})),e.d(n,"a",(function(){return x}));var r=e(14),i=e.n(r),a=e(30),o=e.n(a),u=e(6),c=e.n(u),s=e(20),l=e.n(s),f=e(26),d=e(72),v=e.n(d),p=e(1);function g(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function b(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?g(Object(e),!0).forEach((function(n){c()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var h=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=m(t,n),r=e.formatUnit,i=e.formatDecimal;try{return r()}catch(t){return i()}},m=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var e=Math.floor(t/60/60),r=Math.floor(t/60%60),i=Math.floor(t%60);return{hours:e,minutes:r,seconds:i,formatUnit:function(){var a=n.unitDisplay,o=b(b({unitDisplay:void 0===a?"short":a},l()(n,["unitDisplay"])),{},{style:"unit"});return 0===t?j(i,b(b({},o),{},{unit:"second"})):Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?j(i,b(b({},o),{},{unit:"second"})):"",r?j(r,b(b({},o),{},{unit:"minute"})):"",e?j(e,b(b({},o),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var n=Object(p.sprintf)(// translators: %s: number of seconds with "s" as the abbreviated unit.
Object(p.__)("%ds","google-site-kit"),i);if(0===t)return n;var a=Object(p.sprintf)(// translators: %s: number of minutes with "m" as the abbreviated unit.
Object(p.__)("%dm","google-site-kit"),r),o=Object(p.sprintf)(// translators: %s: number of hours with "h" as the abbreviated unit.
Object(p.__)("%dh","google-site-kit"),e);return Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),i?n:"",r?a:"",e?o:"").trim()}}},y=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},w=function(t){var n={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in millions.
Object(p.__)("%sM","google-site-kit"),j(y(t),t%10==0?{}:n)):1e4<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t))):1e3<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t),t%10==0?{}:n)):j(t,{signDisplay:"never",maximumFractionDigits:1})},O=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(f.isFinite)(t)?t:Number(t),Object(f.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var e={};if("%"===n)e={style:"percent",maximumFractionDigits:2};else{if("s"===n)return h(t,{unitDisplay:"narrow"});n&&"string"==typeof n?e={style:"currency",currency:n}:Object(f.isPlainObject)(n)&&(e=b({},n))}var r=e,i=r.style,a=void 0===i?"metric":i;return"metric"===a?w(t):"duration"===a?h(t,n):j(t,e)},k=v()(console.warn),j=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.locale,r=void 0===e?x():e,a=l()(n,["locale"]);try{return new Intl.NumberFormat(r,a).format(t)}catch(n){k("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r),", ").concat(JSON.stringify(a)," ).format( ").concat(o()(t)," )"),n.message)}for(var u={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},c=["signDisplay","compactDisplay"],s={},f=0,d=Object.entries(a);f<d.length;f++){var v=i()(d[f],2),p=v[0],g=v[1];u[p]&&g===u[p]||(c.includes(p)||(s[p]=g))}try{return new Intl.NumberFormat(r,s).format(t)}catch(n){return new Intl.NumberFormat(r).format(t)}},_=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.locale,r=void 0===e?x():e,i=n.style,a=void 0===i?"long":i,o=n.type,u=void 0===o?"conjunction":o;if(Intl.ListFormat){var c=new Intl.ListFormat(r,{style:a,type:u});return c.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(p.__)(", ","google-site-kit");return t.join(s)},x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,e=Object(f.get)(n,["_googlesitekitLegacyData","locale"]);if(e){var r=e.match(/^(\w{2})?(_)?(\w{2})/);if(r&&r[0])return r[0].replace(/_/g,"-")}return n.navigator.language}}).call(this,e(21))},75:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return i}));var r=e(122),i=e.n(r)()(t)}).call(this,e(21))},752:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e(5),i=e.n(r),a=e(15),o=e.n(a),u=e(8),c=["fetch_error"];function s(t){return l.apply(this,arguments)}function l(){return(l=o()(i.a.mark((function t(n){var e,r,a,o,s,l,f,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.method,o=n.type,s=n.identifier,l=n.datapoint,(f=n.error)&&!c.includes(null==f?void 0:f.code)){t.next=3;break}return t.abrupt("return");case 3:return d="code: ".concat(f.code),(null===(e=f.data)||void 0===e?void 0:e.reason)&&(d+=", reason: ".concat(f.data.reason)),t.next=7,Object(u.z)("api_error","".concat(a,":").concat(o,"/").concat(s,"/data/").concat(l),"".concat(f.message," (").concat(d,")"),(null===(r=f.data)||void 0===r?void 0:r.status)||f.code);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},8:function(t,n,e){"use strict";e.d(n,"z",(function(){return u.b})),e.d(n,"w",(function(){return c.a})),e.d(n,"A",(function(){return c.b})),e.d(n,"y",(function(){return v})),e.d(n,"f",(function(){return p.a})),e.d(n,"m",(function(){return p.b})),e.d(n,"u",(function(){return g.c})),e.d(n,"v",(function(){return g.d})),e.d(n,"r",(function(){return g.b})),e.d(n,"l",(function(){return g.a})),e.d(n,"s",(function(){return y})),e.d(n,"g",(function(){return w})),e.d(n,"b",(function(){return O.b})),e.d(n,"a",(function(){return O.a})),e.d(n,"c",(function(){return O.e})),e.d(n,"i",(function(){return O.f})),e.d(n,"x",(function(){return O.k})),e.d(n,"j",(function(){return k.b})),e.d(n,"q",(function(){return k.c})),e.d(n,"e",(function(){return k.a})),e.d(n,"o",(function(){return j.b})),e.d(n,"k",(function(){return j.a})),e.d(n,"t",(function(){return j.d})),e.d(n,"p",(function(){return _})),e.d(n,"n",(function(){return x})),e.d(n,"d",(function(){return S})),e.d(n,"B",(function(){return D})),e.d(n,"h",(function(){return E}));var r=e(121),i=e.n(r),a=e(117),o=e.n(a),u=e(32),c=e(63),s=e(30),l=e.n(s),f=e(79),d=e.n(f),v=function(t){return d()(JSON.stringify(function t(n){var e={};return Object.keys(n).sort().forEach((function(r){var i=n[r];i&&"object"===l()(i)&&!Array.isArray(i)&&(i=t(i)),e[r]=i})),e}(t)))};var p=e(80),g=(e(83),e(73));function b(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function h(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function m(t){return t.replace(/\n/gi,"<br>")}function y(t){for(var n=t,e=0,r=[b,h,m];e<r.length;e++){n=(0,r[e])(n)}return n}var w=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},O=e(68),k=e(84),j=e(48);function _(t){if("number"==typeof t)return!0;var n=(t||"").toString();return!!n&&!isNaN(n)}var x=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},S=function(t,n){if("0"===t||0===t||isNaN(t))return null;var e=(n-t)/t;return isNaN(e)||!i()(e)?null:e},D=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},E=function(t){if(!t)return"";var n=t.replace(/&#(\d+);/g,(function(t,n){return String.fromCharCode(n)})).replace(/(\\)/g,"");return o()(n)}},80:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return s}));var r=e(14),i=e.n(r);function a(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var u=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},c=function(t){for(var n=location.search.substr(1).split("&"),e={},r=0;r<n.length;r++)e[n[r].split("=")[0]]=decodeURIComponent(n[r].split("=")[1]);return t?e.hasOwnProperty(t)?decodeURIComponent(e[t].replace(/\+/g," ")):"":e},s=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,e=new URL(n.href);if(t)return e.searchParams&&e.searchParams.get?e.searchParams.get(t):c(t);var r,o={},u=a(e.searchParams.entries());try{for(u.s();!(r=u.n()).done;){var s=i()(r.value,2),l=s[0],f=s[1];o[l]=f}}catch(t){u.e(t)}finally{u.f()}return o}}).call(this,e(21))},83:function(t,n,e){"use strict";(function(t){e(49),e(50)}).call(this,e(21))},84:function(t,n,e){"use strict";(function(t){e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var r=e(168),i=e(62),a=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(n)))return"";var a=e.invertColor,o=void 0!==a&&a;return Object(r.a)(t.createElement(i.a,{direction:n>0?"up":"down",invertColor:o}))},o=function(t){var n,e,r,i,a,o,u,c,s,l,f,d,v,p,g;if(void 0!==t)return 1===(null==t||null===(n=t[0])||void 0===n||null===(e=n.data)||void 0===e||null===(r=e.rows)||void 0===r?void 0:r.length)||(null==t||null===(i=t[0])||void 0===i||null===(a=i.data)||void 0===a||null===(o=a.rows)||void 0===o||null===(u=o[0])||void 0===u||null===(c=u.metrics)||void 0===c||null===(s=c[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(v=d.totals)||void 0===v||null===(p=v[0])||void 0===p||null===(g=p.values)||void 0===g?void 0:g[0])},u=function(t,n){return t>0&&n>0?t/n-1:t>0?1:n>0?-1:0}}).call(this,e(3))},85:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return l}));var r=e(6),i=e.n(r),a=e(86),o=e(87);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){i()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var s={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,i=c(c({},s),n);i.referenceSiteURL&&(i.referenceSiteURL=i.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(a.a)(i,e);return{enableTracking:function(){i.trackingEnabled=!0},disableTracking:function(){i.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!i.trackingEnabled},trackEvent:Object(o.a)(i,e,u,r)}}}).call(this,e(21))},86:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return a}));var r=e(51),i=e(31);function a(n,e){var a,o=Object(r.a)(e);return function(){var e=t.document;if(void 0===a&&(a=!!e.querySelector("script[".concat(i.b,"]"))),!a){var r=e.createElement("script");r.setAttribute(i.b,""),r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(n.trackingID,"&l=").concat(i.a),e.head.appendChild(r),o("js",new Date),o("config",n.trackingID,{send_page_view:n.isSiteKitScreen}),a=!0}}}}).call(this,e(21))},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return v}));var r=e(5),i=e.n(r),a=e(6),o=e.n(a),u=e(15),c=e.n(u),s=e(51),l=e(42);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function v(t,n,e,r){var a=Object(s.a)(n);return function(){var n=c()(i.a.mark((function n(o,u,c,s){var f,v,p,g,b,h,m,y,w,O;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f=t.activeModules,v=t.referenceSiteURL,p=t.trackingEnabled,g=t.trackingID,b=t.userIDHash,h=t.userRoles,m=void 0===h?[]:h,y=t.isAuthenticated,w=t.pluginVersion,p){n.next=3;break}return n.abrupt("return");case 3:return e(),O={send_to:g,event_category:o,event_label:c,value:s,dimension1:v,dimension2:m.join(","),dimension3:b,dimension4:w||"",dimension5:Array.from(l.a).join(","),dimension6:f.join(","),dimension7:y?1:0},n.abrupt("return",new Promise((function(t){var n,e,i=setTimeout((function(){r.console.warn('Tracking event "'.concat(u,'" (category "').concat(o,'") took too long to fire.')),t()}),1e3),c=function(){clearTimeout(i),t()};a("event",u,d(d({},O),{},{event_callback:c})),(null===(n=r._gaUserPrefs)||void 0===n||null===(e=n.ioo)||void 0===e?void 0:e.call(n))&&c()})));case 6:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()}},934:function(t,n,e){"use strict";e.r(n),function(t){var r=e(635);void 0===t.googlesitekit&&(t.googlesitekit={}),void 0===t.googlesitekit.api&&(t.googlesitekit.api=r.a),n.default=r.a}.call(this,e(21))}},[[934,1,0]]]);