<template>
  	<article>
      <h2 class="title">{{ article.title }}</h2>
      <span class="author">{{ article.author.name }}</span>
      <span class="date">{{ article.date }}</span>
      <p class="content">{{ article.content }}</p>
      <Base-toTop class="back-to-top"/>
  	</article>
</template>

<script>
const BaseToTop = () => import('@/components/base-toTop')
export default {
	name: 'view-article',
  computed: {
    article () {
      return this.$store.state.article.article_current
    }
  },
	mounted () {
    this.$store.dispatch('getArticle')
      .then((res) => {
        this.$store.commit('setArticle', res)
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
    BaseToTop
  }
}
</script>

<style scoped>
article {
	margin-left: 40px;
	width: 80%;
	padding: 20px;
	text-align: left;
	background-color: #fff;
	border: 1px solid #adc2d7;
	box-shadow: 1px 2px 3px #adc2d7;
}
 	.title {
 		margin-bottom: 5px;
		padding-bottom: 10px;
    text-align: center;
		color: #40759b;
		border-bottom: 1px solid #d8e2eb;
 	}
	.author:hover {
		text-decoration: underline;
	}
	.author, .date {
		font-size: 14px;
    color: #333;
	}
  .date {
    float: right;
  }
	.content {
		clear: both;
		margin-top: 20px;
		line-height: 24px;
		font-size: 16px;
		font-family: "Source Code Pro";
		text-indent: 32px;
		color: #444;
	}
</style>
