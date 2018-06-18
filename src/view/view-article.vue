<template>
  <div class="article-wrap">
    <article class="article">
      <header class="header">
        <h1 class="title">{{ article.title }}</h1>
      </header>
      <div class="intro">
        <div class="intro-author"><span class="author">作者: {{ article.author.name }}</span></div>
        <div class="intro-date"><span class="date">时间: {{ article.date | dateMagic }}</span></div>
      </div>
      <div class="markdown-body-wrap">
        <vue-markdown v-highlight :source="article.content" class="markdown-body" />
        <footer class="footer">
          <span>Thank you for your reading</span>
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
const VueMarkdown = () => import('vue-markdown')

export default {
  name: 'view-article',
  components: {
    VueMarkdown
  },
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
  }
}
</script>

<style scoped>
.article-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
}
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ccc;
  }
  .article {
    width: 80%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
  }
    .title {
      flex-grow: 1;
      color: #333;
      font-weight: bold;
    }
    .intro {
      display: flex;
      height: 30px;
      align-items: center;
    }
      .intro-author, .intro-date {
        display: flex;
        flex-grow: 1;
        font-size: .9em;
        color: #999;
      }
      .intro-author {
        padding-left: 5px;
      }
      .intro-date {
        justify-content: flex-end;
        padding-right: 5px;
      }
    .markdown-body-wrap {
      margin-top: 20px;
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
    }
      .footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 30px;
        margin-top: 20px;
        padding-right: 5px;
        font-size: .8em;
        color: #999;
      }
</style>
