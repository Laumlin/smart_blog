<template>
	<div class="home">
		<base-article v-for="(article, key) in articles" :article="article" :key="key"/>
	</div>
</template>

<script>
const BaseArticle = () => import('@/components/base-article')

export default {
	name: 'view-home',
	data () {
		return {
			articles: []
		}
	},
	mounted () {
		this.$http.get('https://test.com/article').then(res => {
			this.articles = res.articleList
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
.home {
	width: 70%;
	background-color: #ddd;
	overflow: hidden;
}
</style>
