webpackJsonp([9],{WmCF:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("OK1g"),i={name:"aboutMe",data:function(){return{user:{name:"",imgsrc:"",signature:"",breif:""},skills:[{name:"Html+Css",degree:"70%",color:"orange"},{name:"Javascript",degree:"80%",color:"green"},{name:"Jquery/backbone",degree:"45%",color:"yellow"},{name:"Vuejs",degree:"45%",color:"#cf4647"},{name:"Node.js",degree:"45%",color:"#524656"},{name:"MySql",degree:"20%",color:"#595b5a"},{name:"Git",degree:"20%",color:"blue"}],showDegree:!1,isActive:!1,activeClass:"flow"}},mounted:function(){var e=this;this.showDegree=!0,a.a.getMyInfo().then(function(t){switch(t.code){case"200":console.log("获取信息成功"),e.user=t.data;break;case"400":console.log("服务器炸了，待会儿再请求吧")}},function(e){console.log(e)})},methods:{stopMove:function(){this.isActive=!this.isActive}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aboutMe"},[a("div",{staticClass:"introduce"},[a("img",{staticClass:"headImg",attrs:{src:s("1U5p")}}),e._v(" "),a("h1",[e._v(e._s(this.user.name))]),e._v(" "),a("h2",[e._v(e._s(this.user.signature))]),e._v(" "),a("p",[e._v(e._s(this.user.breif))]),e._v(" "),a("table",{staticClass:"stack"},[e._m(0),e._v(" "),e._l(e.skills,function(t){return a("tr",[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",{attrs:{colspan:"4"}},[a("transition",{attrs:{name:"showDegree"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showDegree,expression:"showDegree"}],staticClass:"degree",class:[e.isActive?"":e.activeClass],style:{width:t.degree,backgroundColor:t.color}})])],1)])})],2),e._v(" "),a("button",{staticClass:"stop",style:{background:1==e.isActive?"#449d44":"#d9534f"},on:{click:e.stopMove}},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}]},[e._v("再闪闪")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isActive,expression:"!isActive"}]},[e._v("别闪了，闪瞎了")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",{staticStyle:{"text-align":"left"},attrs:{width:"20%"}},[e._v("技术栈")]),e._v(" "),s("th",{attrs:{width:"25%"}},[e._v("了解")]),e._v(" "),s("th",{attrs:{width:"20%"}},[e._v("熟悉")]),e._v(" "),s("th",{attrs:{width:"20%"}},[e._v("熟练运用")]),e._v(" "),s("th",{attrs:{width:"20%"}},[e._v("精通")])])}]};var o=s("VU/8")(i,r,!1,function(e){s("es9i")},"data-v-75090f9a",null);t.default=o.exports},es9i:function(e,t){}});