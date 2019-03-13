<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import api from "@/fetch/api";
export default {
  name: "App",
  created() {
    window.categoryArr = [{"id":1,"name":"学无止境","describe":"这是本人关于技术的感悟"},{"id":2,"name":"慢生活","describe":"本人热爱旅游，这个栏目会分享个人旅游的见闻"},{"id":3,"name":"时光如梭","describe":"作为第一批老去90后，很多的过去值得回忆，希望拿出来与君共赏"}]
    //去掉首页loading
    api.allCategory().then(res => {
      switch (res.code) {
        case "200":
          console.log("获取栏目成功");
          window.categoryArr = res.data;
          break;
        case "400":
          console.log("服务器开小差了！");
          break;
      }
      document.body.removeChild(document.getElementById("loading"));
    });
  }
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
