webpackJsonp([3],{R2ot:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"editor",props:["content","id","config"],data:function(){return{editor:null,defaultMsg:""}},mounted:function(){console.log("加载了")},destroyed:function(){},methods:{getUEContent:function(){return this.content},onImgAdd:function(e,t){console.log(t)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mavon-editor",{attrs:{ishljs:!0},on:{imgAdd:e.onImgAdd},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(e){a("xw/6")},"data-v-69ce67b4",null).exports,o=a("OK1g"),r=a("yt7g"),c={name:"modify",props:["id","type"],components:{editor:i},data:function(){return{ue1:"ue1",ue2:"ue2",config1:{initialFrameWidth:null,initialFrameHeight:300},config2:{initialFrameWidth:null,initialFrameHeight:500},passage:{title:"",time:r.a.getCurrentDate(),category:this.type,tags:"",state:"发表",summary:"",content:""}}},mounted:function(){this.id?this.getOneArticle():this.newArticle()},methods:{getOneArticle:function(){var e=this;o.a.oneArticleBack(this.id).then(function(t){switch(t.code){case"200":console.log(t.data[0]),e.passage=t.data[0];break;case"400":console.log("请求数据错误！")}},function(e){console.log(e)})},newArticle:function(){this.passage={title:"",time:r.a.getCurrentDate(),category:this.type,tags:"",state:"发表",summary:"",content:""}},savePassage:function(){var e=this;if(1==confirm("确定更改吗？")){this.passage.summary=this.$refs.ue1.getUEContent(),this.passage.content=this.$refs.ue2.getUEContent();this.passage.tags&&(this.passage.tags=this.passage.tags.replace(/，/g,",")),o.a.saveArticleBack(this.id,this.passage).then(function(t){switch(t.code){case"200":alert("保存成功！"),e.$router.go(-1);break;case"400":alert("服务器开小差了，保存失败！")}},function(e){console.log(e)})}}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modify"},[a("div",{staticClass:"head"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}]},[e._v("修改文章")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.id,expression:"!id"}]},[e._v("发布新文章")])]),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",[e._v("文章标题：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passage.title,expression:"passage.title"}],attrs:{type:"text",name:"title"},domProps:{value:e.passage.title},on:{input:function(t){t.target.composing||e.$set(e.passage,"title",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"time"},[a("span",[e._v("发表时间：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passage.time,expression:"passage.time"}],attrs:{type:"date"},domProps:{value:e.passage.time},on:{input:function(t){t.target.composing||e.$set(e.passage,"time",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"type"},[a("span",[e._v("文章类型：")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.passage.category,expression:"passage.category"}],attrs:{id:"typeSelect"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.passage,"category",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("请选择")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("学无止境")]),e._v(" "),a("option",{attrs:{value:"2"}},[e._v("慢生活")]),e._v(" "),a("option",{attrs:{value:"3"}},[e._v("时光如梭")])]),e._v(" "),a("span",[e._v("文章标签：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passage.tags,expression:"passage.tags"}],attrs:{type:"text"},domProps:{value:e.passage.tags},on:{input:function(t){t.target.composing||e.$set(e.passage,"tags",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"state"},[a("span",[e._v("文章状态：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passage.state,expression:"passage.state"}],attrs:{type:"radio",id:"publish",name:"state",value:"发表"},domProps:{checked:e._q(e.passage.state,"发表")},on:{change:function(t){return e.$set(e.passage,"state","发表")}}}),e._v(" "),a("label",{attrs:{for:"publish"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passage.state,expression:"passage.state"}],attrs:{type:"radio",id:"save",name:"state",value:"草稿"},domProps:{checked:e._q(e.passage.state,"草稿")},on:{change:function(t){return e.$set(e.passage,"state","草稿")}}}),e._v(" "),a("label",{attrs:{for:"save"}})]),e._v(" "),a("div",{staticClass:"summary"},[a("p",[e._v("文章简介：")]),e._v(" "),a("editor",{ref:"ue1",attrs:{id:e.ue1,config:e.config1,content:e.passage.summary},model:{value:e.passage.summary,callback:function(t){e.$set(e.passage,"summary",t)},expression:"passage.summary"}})],1),e._v(" "),a("div",{staticClass:"passageContext"},[a("p",[e._v("文章内容：")]),e._v(" "),a("editor",{ref:"ue2",attrs:{id:e.ue2,config:e.config2,content:e.passage.content},model:{value:e.passage.content,callback:function(t){e.$set(e.passage,"content",t)},expression:"passage.content"}})],1),e._v(" "),a("p",{staticClass:"save"},[a("button",{staticClass:"saveBtn",on:{click:e.savePassage}},[e._v("保存修改")])])])])},staticRenderFns:[]};var u=a("VU/8")(c,l,!1,function(e){a("zgwz")},"data-v-ae156252",null);t.default=u.exports},"xw/6":function(e,t){},zgwz:function(e,t){}});