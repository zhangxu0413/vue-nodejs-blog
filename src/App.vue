<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import api from '@/fetch/api';
export default {
    name: "App",
    created() {
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
