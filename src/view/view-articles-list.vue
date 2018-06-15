<template>
	<div class="articles-list">
		<base-article v-for="article in articleList" :article="article" :key="article.id"/>
	</div>
</template>

<script>
import BaseArticle from '@/components/base-article'
import api from '@/api'
export default {
	name: 'articleList',
	data () {
		return {
			articleList: []
		}
	},
	components: {
		BaseArticle
	},
	created () {
		api.get('/article').then(res => {
			this.articleList = res.articles
		}).catch(err => {
			console.log(err)
		})
	}
}
</script>

<style scoped>
article {
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid #000;
}
	.article-title {
		font-size: 28px;
		color: #000;
	}
	.article-author {
		color: #000;
	}
	.article-title:hover, .article-author:hover {
		color: #0581e1;
	}
	.article-date {
		font-size: 16px;
	}
	.article-content {
		margin: 20px 100px;
		text-overflow: ellipsis;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
	}
</style>