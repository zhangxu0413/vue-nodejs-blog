<template>
    <div>
         <mavon-editor v-model="content" :ishljs = "true" @imgAdd="onImgAdd"/>
    </div>
</template>
<script>
export default {
    name:'editor',
    props:['content','id','config'],
    data(){
        return{
            //初始化一个editor
            editor:null,
            defaultMsg:''
        }
    },
    mounted(){
        console.log('加载了');
    },
    //离开页面时销毁editor,以便下回进入时重新生成
    destroyed() {
    },
    methods:{
        // 获取editor中的html内容
        getUEContent() {
            return this.content;
        },
        onImgAdd(name,img){
            console.log(img)
        }
    },

}
</script>
<style lang="sass" scoped>

</style>
