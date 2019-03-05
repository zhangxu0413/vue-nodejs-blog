<template>
	<!--电脑屏幕导航条-->
	<div class="sideBar">
		<div class="wrap">
			<div class="myImg">
				<img src="@/assets/img/myImg.jpg" alt="" />
				<h1>{{myInfo.name}}</h1>
				<p>“ {{myInfo.signature}} ”</p>
			</div>
			<ul>
				<router-link v-for="(one,index) in nav" :key="index" :to="one.url">
					<li @click="changeSelect(index)" :class="{active:index==selectItem}"><span class="iconfont category" :class="one.icon"></span>{{one.name}}</li>
				</router-link>
				<li class="contact">
					<a href="https://github.com/zhangxu0413" target="_blank"><span class="iconfont icon-github"></span></a>
				</li>
			</ul>
			<nav-search></nav-search>
		</div>
	</div>
</template>

<script>
	import navSearch from "./components/navSearch"
	
	export default{
		name:'computerNav',
		props:['myInfo'],
		components:{
			navSearch,
		},
		data(){
			return {
				isActive:false,
				selectItem:0,
				nav:[
					{name:'首页',url:'/index',icon:'icon-index'},
					{name:'技术',url:'/tech',icon:'icon-h5'},
					{name:'音乐',url:'/music',icon:'icon-yinyuered'},
					{name:'感悟',url:'/sense',icon:'icon-dushu'},
					{name:'归档',url:'/file',icon:'icon-shijianzhou'},
					{name:'关于',url:'/aboutMe',icon:'icon-my'},
					{name:'应用',url:'/myApp',icon:'icon-yingyong'},
				]
			}
		},
		mounted(){
			let select=this.$store.getters.getSelect;
			this.selectItem=select?select:0;
		},
		methods:{
			//更改导航栏状态
			changeSelect(index){
				this.selectItem=index;
				this.$store.commit('saveSelect',this.selectItem);
			}
		}

	}
</script>

<style scoped lang="scss">
	$bgColor:#3650c5;
	$activeColor:#409eff;
	.sideBar{
		display: flex;
		flex-direction: column;
		width: 350px;
		min-height: 100%;
		position: fixed;
		top:0;
		bottom:0;
		text-align: center;
		background:linear-gradient(transparentize($bgColor, 0.1), transparentize($bgColor,0.6));
		margin:auto 0px;
		padding: 10px 0 ;
		box-sizing: border-box;
		overflow: auto;
		.wrap{
			margin-top:70px;
			.myImg{
			img{
				width: 150px;
				height: 150px;
				border-radius: 50%;
			}
			h1{
				margin-top: 10px;
				font-size: 30px;
				color: white;
			}
			p{
				margin:10px 0;
				color: white;
				font-size: 18px;
			}
		}
		ul{
			margin-top: 15px;
			.category{
				font-size: 20px;
			}
			a{
					margin-top: 20px;
					text-decoration:none;
					outline: none;
					color: white;
			}
			li{
				font-size: 20px;
				color: white;
				line-height: 45px;
				span{
					font-size: 35px;
					margin:10px;
				}
			}
			li:after{
				content:"";
				width: 0px;
				height: 45px;
				background: white;
				position: absolute;
				z-index: -1;
				left: 0;
				transition: all 0.12s linear;
			}
			a:hover li::after{
				width: 100%;
				background:$activeColor;
			}
			.active{
				background:$activeColor;
			}
			.contact{
				margin-top: 30px;
			}
			.contact span{
				background: transparent;
			}
		}
		}
	}
	
	@keyframes flash{
		0% {
			/*background-position 左上角是 0 0，右边为正，下边为正*/
			background-position:0 0;
		}
		100% {
			background-position:100% 0;
		}
	}
	
	@media screen and (max-width: 900px) {
		.sideBar{
			display: none;
		}
	}
</style>