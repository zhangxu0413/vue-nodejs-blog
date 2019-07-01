<template>
    <div class="">
        <div>serverLess:{{text}}</div>
        <button @click="getSeverLess">serverLess</button>
    </div>
</template>

<script>
const FCClient = require('@alicloud/fc2');
import moment from 'moment';
export default {
    name:'myApp',
    data(){
        return{
            text:''
        }
    },
    mounted() {
        this.client = new FCClient('1143066480204499', {
            accessKeyID: 'LTAIm0RgBzQVoNyL',
            accessKeySecret: 'F8KHEbKEm5q0EOO7b2IecizQfhEVsh',
            region: 'cn-shanghai',
            headers: {
                'date':moment().format('ddd,D MMM YYYY HH:mm:ss').trim() + ' GMT',
                'x-fc-invocation-type': 'Async'
            }
        });
        
    },
    methods: {
        getSeverLess(){
            this.test()
        },
        async test () {
            this.text = await this.client.invokeFunction('test_serverless','hello', 'event');
        }
    },
}
</script>

<style lang="less" scoped>
    .myApp{
        position: absolute;
        top: 20px;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .iconfont{
            font-size: 80px;
        }
        h1{
            font-size: 40px;
        }
    }
</style>
