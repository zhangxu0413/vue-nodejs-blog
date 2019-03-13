<template>
    <div class="nav">
        <h1>后台管理系统</h1>
        <ul>
            <router-link v-for="(one,index) in routers" :key="index" :to="one.to" ><li @click="changeSelect(index)" :class="{active:index==selectItem}">{{one.name}}</li></router-link>
        </ul>
        <p class="logout" @click="logout">退出登录</p>
    </div>
</template>

<script>
import api from '@/fetch/api'
import store from '@/store/index'
    export default{
        name:'navAdmin',
        data(){
            return{
                selectItem:0,
                routers:[
                    { name:"学无止境",to:"/admin/articleList/1" },
                    { name:"慢生活",to:"/admin/articleList/2" },
                    { name:"岁月如梭",to:"/admin/articleList/3" },
                    { name:"评论管理",to:"/admin/commentAdmin" },
                    { name:"我的信息",to:"/admin/meAdmin" },
                ]
            }
        },
        mounted() {
            this.routers.forEach((r,i) => {
                if(location.hash.replace('#','') == r.to){
                    this.selectItem = i;
                }
            });
        },
        methods:{
            changeSelect(index){
                this.selectItem = index
            },
            logout(){
                let r=confirm('确定要退出吗？');
                if(r){
                    store.commit('logout');
                    this.$router.replace({
                        path: '/login',
                    });
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $activeColor:#038fff;
	.nav{
        a{
            color:white;
            text-decoration: none;
        }
        width: 300px;
        height: 100%;
        position: fixed;
        background: #353d47;
        color: white;
        h1{
            margin: 50px 0;
            font-size: 25px;
            text-align: center;

        }
        ul{
            text-align: center;
            li{
                height: 60px;
                line-height: 60px;
                font-size: 20px;
                &.active{
                    background: $activeColor;
                }
                &:hover{
                    background:$activeColor;
                }
            }
        }
        .logout{
            position: absolute;
            width: 100%;
            bottom: 100px;
            text-align: center;
            color: white;
            font-size: 15px;
            cursor: pointer;
        }
    }
</style>