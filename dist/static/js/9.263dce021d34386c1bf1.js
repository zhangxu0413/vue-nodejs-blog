webpackJsonp([9],{"8ptb":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("OK1g"),a={name:"login",data:function(){return{account:"",password:"",token:"",err:!1}},mounted:function(){this.$store.commit("login",localStorage.token)},methods:{login:function(){var e=this;o.a.login(this.account,this.password).then(function(t){switch(t.code){case"200":e.$store.commit("login",t.token),console.log(t),e.$router.push("admin");break;case"401":e.err=!0}},function(e){console.log(e)})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"content"},[n("p",{staticClass:"title"},[e._v("后台管理系统登录")]),e._v(" "),n("div",{staticClass:"account"},[n("span",[e._v("账号")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text"},domProps:{value:e.account},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.account=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"password"},[n("span",[e._v("密码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.err,expression:"err"}]},[e._v("账号或者密码错误")])]),e._v(" "),n("div",{staticClass:"confirm"},[n("input",{attrs:{type:"checkbox",name:"keepAlive",checked:"",disabled:""}}),e._v(" "),n("label",{attrs:{for:"keepAlive"}},[e._v("15天免登录")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.login}},[e._v("登录")])])])])},staticRenderFns:[]};var i=n("VU/8")(a,s,!1,function(e){n("zaKA")},"data-v-6ef83fe2",null);t.default=i.exports},zaKA:function(e,t){}});