(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{732:function(e,t,n){n(32);var r=n(714);n(51),e.exports={data:function(){var e=this;return{errorCodeHandler:{default:{model_not_found:function(){return e.$router.replace("/error")},not_authenticated:function(){return e.$router.push("/user/login")}},thread:{permission_denied:function(){return e.$router.replace("/error")}}}}},methods:{handleError:function(e){var t=arguments,n=this;return r(regeneratorRuntime.mark((function r(){var o,c,f,l,d,_;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:"",c=e.response.data.errors,!(Array.isArray(c)&&c.length>0)){r.next=17;break}if(f=c[0].code,l=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:c[0].code,d=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:n.$t("core.".concat(l)),"site_closed"!==c[0].code){r.next=10;break}return r.next=9,n.siteClose(c);case 9:return r.abrupt("return",r.sent);case 10:if("need_ext_fields"!==c[0].code){r.next=14;break}return _=n.$store.getters["session/get"]("userId"),n.$router.push("/user/supple-mentary?id=".concat(_)),r.abrupt("return");case 14:"Permission Denied"===f?n.$message.error(n.$t("core.permission_denied2")):n.$message.error(d),n.errorCodeHandler.default[f]&&n.errorCodeHandler.default[f](),o&&n.errorCodeHandler[o][f]&&n.errorCodeHandler[o][f]();case 17:case"end":return r.stop()}}),r)})))()},siteClose:function(e){var t=this;return r(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("forum/setError",{code:e[0].code,detail:e[0].detail&&e[0].detail.length>0&&e[0].detail[0]});case 3:return n.next=5,t.$router.push("/site/close");case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}}},797:function(module,exports,__webpack_require__){__webpack_require__(52),__webpack_require__(17),__webpack_require__(39),__webpack_require__(181);var _defineProperty=__webpack_require__(723);__webpack_require__(267),__webpack_require__(27),__webpack_require__(30),__webpack_require__(11),__webpack_require__(51),__webpack_require__(61),__webpack_require__(269);var _typeof2=__webpack_require__(272);function ownKeys(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(t){_defineProperty(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}__webpack_require__(37),__webpack_require__(28),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===_typeof2(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){function r(){return Math.floor(1e8*Math.random())}var o=function(e){e=e?1:0;try{return location.search.substr(e)}catch(r){try{var t=document.URL,n=t.indexOf("?");if(n>=0)return t.substr(n+e)}catch(e){}}return""},a={};!function(){for(var e=o(!0).split("&"),t=0;t<e.length;t++){var n=/(.*?)=(.*)/.exec(e[t]);n&&(a[n[1]]=n[2])}}(),e.exports={href:function(){try{return location.href}catch(e){try{return document.URL}catch(e){}}return""},getQuery:function(e){var t=o();return e=e?1:0,(t=t?"".concat(t.replace(/&rand=[^&]+/,""),"&rand=").concat(r()):"?rand=".concat(r())).substr(e)},queryParam:function(e){return a[e]},queryMap:function(){return $.extend({},a)},parse2rgb:function(e){if(!e||"string"!=typeof e)return null;e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16),s:"#".concat(t[1]).concat(t[2]).concat(t[3])}:null},arrIndexOf:function(e,t){if("function"==typeof e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}}},function(e,t,n){var r=function(){var e=1,t=/subsid=(\d+)/.exec(location.href);t&&(e=parseInt(t[1],10)+1);var n=function(t,n){var r=n||e;return t=/subsid=\d+/.test(t)?t.replace(/subsid=\d+/g,"subsid=".concat(r)):"".concat(t,"&subsid=").concat(r),n||e++,t};return n.get=function(){return e},n.bind=function(){var t=e++;return function(e){return n(e,t)}},n}();e.exports=r},function(e,t,n){var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,c=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===o.call(e)},s=function(e){if(!e||"[object Object]"!==o.call(e))return!1;var t,n=r.call(e,"constructor"),a=e.constructor&&e.constructor.prototype&&r.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!a)return!1;for(t in e);return void 0===t||r.call(e,t)},u=function(e,t){a&&"__proto__"===t.name?a(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},p=function(e,t){if("__proto__"===t){if(!r.call(e,t))return;if(i)return i(e,t).value}return e[t]};e.exports=function e(){var t,n,r,o,f,a,i=arguments[0],l=1,d=arguments.length,_=!1;for("boolean"==typeof i&&(_=i,i=arguments[1]||{},l=2),(null==i||"object"!==_typeof2(i)&&"function"!=typeof i)&&(i={});l<d;++l)if(null!=(t=arguments[l]))for(n in t)r=p(i,n),i!==(o=p(t,n))&&(_&&o&&(s(o)||(f=c(o)))?(f?(f=!1,a=r&&c(r)?r:[]):a=r&&s(r)?r:{},u(i,{name:n,newValue:e(_,a,o)})):void 0!==o&&u(i,{name:n,newValue:o}));return i}},function(e,t,n){var r,o,a=n(1),i={ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL:16,ERROR_TYPE_JSONP_PREHANDLE:17,ERROR_TYPE_FRAMEJS_CODE_ERROR:18,CALLBACK_NAME:19},c={ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL:"ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL",ERROR_TYPE_JSONP_PREHANDLE:"ERROR_TYPE_JSONP_PREHANDLE",ERROR_TYPE_FRAMEJS_CODE_ERROR:"ERROR_TYPE_FRAMEJS_CODE_ERROR",CALLBACK_NAME:"CALLBACK_NAME"},s=(r=document.referrer,o=location.href||document.URL,r=r.length>512?r.substr(0,512):r,o=o.length>1024?o.substr(0,1024):o,["referer=".concat(encodeURIComponent(r)),"href=".concat(encodeURIComponent(o))].join("&"));e.exports={type:i,send:function(e,t,n){try{(n=n||c[e]).length>1024&&n.substr(0,1024);var r=["type=".concat(e=i[e]),"appid=".concat(t),"reason=".concat(encodeURIComponent(n))],o="https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?".concat(s,"&").concat(r.join("&"));(new Image).src=a(o)}catch(e){}},perfectStack:function(e){var t="";e&&e.stack&&(t=e.stack.replace(/\n/gi,"").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi,""));try{var n=e.toString();t.indexOf(n)<0&&(t="".concat(n,"@").concat(t))}catch(e){}return t}}},,function(e,t,n){e.exports={add:function(e,t,n){e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n)},remove:function(e,t,n){e&&(e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on".concat(t),n):e["on".concat(t)]=null)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var i,n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="(".concat(i[2],") and (").concat(n,")")),t.push(i))}},t}},function(e,t){var n,r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},c=o((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),a=o((function(){return document.head||document.getElementsByTagName("head")[0]})),i=null,f=0;function s(e,t){for(var n=0;n<e.length;n++){var o=e[n],c=r[o.id];if(c){c.refs++;for(var i=0;i<c.parts.length;i++)c.parts[i](o.parts[i]);for(;i<o.parts.length;i++)c.parts.push(d(o.parts[i],t))}else{var f=[];for(i=0;i<o.parts.length;i++)f.push(d(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:f}}}}function u(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],c=o[0],f={css:o[1],media:o[2],sourceMap:o[3]};n[c]?n[c].parts.push(f):t.push(n[c]={id:c,parts:[f]})}return t}function p(e,t){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);e.apply(t,n.concat(r))}}function l(){var e=document.createElement("style"),t=a();return e.type="text/css",t.appendChild(e),e}function d(e,t){var n,r,o,s,u;if(t.singleton){var c=f++;n=i||(i=l()),r=p(h,null,n,c,!1),o=p(h,null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=document.createElement("link"),u=a(),s.rel="stylesheet",u.appendChild(s),r=p(y,null,n=s),o=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(),r=p(b,null,n),o=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!==("undefined"==typeof document?"undefined":_typeof2(document)))throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(t=t||{}).singleton&&(t.singleton=c());var n=u(e);return s(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var c=n[a];(f=r[c.id]).refs--,o.push(f)}for(e&&s(u(e),t),a=0;a<o.length;a++){var f;if(0===(f=o[a]).refs){for(var l=0;l<f.parts.length;l++)f.parts[l]();delete r[f.id]}}}};var _=(n=[],function(e,t){var r=[];n[e]=t;for(var o=0;o<n.length;o++)n[o]&&r.push(n[o]);return r.join("\n")});function h(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var c=document.createTextNode(o),f=e.childNodes;f[t]&&e.removeChild(f[t]),f.length?e.insertBefore(c,f[t]):e.appendChild(c)}}function b(e,t){var n=t.css,r=t.media;if(t.sourceMap,r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function y(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */"));var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}},function(module,exports,__webpack_require__){var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(e){return e<10?"0".concat(e):e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'.concat(e.replace(rx_escapable,(function(e){var t=meta[e];return"string"==typeof t?t:"\\u".concat("0000".concat(e.charCodeAt(0).toString(16)).slice(-4))})),'"'):'"'.concat(e,'"')}function str(e,t){var n,r,o,a,i,c=gap,s=t[e];switch(s&&"object"===(void 0===s?"undefined":_typeof(s))&&"function"==typeof s.toJSON&&(s=s.toJSON(e)),"function"==typeof rep&&(s=rep.call(t,e,s)),void 0===s?"undefined":_typeof(s)){case"string":return quote(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(s)){for(a=s.length,n=0;n<a;n+=1)i[n]=str(n,s)||"null";return o=0===i.length?"[]":gap?"[\n".concat(gap).concat(i.join(",\n".concat(gap)),"\n").concat(c,"]"):"[".concat(i.join(","),"]"),gap=c,o}if(rep&&"object"===(void 0===rep?"undefined":_typeof(rep)))for(a=rep.length,n=0;n<a;n+=1)"string"==typeof rep[n]&&(o=str(r=rep[n],s))&&i.push(quote(r)+(gap?": ":":")+o);else for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(o=str(r,s))&&i.push(quote(r)+(gap?": ":":")+o);return o=0===i.length?"{}":gap?"{\n".concat(gap).concat(i.join(",\n".concat(gap)),"\n").concat(c,"}"):"{".concat(i.join(","),"}"),gap=c,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?"".concat(this.getUTCFullYear(),"-").concat(f(this.getUTCMonth()+1),"-").concat(f(this.getUTCDate()),"T").concat(f(this.getUTCHours()),":").concat(f(this.getUTCMinutes()),":").concat(f(this.getUTCSeconds()),"Z"):null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!==(void 0===t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var n,r,o=e[t];if(o&&"object"===(void 0===o?"undefined":_typeof(o)))for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(void 0!==(r=walk(o,n))?o[n]=r:delete o[n]);return reviver.call(e,t,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,(function(e){return"\\u".concat("0000".concat(e.charCodeAt(0).toString(16)).slice(-4))}))),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("(".concat(text,")")),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},function(e,t,n){var r="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)},o="[CODE_VERIFY]",a="postMessage"in window;function i(e,t,n){var o="";if(arguments.length<2?o="[Msger] error 1":"object"!=(void 0===e?"undefined":r(e))?o="[Msger] error 2":"string"!=typeof t&&(o="[Msger] error 3"),o)throw new Error(o);this.target=e,this.name=t,this.domain=n||"*"}function c(e,t){this.targets={},this.name=e,this.listenFunc=[],"string"!=typeof(o=t||o)&&(o=o.toString()),this.initListen()}i.prototype.send=a?function(e){this.target.postMessage(e,this.domain)}:function(e){var t=window.navigator[o+this.name];if("function"!=typeof t)throw new Error("target callback function is not defined");t(e,window)},c.prototype.addTarget=function(e,t,n){var r=new i(e,t,n);this.targets[t]=r},c.prototype.initListen=function(){var e=this,t=function(t){"object"==(void 0===t?"undefined":r(t))&&t.data&&(t=t.data);for(var n=0;n<e.listenFunc.length;n++)e.listenFunc[n](t)};a?"addEventListener"in document?window.addEventListener("message",t,!1):"attachEvent"in document&&window.attachEvent("onmessage",t):window.navigator[o+this.name]=t},c.prototype.listen=function(e){this.listenFunc.push(e)},c.prototype.clear=function(){this.listenFunc=[]},c.prototype.send=function(e){var t,n=this.targets;for(t in n)n.hasOwnProperty(t)&&n[t].send(e)},window.TCapMsg=c,e.exports=c},,,,,,,function(module,exports,__webpack_require__){var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)};if(!0===window.__TencentCaptchaExists__)throw new Error("请勿多次引用腾讯验证码的接入js");window.__TencentCaptchaExists__=!0,__webpack_require__(17),__webpack_require__(8);var Messenger=__webpack_require__(9),domReady=__webpack_require__(19),btoa=window.btoa||__webpack_require__(20),extend=Object.assign||__webpack_require__(2),loadScript=__webpack_require__(21),eventListener=__webpack_require__(5),Executor=__webpack_require__(22),isIEVar=__webpack_require__(23),isElement=__webpack_require__(24),invisibleIframe=__webpack_require__(25),getScriptDomain=__webpack_require__(26),scriptDomain=getScriptDomain()||"",isWechatDevtools=navigator.userAgent&&/wechatdevtools/.test(navigator.userAgent),isWindows=/windows/i.test(navigator.userAgent),isMobile=!isWindows&&("ontouchstart"in window||"ontouchstart"in document.createElement("div")||isWechatDevtools),capDomain="https://ssl.captcha.qq.com";capDomain||(capDomain=scriptDomain);var grayscaleFrameJs="/tcaptcha-frame.2de3157b.js",grayscaleThreshold=1,grayscaleAppId=["123","2100049389","2100049390","2046103261","2070173641","2060075756"],grayscaleProb=Math.random(),needGrayscaleJs=void 0,jsLoadStatus="none",capError=__webpack_require__(3),preVerifyData={},capObj=void 0,initQueue=[],defaultOpt={type:"popup",pos:isIEVar(6)?"absolute":"fixed",lang:2052,showHeader:isMobile,needFeedBack:!0,themeColor:"",tcaptchaFlag:!0,gettype:"cap_union_prehandle",domain:capDomain,htdoc_path:capDomain},noop=function(){},isGrayscaleAppId=function(e){if(void 0!==needGrayscaleJs)return needGrayscaleJs;for(var t=0,n=grayscaleAppId.length;t<n;t++)if(e==grayscaleAppId[t])return needGrayscaleJs=!0;return needGrayscaleJs=!1},callbackWrap=function(e,t){return function(n){"object"===(void 0===n?"undefined":_typeof(n))&&(n=_objectSpread({bizState:e.options.bizState,appid:e.options.appid},n)),t&&t(n)}},executor=new Executor((function(){if(initQueue.length>0){for(var e=0;e<initQueue.length;e++)initQueue[e].show();initQueue.length=0}}),0),Captcha=function Captcha($btn,appid,_tcallback_,opts){var bizState=void 0;if(isElement($btn))if(appid&&"object"===(void 0===appid?"undefined":_typeof(appid)))opts=appid,appid=null,_tcallback_=null;else{if(appid=appid||$btn.getAttribute("data-appid"),!_tcallback_){var callbackName=$btn.getAttribute("data-cbfn");try{_tcallback_=eval("window.".concat(callbackName))}catch(e){throw new Error("Lost `callback`")}}bizState=$btn.getAttribute("data-biz-state")}else{if("string"!=typeof $btn||"function"!=typeof appid)throw new Error("Arguments error.");opts=_tcallback_,_tcallback_=appid,appid=$btn,$btn=null}opts=opts||{},opts.callback=_tcallback_||opts.callback,opts.start=opts.start||noop,opts.end=opts.end||noop;var readyCallback="function"==typeof opts.ready?opts.ready:noop;if(opts.ready=function(e){readyCallback.call(this,e)},opts.appid=appid||opts.appid,opts.bizState=bizState||opts.bizState,opts.fwidth=parseFloat(opts.fwidth)||0,opts.sdkOpts=opts.sdkOpts||null,opts.ele=$btn,this.options=opts,"function"!=typeof opts.callback)throw new Error("Lost `callback`");if(this.initOpts=_objectSpread(_objectSpread({},defaultOpt),opts),this.langFun(),$btn){var that=this;eventListener.add($btn,"click",(function(){that.show()}))}};Captcha.prototype={show:function(){if(executor.isDone)this.__show__();else{for(var e=0;e<initQueue.length;e++)if(initQueue[e]===this)return;initQueue.push(this)}},__show__:function(){var e=this.initOpts;if(void 0===window.AqSCode)return capError.send("ERROR_TYPE_FRAMEJS_CODE_ERROR",e.appid),alert("页面加载异常，请刷新页面重试");this.destroy();var t=[];for(var n in t.push("aid=".concat(e.appid)),t.push("accver=1"),t.push("showtype=".concat(e.type)),t.push("ua=".concat(encodeURIComponent(btoa((navigator.userAgent||"").replace(/[\u00ff-\uffff]+/g,""))))),t.push("noheader=".concat("false"=="".concat(e.showHeader)?"1":"0")),t.push("fb=".concat("false"=="".concat(e.needFeedBack)?"0":"1")),t.push("enableDarkMode=".concat(e.enableDarkMode?"1":"0")),e.sid&&t.push("sid=".concat(e.sid)),preVerifyData)preVerifyData[n]&&t.push("".concat(n,"=").concat(encodeURIComponent(preVerifyData[n])));e.uid="".concat(e.uin||""),needGrayscaleJs&&(t.push("grayscale=1"),e.grayscale=1),isMobile?(t.push("clientype=1"),e.clientype=1,e.forceLang&&t.push("lang=".concat(e.forceLang)),e.params="?".concat(t.join("&"))):(t.push("clientype=2"),e.clientype=2,needGrayscaleJs&&e.forceLang&&t.push("lang=".concat(e.forceLang)),e.params="?".concat(t.join("&")),e.s_type_suffix="?".concat(t.join("&")),e.src="".concat(capDomain,"/template/new_placeholder.html").concat(e.s_type_suffix),e.s_type="".concat(capDomain,"/cap_union_prehandle").concat(e.s_type_suffix),e.slide_src="".concat(capDomain,"/template/new_slide_placeholder.html").concat(e.s_type_suffix),e.fb="false"=="".concat(e.needFeedBack)?"0":"1"),(capObj=new AqSCode(e)).listen(callbackWrap(this,e.callback),callbackWrap(this,e.ready)),capObj.start(callbackWrap(e.start)),capObj.end(callbackWrap(e.end)),(needGrayscaleJs||isMobile)&&((e.top||e.left)&&capObj.initPos({top:e.top||void 0,left:e.left||void 0}),capObj.create())},langFun:function(){if(this.initOpts.forceLang){var e={"zh-cn":"2052","zh-hk":"1028",en:"1033"},t=this.initOpts.forceLang;e[t]?(this.initOpts.lang=e[t],this.initOpts.forceLang=e[t],this.initOpts.forcestyle=1):this.initOpts.forceLang=""}},destroy:function(){capObj&&capObj.destroy&&capObj.destroy()},refresh:function(){capObj&&capObj.refresh&&capObj.refresh()},getTicket:function(){if(capObj&&capObj.getTicket){var e=null;return callbackWrap(this,(function(t){e=t}))(capObj.getTicket()),e}return null}};var autoBindBtn=function(){var e=document.getElementById("TencentCaptcha");e&&new Captcha(e)};executor.exec((function(e){domReady((function(){try{autoBindBtn()}catch(e){}new Messenger("TCaptchaVerifyDetect").listen((function(e){if(e&&"object"===(void 0===e?"undefined":_typeof(e)))switch(e.type){case"preVerify":extend(preVerifyData,e.data)}}));try{invisibleIframe("".concat(capDomain,"/template/captcha-pre-verify.html"))}catch(e){}e()}))})),executor.exec((function(e){jsLoadStatus="loading",needGrayscaleJs=!0,loadScript(grayscaleFrameJs,capDomain,capDomain,(function(){return!!window.AqSCode}),(function(){jsLoadStatus="loaded",e()}),(function(){jsLoadStatus="none",capError.send("ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL"),e()}))})),window.TencentCaptcha=Captcha},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]),n(7)(r,{}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"@keyframes animate_dots{0%{opacity:1}to{opacity:0}}@-webkit-keyframes animate_dots{0%{opacity:1}to{opacity:0}}.dot0,.dot1{animation:animate_dots .9s infinite;-moz-animation:animate_dots .9s infinite;-webkit-animation:animate_dots .9s infinite;-o-animation:animate_dots .9s infinite}.dot1{animation-delay:.2s;-webkit-animation-delay:.2s}.dot2{animation:animate_dots .9s infinite;-moz-animation:animate_dots .9s infinite;-webkit-animation:animate_dots .9s infinite;-o-animation:animate_dots .9s infinite;animation-delay:.4s;-webkit-animation-delay:.4s}.dots_item{display:inline-block;margin-right:5px;width:10px;height:10px;border-radius:50%;background:#4886ff}.verify-icon{position:absolute;width:100%;margin-top:70px;text-align:center}.t-mask{width:100%;height:100%;position:fixed;_position:absolute;left:0;top:0;background:#000;opacity:.5;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50);z-index:2000000000}",""])},function(e,t,n){e.exports=function(e){var t,n=[],r=document,o=r.documentElement,a=o.doScroll,i=(a?/^loaded|^c/:/^loaded|c/).test(r.readyState);function c(e){for(i=1;e=n.shift();)e()}return r.addEventListener&&r.addEventListener("DOMContentLoaded",t=function(){r.removeEventListener("DOMContentLoaded",t,!1),c()},!1),a&&r.attachEvent("onreadystatechange",t=function(){/^c/.test(r.readyState)&&(r.detachEvent("onreadystatechange",t),c())}),e=a?function(t){self!=top?i?t():n.push(t):function(){try{o.doScroll("left")}catch(n){return setTimeout((function(){e(t)}),50)}t()}()}:function(e){i?e():n.push(e)}}()},function(e,t,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=function(e){var t=[0,2,1][e.length%3],n=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[r.charAt(n>>>18),r.charAt(n>>>12&63),t>=2?"=":r.charAt(n>>>6&63),t>=1?"=":r.charAt(63&n)].join("")};e.exports=function(e){return e.replace(/[\s\S]{1,3}/g,o)}},function(e,t,n){e.exports=function e(t,n,r,a,i,o,s){s=s||1;var u=!1,p=document.createElement("script");function c(e){u||(e&&"load"===e.type||/^(loaded|complete)$/.test(this.readyState))&&(a()?(u=!0,i&&i()):f())}p.type="text/javascript",p.async=!0,p.src=(s>1?r:n)+t,"onload"in p?p.onload=c:p.onreadystatechange=c;var f=function(){u||(u=!0,s>=2?o&&o():e(t,n,r,a,i,o,s+1))};p.onerror=f,document.getElementsByTagName("head").item(0).appendChild(p)}},function(e,t,n){var r=function(e,t){this.i=0,this.doneCallback=e,this.isDone=!1,this.timeout=t||0;var n=this;this.immediateExec=setTimeout((function(){n.doneCheck()}),0)};r.prototype={doneCheck:function(e,t){try{e&&e(t)}catch(e){}if(this.i--,this.i<=0)try{this.isDone=!0,this.doneCallback()}catch(e){}},exec:function(e,t,n){clearTimeout(this.immediateExec);var r=!1,o="",a=this;this.i++,this.i>0&&(this.isDone=!1);try{(o=e((function(e){r||(r=!0,setTimeout((function(){a.doneCheck(t,e)}),0))})))&&(r=!0,setTimeout((function(){a.doneCheck(t,o)}),0))}catch(e){}(n=n||this.timeout||0)>0&&setTimeout((function(){r||(r=!0,a.doneCheck(t,""))}),n)}},e.exports=r},function(e,t,n){e.exports=function(e){var t=document.createElement("b");return t.innerHTML="\x3c!--[if IE ".concat(e,"]><i></i><![endif]--\x3e"),t.getElementsByTagName("i")&&1===t.getElementsByTagName("i").length}},function(e,t,n){var r="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)};e.exports=function(e){try{return e instanceof HTMLElement}catch(t){return"object"===(void 0===e?"undefined":r(e))&&1===e.nodeType&&"object"===r(e.style)&&"object"===r(e.ownerDocument)}}},function(e,t,n){e.exports=function(e){var t=document.createElement("iframe");return t.src=e,t.style.cssText="width: 0px; height: 0px; display: none;",(document.body||document.getElementsByTagName("body").item("0")).appendChild(t),t}},function(e,t,n){var r=n(0).href;e.exports=function(){try{var e=document.getElementById("CaptchaScript")||function(){for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++){var n=e[t];if(n.src.match(/captcha\.js/i))return n}}()||"";if(!e)return"";var t=e.src,n=function(e){var t=e.split("?");if(2!==t.length)return{};for(var n=t[1]&&t[1].split("&"),r={},o=0;o<n.length;o++){var c=n[o].split("=");c[1]&&(r[c[0]]=decodeURIComponent(c[1]))}return r}(t).domain;if(n)return n;var i=/(https?\:\/\/[0-9a-zA-Z-:\.]+)\//i,o=t.match(i)||r().match(i);return o?o[1]:""}catch(e){return""}}}])}}]);