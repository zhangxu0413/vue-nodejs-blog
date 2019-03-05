webpackJsonp([0],{LBuR:function(t,s){},XHq3:function(t,s,a){"use strict";var e=a("yt7g"),n={name:"allArticle",props:["passages","type"],data:function(){return{lazyLoad:""}},created:function(){console.log(this.passages)},mounted:function(){this.lazyLoad=e.a.throttle(this.handleLoad,200,300),window.addEventListener("scroll",this.lazyLoad)},beforeDestroy:function(){window.removeEventListener("scroll",this.lazyLoad)},methods:{findTag:function(t){this.$router.push({name:"searchTag",params:{tagStr:t}})},handleLoad:function(){for(var t=document.getElementsByClassName("rightContent")[0].getElementsByTagName("img"),s=0,a=t.length;s<a;s++)this.isInsight(t[s])&&(t[s].src=t[s].getAttribute("data-src"));console.log(t)},isInsight:function(t){var s=t.getBoundingClientRect(),a=window.innerHeight;return s.top<=a+100}},watch:{passages:function(){var t=this;console.log("change"),this.$nextTick(function(){t.handleLoad()})}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"allArticle"},[a("div",{staticClass:"head"},[a("p",[t._v(t._s(t.type.title))]),t._v(" "),a("p",[t._v(t._s(t.type.describe))])]),t._v(" "),t._l(t.passages,function(s){return a("div",{staticClass:"article"},[a("div",{staticClass:"title"},[a("h1",[a("router-link",{attrs:{to:{name:"articles",params:{articleId:s.id}}}},[t._v(t._s(s.title))])],1),t._v(" "),a("div",{staticClass:"time"},[a("span",{staticClass:"iconfont icon-shijian"}),t._v(" "),a("span",[t._v(t._s(s.time))])])]),t._v(" "),a("div",{staticClass:"content"},[a("p",{domProps:{innerHTML:t._s(s.summary)}}),t._v(" "),a("span",[a("router-link",{attrs:{to:{name:"articles",params:{articleId:s.id}}}},[t._v("更多>>")])],1),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"bottomTag"},[a("span",{staticClass:"iconfont icon-tag1"}),t._v(" "),t._l(s.tags,function(s){return s?a("div",{staticClass:"tag",on:{click:function(a){return t.findTag(s)}}},[a("span",[t._v(t._s(s))])]):t._e()})],2),t._v(" "),a("div",{staticClass:"bottomType"},[a("span",{staticClass:"iconfont icon-wenjianjia"}),t._v(" "),a("span",[t._v(t._s(s.category))])]),t._v(" "),a("div",{staticClass:"more"},[a("router-link",{attrs:{to:{name:"articles",params:{articleId:s.id}}}},[t._v("查看全文")])],1)])])])})],2)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("h7Cm")},"data-v-d499b02a",null);s.a=o.exports},h7Cm:function(t,s){},yKLo:function(t,s,a){"use strict";var e=a("OK1g"),n={name:"allArticle",props:["type","passages"],data:function(){return{publish:!0}},mounted:function(){},methods:{toggleState:function(t){var s=this,a="发表"==t.state?"草稿":"发表";1==confirm("确定将其设为 "+a+" 状态吗?")&&e.a.changeStateBack(t.id,a).then(function(e){switch(e.code){case"200":t.state=a,console.log(t.state),console.log(s.passages);break;case"400":alert("服务器开小差了！文章状态修改失败")}},function(t){console.log(t)})},goModify:function(t){t.id;this.$router.push({name:"modify",params:{id:t.id}})},goNew:function(){this.$router.push({name:"newArticle",params:{type:this.type}})},delArticle:function(t,s){var a=this;if(1==confirm("确认删除该篇文章吗？")){var n=t.id;e.a.delArticleBack(n).then(function(t){switch(t.code){case"200":a.passages.splice("index",1),alert("删除成功！");break;case"400":alert("服务器开小差了，删除失败")}},function(t){console.log(t)})}}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"allArticle"},[a("div",{staticClass:"head"},[t._v(t._s(t.type))]),t._v(" "),a("div",{staticClass:"content"},[a("button",{staticClass:"new",on:{click:t.goNew}},[t._v("\n            写新文章\n        ")]),t._v(" "),a("table",{attrs:{width:"100%"}},[t._m(0),t._v(" "),a("tbody",t._l(t.passages,function(s,e){return a("tr",{key:e},[a("td",[t._v(t._s(s.title))]),t._v(" "),a("td",[t._v(t._s(s.time))]),t._v(" "),a("td",t._l(s.tags,function(s){return a("span",{staticClass:"tag"},[t._v("#"+t._s(s)+" ")])}),0),t._v(" "),a("td",[a("button",{directives:[{name:"show",rawName:"v-show",value:"草稿"==s.state,expression:"passage.state=='草稿'"}],staticClass:"publish",on:{click:function(a){return t.toggleState(s)}}},[t._v("发布")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:"发表"==s.state,expression:"passage.state=='发表'"}],staticClass:"save",on:{click:function(a){return t.toggleState(s)}}},[t._v("设为草稿")]),t._v(" "),a("button",{staticClass:"modify",on:{click:function(a){return t.goModify(s)}}},[t._v("修改")]),t._v(" "),a("button",{staticClass:"del",on:{click:function(a){return t.delArticle(s,e)}}},[t._v("删除")])])])}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("文章标题")]),this._v(" "),s("th",[this._v("发布时间")]),this._v(" "),s("th",[this._v("标签")]),this._v(" "),s("th",[this._v("操作")])])])}]};var o=a("VU/8")(n,i,!1,function(t){a("LBuR")},"data-v-104e4268",null);s.a=o.exports}});