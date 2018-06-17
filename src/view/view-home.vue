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
      page: 1
		}
	},
  computed: {
    articles () {
      return this.$store.state.article.articles.articles
      console.log(this.$store.state.article.articles.articles)
    }
  },
	mounted () {
    this.$store.dispatch('getArticles', {
      page: this.page
    })
      .then((res) => {
        if (this.page == 1) {
          this.$store.commit('setArticles', res)
          this.page++
        } else {
          this.$store.commit('addArticles', res)
        }
      })
      .catch((err) => {
        this.$notify({
          type: 'error',
          title: '请重试',
          text: '获取文章失败'
        })
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
	width: 80%;
}
</style>
