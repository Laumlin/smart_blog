<template>
	<div class="home">
		<base-article v-for="(article, key) in articles" :article="article" :key="key"/>
    <Base-toTop class="back-to-top"/>
	</div>
</template>

<script>
const BaseArticle = () => import('@/components/base-article')
const BaseToTop = () => import('@/components/base-toTop')

export default {
	name: 'view-home',
	data () {
		return {
			articles: []
		}
	},
	mounted () {
		this.$http.get('https://test.com/articles').then(res => {
			this.articles = res.articles
		}).catch(err => {
			console.log(err)
		})
	},
	components: {
		BaseArticle,
    BaseToTop
	},
}
</script>

<style scoped>
.home {
	margin-left: 40px;
	width: 70%;
}
.back-to-top {
  width: 100px;
  height: 100px;
}
</style>
