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
		this.$http.get('https://test.com/articles').then(res => {
			console.log(res)
			this.articles = res.articles
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
	margin-left: 40px;
	width: 70%;
}
</style>
