<template>
	<div class="home-wrap">
		<div class="home">
      <div class="article-wrap" v-for="(article, key) in articles" :key="key">
        <base-article :article="article" />
      </div>
    </div>
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
  computed: {
    articles () {
      return this.$store.state.article.articles.articles
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
		BaseArticle
	},
}
</script>

<style scoped>
.home-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 40px;
}
  .home {
    width: 850px;
  }
    .article-wrap {
      margin-bottom: 10px;
    }
</style>
