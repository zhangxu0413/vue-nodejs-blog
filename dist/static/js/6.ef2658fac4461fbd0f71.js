webpackJsonp([6],{"3SYa":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});i("OK1g");var e=i("IcnI"),o={name:"navAdmin",data:function(){return{}},methods:{logout:function(){confirm("确定要退出吗？")&&(e.a.commit("logout"),this.$router.replace({path:"/login"}))}}},r={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"nav"},[i("h1",[t._v("后台管理系统")]),t._v(" "),i("ul",[i("router-link",{attrs:{to:"/admin/techAdmin"}},[i("li",[t._v("技术文章")])]),t._v(" "),i("router-link",{attrs:{to:"/admin/musicAdmin"}},[i("li",[t._v("音乐文章")])]),t._v(" "),i("router-link",{attrs:{to:"/admin/senseAdmin"}},[i("li",[t._v("感悟文章")])]),t._v(" "),i("router-link",{attrs:{to:"/admin/commentAdmin"}},[i("li",[t._v("评论管理")])]),t._v(" "),i("router-link",{attrs:{to:"/admin/meAdmin"}},[i("li",[t._v("我的信息")])])],1),t._v(" "),i("p",{staticClass:"logout",on:{click:t.logout}},[t._v("退出登录")])])},staticRenderFns:[]};var a={name:"admin",components:{navAdmin:i("VU/8")(o,r,!1,function(t){i("TFc9")},"data-v-60d51a28",null).exports},mounted:function(){},data:function(){return{isRouterAlive:!0}},provide:function(){return{reload:this.reload}},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})}}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"admin"},[n("nav-admin"),this._v(" "),n("div",{staticClass:"content"},[this.isRouterAlive?n("router-view"):this._e()],1)],1)},staticRenderFns:[]};var u=i("VU/8")(a,s,!1,function(t){i("uLQD")},"data-v-114cf2be",null);n.default=u.exports},TFc9:function(t,n){},uLQD:function(t,n){}});