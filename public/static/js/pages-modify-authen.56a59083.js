(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-modify-authen"],{"0474":function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.page-authen[data-v-1ea46b34] {background:var(--qui-BG-2);box-sizing:border-box}.page-authen[data-v-1ea46b34] .authen{width:100vw;background-color:var(--qui-BG-2);box-sizing:border-box}.page-authen[data-v-1ea46b34] .authen-input{width:%?710?%;padding:%?31?% 0 0 %?40?%;background:var(--qui-BG-2);box-sizing:border-box}.page-authen[data-v-1ea46b34] .authen-tit{font-size:%?30?%;font-weight:400;line-height:%?100?%;color:var(--qui-FC-777)}.page-authen[data-v-1ea46b34] .authen-forget{margin:%?30?% 0 0 %?40?%;font-size:%?30?%;font-weight:400;line-height:%?37?%;color:var(--qui-LINK)}.page-authen[data-v-1ea46b34] .authen-erro-messag1{font-size:%?26?%;font-weight:400;line-height:%?100?%;color:var(--qui-RED)}',""]),t.exports=e},"20b6":function(t,e,i){var s=i("0474");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("4f06").default)("2b851106",s,!0,{sourceMap:!1,shadowMode:!1})},"245f":function(t,e,i){"use strict";(function(e){var s=i("4ea4"),n=s(i("6f74")),o=i("b95e"),r=s(i("4c82"));t.exports={mixins:[n.default,r.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(i){i&&(e.log("forum",i),t.forum=i)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){r.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var s=i.code;uni.getUserInfo({success:function(e){var i={data:{attributes:{js_code:s,iv:e.iv,encryptedData:e.encryptedData}}};t.$store.dispatch("session/setParams",i)},fail:function(t){e.log(t)}})}},fail:function(t){e.log(t)}})},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var s=uni.getStorageSync("token");""!==s&&(i.data.attributes.token=s),this.login(i,e)}},getLoginBindParams:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var s=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(s.data.attributes.rebind=1);var n=uni.getStorageSync("token");""!==n&&(s.data.attributes.token=n),this.login(s,e)}},login:function(t,i){var s=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(s.logind(),s.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==o.SITE_PAY&&uni.getStorage({key:"page",success:function(t){e.log("resData",t),uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===o.SITE_PAY&&s.user&&!s.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var n=s.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:n,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var r=s.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:r,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,i("5a52").default)},"368d":function(t,e,i){t.exports=i.p+"static/img/msg-warning.0c78a551.svg"},4737:function(t,e,i){"use strict";var s=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("3835")),o=i("4b36"),r={mixins:[s(i("b469")).default],data:function(){return{userid:"",pas:!0,sun:!1,types:"password",test:"",status:"",inputpas:"",repeatpas:"",icon:"none",inshow:!0,inisIphone:!1}},onLoad:function(){this.userid=this.usersid},computed:{usersid:function(){return this.$store.getters["session/get"]("userId")}},methods:{fourse:function(){this.inshow=!0},btndata:function(t){6===t.length&&this.mobelypas(t)},mobelypas:function(t){var e=this,i={_jv:{type:"users/pay-password/reset"},pay_password:t};o.status.run((function(){return e.$store.dispatch("jv/post",i)})).then((function(t){if(t._jv.json.data.id){uni.showToast({title:e.i18n.t("modify.authensucceeded"),duration:2e3});var i=t._jv.json.data.id;uni.navigateTo({url:"/pages/modify/paypwd?token=".concat(i,"&id=").concat(e.userid)})}})).catch((function(t){if(uni.showToast({icon:e.icon,title:e.i18n.t("modify.authenfailed"),duration:2e3}),422===t.statusCode){e.sun=!0;var i=(0,n.default)(t.data.errors,1),s=(0,n.default)(i[0].detail,1)[0];e.test=s}else 500===t.statusCode&&(e.sun=!0,e.test=e.i18n.t("modify.passwordinputerro"));e.empty()}))},forgetpay:function(){uni.redirectTo({url:"/pages/modify/findpwd?user=".concat(this.userid,"&pas=reset_pay_pwd")})},toggleBox:function(){this.inshow=!1},empty:function(){var t=this.$refs.quiinput;t.deleat()}}};e.default=r},"6f74":function(t,e,i){"use strict";var s=i("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),i=uni.getStorageSync(s.STORGE_GET_USER_TIME);if(t||(e-i)/1e3>60){var n={include:"groups,wechat"},o=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:o}}),this.$store.dispatch("jv/get",["users/".concat(o),{params:n}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(s.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"713c":function(t,e,i){"use strict";var s=i("aa19");i.d(e,"a",(function(){return s.a})),i.d(e,"b",(function(){return s.b})),i.d(e,"c",(function(){return s.c}))},"76b8":function(t,e,i){"use strict";var s=i("20b6");i.n(s).a},"845f":function(t,e,i){"use strict";i.r(e);var s=i("4737"),n=i.n(s);for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e.default=n.a},"879d":function(t,e,i){"use strict";i.r(e);var s=i("713c"),n=i("845f");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("76b8");var r=i("f0c5"),a=Object(r.a)(n.default,s.b,s.c,!1,null,"1ea46b34",null,!1,s.a,void 0);e.default=a.exports},"913c":function(t,e){t.exports="data:image/png;base64,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"},aa19:function(t,e,i){"use strict";(function(t){var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));try{s={quiPage:i("29c4").default,quiInputCode:i("407a").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("qui-page",{staticClass:"page-authen",attrs:{"data-qui-theme":t.theme}},[i("v-uni-view",{staticClass:"authen",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toggleBox.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"authen-input",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.fourse.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"authen-tit"},[t._v(t._s(t.i18n.t("modify.authentication")))]),i("qui-input-code",{ref:"quiinput",attrs:{title:t.sun,text:t.test,number:t.types,show:t.inshow,isiphonex:t.inisIphone},on:{getdata:function(e){arguments[0]=e=t.$handleEvent(e),t.btndata.apply(void 0,arguments)}}})],1),t.forums.qcloud.qcloud_sms?i("v-uni-view",{staticClass:"authen-forget",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.forgetpay.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("modify.forgetmanypassword")))]):t._e()],1)],1)},o=[]}).call(this,i("5a52").default)},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},e972:function(t,e,i){t.exports=i.p+"static/img/msg-404.e11dc2d7.svg"}}]);