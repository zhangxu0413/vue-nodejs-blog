webpackJsonp([3],{mPe3:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("XHq3"),n=t("OK1g"),c={name:"homePage",components:{allArticle:s.a},data:function(){return{passages:[],type:{title:"所有文章",describe:"这是所有文章的简介"}}},created:function(){var e=this;n.a.allArticleFront().then(function(a){switch(a.code){case"200":console.log("获取文章成功！"),e.passages=a.data,e.parseTags();break;case"400":console.log("服务器开小差了！")}},function(e){console.log(e)})},methods:{parseTags:function(){var e=/<img src/g;this.passages.forEach(function(a){a.tags=a.tags.split(","),a.summary=a.summary.replace(e,"<img data-src")})}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("all-article",{attrs:{passages:this.passages,type:this.type}})},staticRenderFns:[]};var o=t("VU/8")(c,r,!1,function(e){t("nIJE")},"data-v-a02cc860",null);a.default=o.exports},nIJE:function(e,a){}});