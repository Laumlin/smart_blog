<template>
	<div class="articles-list">
		<base-article v-for="(item, index) in articleList" :article="item" :key="index"/>
	</div>
</template>

<script>
import BaseArticle from '@/components/base-article'
export default {
	name: 'articleList',
	data () {
		return {
			articleList: []
		}
	},
	created () {
		this.$http.get('https://test.com/article').then(res => {
			this.articleList = res.articles
		}).catch(err => {
			console.log(err)
		})
	},
	components: {
		BaseArticle
	},
}
</script>

<style scoped>
.articles-list {
	margin-left: 40px;
	width: 70%;
}
</style>
