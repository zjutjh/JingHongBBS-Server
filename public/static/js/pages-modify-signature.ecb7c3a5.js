(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-modify-signature"],{"09a9":function(t,e,s){"use strict";(function(t){var i;s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return i}));try{i={quiPage:s("29c4").default,quiButton:s("8397").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("qui-page",{staticClass:"page-sinature",attrs:{"data-qui-theme":t.theme}},[s("v-uni-view",{staticClass:"aogph"},[s("v-uni-view",{staticClass:"aogph-tab"},[s("v-uni-view",{staticClass:"aogph-tab-ao"},[s("v-uni-view",{staticClass:"aogph-tab-ao-my"},[t._v(t._s(t.i18n.t("modify.mysignture")))]),s("v-uni-view",{staticClass:"aogph-tab-ao-test"},[t._v(t._s(t.i18n.t("modify.canalsoinput"))+"\n          "+t._s(t.num-t.wordnumber)+t._s(t.i18n.t("modify.wordnumber")))])],1),s("v-uni-view",{staticClass:"aogph-tab-input"},[s("v-uni-textarea",{staticClass:"aogph-tab-input-in",attrs:{type:"text",maxlength:"140",placeholder:t.i18n.t("modify.signturecontent"),"placeholder-style":"color:rgba(181,181,181,1)",focus:!0,cursor:t.focuscours,"show-confirm-bar":!1},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.fun.apply(void 0,arguments)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),s("v-uni-view",{staticClass:"aogph-tab-input-text"})],1),s("v-uni-view",{staticClass:"aogph-tab-button"},[s("qui-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnbutton.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("modify.submission")))])],1)],1)],1)],1)},r=[]}).call(this,s("5a52").default)},"1c78":function(t,e,s){(e=s("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.page-sinature[data-v-60c34a17] {background-color:var(--qui-BG-2);box-sizing:border-box}.page-sinature[data-v-60c34a17] .aogph{width:100vw;background-color:var(--qui-BG-2);box-sizing:border-box}.page-sinature[data-v-60c34a17] .aogph-tab{padding:%?36?% %?40?% 0;box-sizing:border-box}.page-sinature[data-v-60c34a17] .aogph-tab-ao{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page-sinature[data-v-60c34a17] .aogph-tab-ao-my,\n.page-sinature[data-v-60c34a17] .aogph-tab-ao-test{font-size:%?26?%;font-weight:400;line-height:%?45?%;color:var(--qui-FC-777);opacity:1}.page-sinature[data-v-60c34a17] .aogph-tab-input-in{width:100%;height:%?400?%;padding:%?20?% 0 0 %?20?%;margin-top:%?20?%;text-align:top;background-color:var(--qui-BG-1);border:%?1?% solid var(--qui-FC-DDD);box-sizing:border-box}.page-sinature[data-v-60c34a17] .aogph-tab-button{margin:%?50?% 0 0}.aogph-tab-button[data-v-60c34a17] .qui-button--button[size="large"]{font-size:%?30?%;color:var(--qui-FC-FFF);border-radius:%?7?%}',""]),t.exports=e},"245f":function(t,e,s){"use strict";(function(e){var i=s("4ea4"),n=i(s("6f74")),r=s("b95e"),o=i(s("4c82"));t.exports={mixins:[n.default,o.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(s){s&&(e.log("forum",s),t.forum=s)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){o.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=this;uni.login({success:function(s){if("login:ok"===s.errMsg){var i=s.code;uni.getUserInfo({success:function(e){var s={data:{attributes:{js_code:i,iv:e.iv,encryptedData:e.encryptedData}}};t.$store.dispatch("session/setParams",s)},fail:function(t){e.log(t)}})}},fail:function(t){e.log(t)}})},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var s=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var i=uni.getStorageSync("token");""!==i&&(s.data.attributes.token=i),this.login(s,e)}},getLoginBindParams:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===s&&(i.data.attributes.rebind=1);var n=uni.getStorageSync("token");""!==n&&(i.data.attributes.token=n),this.login(i,e)}},login:function(t,s){var i=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(i.logind(),i.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==r.SITE_PAY&&uni.getStorage({key:"page",success:function(t){e.log("resData",t),uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===r.SITE_PAY&&i.user&&!i.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:s,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var n=i.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:n,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var o=i.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:o,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,s("5a52").default)},"32d2":function(t,e,s){"use strict";s.r(e);var i=s("55a1"),n=s("5979");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);s("4e19");var o=s("f0c5"),a=Object(o.a)(n.default,i.b,i.c,!1,null,"60c34a17",null,!1,i.a,void 0);e.default=a.exports},"368d":function(t,e,s){t.exports=s.p+"static/img/msg-warning.0c78a551.svg"},"4e19":function(t,e,s){"use strict";var i=s("a643");s.n(i).a},"55a1":function(t,e,s){"use strict";var i=s("09a9");s.d(e,"a",(function(){return i.a})),s.d(e,"b",(function(){return i.b})),s.d(e,"c",(function(){return i.c}))},5979:function(t,e,s){"use strict";s.r(e);var i=s("8932"),n=s.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},"6f74":function(t,e,s){"use strict";var i=s("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),s=uni.getStorageSync(i.STORGE_GET_USER_TIME);if(t||(e-s)/1e3>60){var n={include:"groups,wechat"},r=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:r}}),this.$store.dispatch("jv/get",["users/".concat(r),{params:n}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(i.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},8932:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s("4b36"),n={data:function(){return{userid:"",sun:!0,content:"",num:140,wordnumber:"",focuscours:""}},onLoad:function(){this.userid=this.usersid,this.mydata()},computed:{usersid:function(){return this.$store.getters["session/get"]("userId")}},methods:{fun:function(t){this.wordnumber=t.target.value.length},btnbutton:function(){this.signature()},mydata:function(){var t=this,e={_jv:{type:"users",id:this.userid},include:"groups"};this.$store.dispatch("jv/get",e).then((function(e){t.content=e.signature,t.wordnumber=t.content.length,t.focuscours=t.wordnumber+1}))},signature:function(){var t=this,e={_jv:{type:"users",id:this.userid},signature:this.content};i.status.run((function(){return t.$store.dispatch("jv/patch",e)})).then((function(e){e&&(uni.showToast({title:t.i18n.t("modify.modificationsucc"),duration:2e3}),setTimeout((function(){uni.navigateBack({delta:1})}),1e3))}))}}};e.default=n},a643:function(t,e,s){var i=s("1c78");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s("4f06").default)("07438d48",i,!0,{sourceMap:!1,shadowMode:!1})},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},e972:function(t,e,s){t.exports=s.p+"static/img/msg-404.e11dc2d7.svg"}}]);