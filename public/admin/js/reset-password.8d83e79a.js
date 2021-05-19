(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset-password"],{"656d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("PublicView",{attrs:{heading:e.$t("reset_password")}},[!1===e.resetMode&&!1===e.requestSent?r("form",{on:{submit:function(t){return t.preventDefault(),e.onRequest(t)}}},[r("project-chooser"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"focus",rawName:"v-focus"}],attrs:{type:"email",placeholder:e.$t("email"),required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("div",{staticClass:"buttons"},[r("button",{attrs:{type:"submit"}},[e._v(e._s(e.$t("reset")))]),r("router-link",{staticClass:"secondary",attrs:{to:"/login"}},[e._v(e._s(e.$t("sign_in")))])],1)],1):!0===e.requestSent?[r("p",[e._v(e._s(e.$t("password_reset_sent")))])]:e._e(),!0===e.resetMode&&!1===e.resetDone?r("form",{on:{submit:function(t){return t.preventDefault(),e.onReset(t)}}},[r("project-chooser"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:e.$t("password"),required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("div",{staticClass:"buttons"},[r("button",{attrs:{type:"submit"}},[e._v(e._s(e.$t("reset")))])])],1):!0===e.resetDone?[r("p",[e._v(e._s(e.$t("password_reset_successful")))]),r("router-link",{attrs:{to:"/login"}},[e._v(e._s(e.$t("sign_in")))])]:e._e(),e.notice.text?r("public-notice",{attrs:{slot:"notice",color:e.notice.color,icon:e.notice.icon,loading:e.requesting||e.resetting},slot:"notice"},[e._v(" "+e._s(e.notice.text)+" ")]):e._e()],2)},o=[],s=(r("99af"),r("96cf"),r("1da1")),a=r("5530"),i=r("89b3"),c=r("746c"),u=r("8a0c"),l=r("2f62"),p=r("bc3a"),d=r.n(p),v={name:"ResetPassword",components:{PublicView:i["a"],ProjectChooser:c["a"],PublicNotice:u["a"]},data:function(){return{email:"",password:"",requesting:!1,requestSent:!1,resetting:!1,resetDone:!1,notice:{text:this.$t("not_authenticated"),color:"blue-grey-100",icon:"lock_outline"}}},computed:Object(a["a"])(Object(a["a"])({},Object(l["e"])(["currentProjectKey","apiRootPath"])),{},{resetMode:function(){return void 0!==this.$route.query.token}}),methods:{onRequest:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.requesting=!0,r="".concat(e.apiRootPath).concat(e.currentProjectKey),e.notice.text=e.$t("password_reset_sending"),t.prev=3,t.next=6,d.a.post(r+"/auth/password/request",{email:e.email});case 6:e.requestSent=!0,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),e.$events.emit("error",{notify:null===(n=t.t0.response)||void 0===n||null===(o=n.data)||void 0===o||null===(s=o.error)||void 0===s?void 0:s.message,error:t.t0});case 12:return t.prev=12,e.requesting=!1,e.notice.text=e.$t("not_authenticated"),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[3,9,12,16]])})))()},onReset:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,o,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={token:e.$route.query.token,password:e.password},e.requesting=!0,n="".concat(e.apiRootPath).concat(e.currentProjectKey),t.prev=3,t.next=6,d.a.post(n+"/auth/password/reset",r);case 6:e.resetDone=!0,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),e.$events.emit("error",{notify:null===(o=t.t0.response)||void 0===o||null===(s=o.data)||void 0===s||null===(a=s.error)||void 0===a?void 0:a.message,error:t.t0});case 12:return t.prev=12,e.resetting=!1,e.notice.text=e.$t("not_authenticated"),t.finish(12);case 16:case"end":return t.stop()}}),t,null,[[3,9,12,16]])})))()}}},m=v,w=(r("9a43"),r("2877")),f=Object(w["a"])(m,n,o,!1,null,"50de3c19",null);t["default"]=f.exports},6864:function(e,t,r){},"9a43":function(e,t,r){"use strict";var n=r("6864"),o=r.n(n);o.a}}]);
//# sourceMappingURL=reset-password.8d83e79a.js.map