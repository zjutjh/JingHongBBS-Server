(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1146:function(t,e,n){"use strict";n.r(e);var head=n(733),r={name:"ResetPwdSuccess",mixins:[n.n(head).a],data:function(){return{title:this.$t("modify.resetPasswordSuccess")}},computed:{username:function(){return window.localStorage.getItem("username")||""}}},o=(n(990),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-findpwd"},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("modify.resetPasswordSuccess")))]),t._v(" "),n("div",{staticClass:"describe"},[t._v("\n    "+t._s(t.$t("modify.user")+" “"+t.username+"” "+t.$t("modify.resetPasswordSuccessRepeat"))+" !")]),t._v(" "),n("div",{staticClass:"detail"},[t._v(" "+t._s(t.$t("modify.resetPasswordLoginTip")))]),t._v(" "),n("nuxt-link",{staticClass:"login",attrs:{to:"/user/login"}},[n("el-button",{staticClass:"btn",attrs:{type:"primary"}},[t._v("\n      "+t._s(t.$t("user.login"))+"\n    ")])],1)],1)}),[],!1,null,"9f83b168",null);e.default=component.exports},733:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},884:function(t,e,n){},990:function(t,e,n){"use strict";var r=n(884);n.n(r).a}}]);