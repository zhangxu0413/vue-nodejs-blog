<template>
  <div>
    <mavon-editor v-model="content" :ishljs="true" @imgAdd="onImgAdd"/>
  </div>
</template>
<script>
// 引入模块
import COS from "cos-js-sdk-v5";
const cos = new COS({
  SecretId: "AKID65ytpelAXr1ztgvxEWgjihHnMmpr55HL",
  SecretKey: "F9awMnBWlx26oRiGl7Pgrsm6JQTM7lfP"
});


export default {
  name: "editor",
  props: ["content", "id", "config"],
  data() {
    return {
      //初始化一个editor
      editorContent: this.content,
      defaultMsg: ""
    };
  },
  mounted() {
    console.log("加载了");
  },
  //离开页面时销毁editor,以便下回进入时重新生成
  destroyed() {},
  methods: {
    // 获取editor中的html内容
    getUEContent() {
      return this.content;
    },
    onImgAdd(name, img) {
      console.log(name, img)
      this.uploadImage(img,(url)=>{
          console.log(this.content);
          console.log('!['+img._name+']('+name+')')
          this.content = this.content.replace('!['+img._name+']('+name+')','<img src="http://'+url+'"/>');
      });
    },
    uploadImage(file, callback) {
      // 分片上传
      cos.putObject(
        {
          Bucket: "shuyuxuan-1254264552",
          Region: "ap-chengdu",
          Key: "attachment/images/" + file.name,
          Body: this.dataURLtoBlob(file.miniurl)
        },
        function(err, data) {
          console.log(err, data);
          if(!err){
              callback(data.Location)
          }
        }
      );
    },
    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
  }
};
</script>
<style lang="sass" scoped>

</style>
