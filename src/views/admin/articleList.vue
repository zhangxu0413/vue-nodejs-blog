<template>
    <all-article :passages="passages"  :categroyId="category.id" :name="category.name"></all-article>
</template>

<script>
import allArticle from './components/allArticle'
import api from '@/fetch/api'
import util from '@/util/util';
export default {
    name:'senseAdmin',
    components:{
        allArticle,
    },
    props:['id'],
    data(){
        return{
            category:{
                id:1,
                name:'学无止境'
            },
            passages:[]
        }
    },
    created(){
        this.category = util.getCategoryById(this.id);
        this.getSenseArticle();
    },
    watch: {
        "id"(id){
            this.category = util.getCategoryById(this.id);
            this.getSenseArticle();
        }
    },
    methods:{
        getSenseArticle(){
            let category=encodeURIComponent(this.type)
            api.categoryArticleBack(this.category.id).then(res=>{
                switch(res.code){
                    case '200':
                    // console.log(res.data);
                    //把tags由字符串转为数组以便循环
                    res.data.forEach(element => {
                        if(element.tags!=null){
                          element.tags=element.tags.split(',');  
                        }
                    });
                    this.passages=res.data;
                    break;
                    case '400':
                    console.log('获取数据错误！')
                    break;
                }
                console.log(res);
            },err=>{
                console.log(err);
            });
        },
    }
}
</script>

<style scoped lang="less">

</style>
