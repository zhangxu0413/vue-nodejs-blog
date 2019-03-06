<template>
	<all-article :passages="passages" :type="type"></all-article>
</template>

<script>
    import allArticle from '@/components/allArticle';
    import util from '@/util/util';
	import api from '@/fetch/api';
	
	export default{
        name:'articleList',
        props:['categoryId'],
		data(){
			return{
                passages:[],
                type:{}
			}
		},
		components:{
			allArticle,
		},
		mounted(){
            this.getArticle();
        },
        watch:{
            'categoryId'(){
                this.getArticle();
            }
        },
		methods:{
            getArticle(){
                this.type = util.getCategoryById(this.categoryId)
                api.categoryArticleFront(this.type.id).then(res=>{
					switch(res.code){
					case '200':
						console.log('获取文章成功！');
						this.passages=res.data;
						this.parseTags();
						break;
					case '400':
						console.log('服务器开小差了！');
						break;
					}
				},err=>{
					console.log(err);
			})
            },
			parseTags(){
				let reg=/<img src/g;
				this.passages.forEach(element => {
					element.tags=element.tags.split(',');
					element.summary=element.summary.replace(reg,`<img data-src`);
				});
			}
		}
	}
</script>

<style scoped lang="less">

</style>