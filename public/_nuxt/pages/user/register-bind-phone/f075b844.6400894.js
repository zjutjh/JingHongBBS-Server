(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1085:function(e,t,r){"use strict";var n=r(934);r.n(n).a},1169:function(e,t,r){"use strict";r.r(t);var head=r(733),n=r.n(head),o=r(732),c=r.n(o),d=r(178),h=r.n(d),l=r(797),m={name:"RegisterBindPhone",mixins:[n.a,c.a,l,h.a],data:function(){return{title:this.$t("profile.register"),userName:"",passWord:"",repeatPassWord:"",activeName:"0",validate:!1,code:"",register_captcha:!1,site_mode:"",isPaid:!1,captcha:null,ticket:"",randstr:"",ischeck:!0,loading:!1,passerror:!1,mobileToken:"",phoneNumber:"",preurl:"/"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var e=this.$route.query,t=e.validate,code=e.code,r=e.phoneNumber,n=e.preurl;n&&(this.preurl=n),this.mobileToken=localStorage.getItem("mobileToken"),r&&(this.phoneNumber=r),t&&(this.validate=JSON.parse(t)),"undefined"!==code&&(this.code=code),this.forums&&this.forums.set_reg&&this.forums.set_reg.register_captcha&&(this.register_captcha=this.forums.set_reg.register_captcha),this.forums&&this.forums.set_site&&this.forums.set_site.site_mode&&(this.site_mode=this.forums.set_site.site_mode),this.forums&&this.forums.set_reg&&(this.validate=this.forums.set_reg.register_validate)},methods:{notsame:function(){this.passWord!==this.repeatPassWord?this.passerror=!0:this.passerror=!1},check:function(e){this.ischeck=e},register:function(){""===this.userName?this.$message.error("用户名不能为空"):""===this.passWord?this.$message.error("密码不能为空"):this.passWord!==this.repeatPassWord?(this.$message.error("两次输入的密码不一致,请重新输入"),this.passWord="",this.repeatPassWord="",this.passerror=!0):this.ischeck?this.forums&&this.forums.set_reg&&this.forums.set_reg.register_captcha?this.toTCaptcha():this.registerClick():this.$message.error("请同意协议")},toTCaptcha:function(){var e=this;this.forums&&this.forums.qcloud&&this.forums.qcloud.qcloud_captcha_app_id&&(this.captcha=new TencentCaptcha(this.forums.qcloud.qcloud_captcha_app_id,(function(t){0===t.ret&&(e.ticket=t.ticket,e.randstr=t.randstr,e.registerClick())})),this.captcha.show())},registerClick:function(){var e=this;this.loading=!0;var t={data:{attributes:{username:this.userName,password:this.passWord,mobileToken:this.mobileToken}}};this.register_captcha&&this.validate&&(t.data.attributes.captcha_ticket=this.ticket,t.data.attributes.captcha_rand_str=this.randstr),this.register_captcha&&(t.data.attributes.captcha_ticket=this.ticket,t.data.attributes.captcha_rand_str=this.randstr),""!==this.code&&(t.data.attributes.code=this.code),this.$store.dispatch("session/h5Register",t).then((function(t){if(e.loading=!1,t&&t.data&&t.data.data&&t.data.data.id&&e.logind(t),t&&t.data&&t.data.errors&&"register_validate"===t.data.errors[0].code)return e.$store.commit("session/SET_AUDIT_INFO",{errorCode:"register_validate",username:e.userName}),void e.$router.push("/user/warning");if(t&&t.data&&t.data.errors&&"content_banned"===t.data.errors[0].code)e.$message.error("当前用户名包含禁止注册的词语");else if(t&&t.data&&t.data.errors&&t.data.errors[0]){var r=t.data.errors[0].detail?t.data.errors[0].detail[0]:t.data.errors[0].code,n=t.data.errors[0].detail?t.data.errors[0].detail[0]:e.$t("core.".concat(r));e.$message.error(n)}})).catch((function(t){e.loading=!1,e.passWord="",e.repeatPassWord=""}))},jump2Login:function(){this.$router.push("/user/login-bind-phone?&validate=".concat(this.validate,"\n        &code=").concat(this.code,"&phoneNumber=").concat(this.phoneNumber,"&preurl=").concat(this.preurl))}}},_=(r(1085),r(12)),component=Object(_.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.forums?r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"register"},[r("el-tabs",{staticClass:"register-select",attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:e.$t("user.registerBindPhone"),name:"0"}},[r("form",[r("div",{staticClass:"bindtext"},[r("div",[e._v("\n            "+e._s(e.$t("user.phoneuser"))+" "),r("b",[e._v(e._s(e.phoneNumber))]),e._v("\n            "+e._s(e.$t("user.user"))+"\n          ")]),e._v(" "),r("div",[e._v("\n            "+e._s(e.$t("user.yourPhone"))+"\n            "),r("b",[e._v(e._s(e.$t("user.withoutBind")))]),e._v("，"),r("b",[e._v(e._s(e.$t("user.register")))]),e._v(e._s(e.$t("user.readyBInd"))+"\n          ")])]),e._v(" "),r("div",[r("span",{staticClass:"title"},[e._v(e._s(e.$t("profile.username")))]),e._v(" "),r("el-input",{staticClass:"reg-input",attrs:{placeholder:e.$t("user.username")},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),r("div",[r("span",{staticClass:"title2"},[e._v(e._s(e.$t("user.passwd")))]),e._v(" "),r("el-input",{staticClass:"reg-input",attrs:{placeholder:e.$t("user.password"),type:"password","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),e._v(" "),r("div",{class:e.passerror?"rep passerr":"rep"},[r("span",{staticClass:"title2"},[e._v(e._s(e.$t("user.repeatpasswd")))]),e._v(" "),r("el-input",{class:e.passerror?"reg-input inputerr":"reg-input",attrs:{placeholder:e.$t("user.password"),type:"password","show-password":""},on:{input:e.notsame},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}},model:{value:e.repeatPassWord,callback:function(t){e.repeatPassWord=t},expression:"repeatPassWord"}}),e._v(" "),e.passerror?r("div",{staticClass:"passerror"},[e._v("\n            "+e._s(e.$t("modify.reenter"))+"\n          ")]):e._e()],1),e._v(" "),r("div",{staticClass:"agreement"},[r("reg-agreement",{on:{check:e.check}})],1),e._v(" "),r("el-button",{staticClass:"r-button",attrs:{type:"primary"},on:{click:e.register}},[e._v("\n          注册并绑定")]),e._v(" "),r("div",{staticClass:"tologin"},[r("span",{on:{click:e.jump2Login}},[e._v(e._s(e.$t("user.exist"))),r("nuxt-link",{attrs:{to:"/user/login-bind-phone"}},[e._v("登录并绑定")])],1)])],1)])],1)],1):e._e()}),[],!1,null,"834e7030",null);t.default=component.exports;installComponents(component,{RegAgreement:r(800).default})},733:function(e,t){e.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},746:function(e,t,r){},798:function(e,t,r){"use strict";var n=r(746);r.n(n).a},800:function(e,t,r){"use strict";r.r(t);var n={name:"RegAgreement",props:{check:{type:Boolean,default:!0}},data:function(){return{forums:"",popTitle:"",popDetail:"",showagree:!1,checked:!0}},mounted:function(){this.getAttachMent()},methods:{getAttachMent:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users","filter[tag]":"agreement"}}]).then((function(t){e.forums=t}))},open:function(e){this.$router.push("/user/agreement?type=".concat(e))},rcheck:function(){this.$emit("check",this.checked)}}},o=(r(798),r(12)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.forums.agreement&&e.forums.agreement.register||e.forums.agreement&&e.forums.agreement.privacy?r("div",{staticClass:"reg-agreement"},[e.check?r("el-checkbox",{on:{change:e.rcheck},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}):e._e(),e._v(" "),r("span",{staticClass:"agree"},[e._v(e._s(e.$t("permission.user.agreement")))]),e._v(" "),e.forums.agreement&&e.forums.agreement.register?r("span",{staticClass:"regagree",on:{click:function(t){return e.open("register")}}},[e._v(e._s("《"+this.$t("permission.user.agreementRegister")+"》")+"\n  ")]):e._e(),e._v(" "),e.forums.agreement&&e.forums.agreement.privacy?r("span",{staticClass:"regagree",on:{click:function(t){return e.open("privacy")}}},[e._v(e._s("《"+this.$t("permission.user.agreementPrivacy")+"》")+"\n  ")]):e._e()],1):e._e()}),[],!1,null,"1f4f9d70",null);t.default=component.exports},934:function(e,t,r){}}]);