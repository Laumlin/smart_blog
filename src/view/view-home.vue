<template>
	<div class="home-wrap">
		<div class="home">
      <div class="article-wrap" v-for="(article, key) in articles" :key="key">
        <base-article :article="article" />
      </div>
      <footer class="footer">
        <span v-if="end">No more data :)</span>
        <span @click="load" v-else><i class="iconfont more-icon">&#xe630;</i></span>
      </footer>
    </div>
	</div>
</template>

<script>
const BaseArticle = () => import('@/components/base-article')

export default {
	name: 'view-home',
	data () {
		return {
      page: 1,
      end: false
		}
	},
  components: {
    BaseArticle
  },
  computed: {
    articles () {
      return this.$store.state.article.articles
    }
  },
  methods: {
    getArticles (page) {
      this.$store.dispatch('getArticles', {
        page
      })
        .then((res) => {
          console.log(res)
          if (this.page == 1) {
            this.$store.commit('setArticles', res.articles)
            console.log('set')
          } else {
            console.log('add')
            this.$store.commit('addArticles', res.articles)
          }
          console.log('next', res.next)
          if (res.next) {
            this.page++
            console.log(this.page)
          } else {
            this.end = true
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
    load () {
      this.getArticles(this.page)
    }
  },
	mounted () {
    this.getArticles(1)
	}
}
</script>

<style scoped>
.home-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 10px;
}
  .home {
    width: 850px;
  }
    .article-wrap {
      margin-bottom: 10px;
    }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: .9em;
    color: #999;
  }
    .more-icon {
      font-size: 3em;
      color: #59b982;
      cursor: pointer;
    }
</style>
