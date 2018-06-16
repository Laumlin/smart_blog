<template>
	<div class="home">
		<!-- <base-article v-for="(article, key) in articles" :article="article" :key="key"/> -->
	</div>
</template>

<script>
const BaseArticle = () => import('@/components/base-article')

export default {
	name: 'view-home',
	data () {
		return {
      page: 1
		}
	},
  // computed: {
  //   articles () {
  //     return this.$store.state.article.articles
  //   }
 //  },
	// mounted () {
 //    this.$store.dispatch('getArticles', {
 //      page: this.page
 //    })
 //      .then((res) => {
 //        if (this.page == 1) {
 //          this.$store.commit('setArticles', res)
 //        } else {
 //          this.$store.commit('addArticles', res)
 //        }
 //      })
 //      .catch((err) => {
 //        this.$notify({
 //          type: 'error',
 //          title: '请重试',
 //          text: '获取文章失败'
 //        })
 //      })
	// },
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
