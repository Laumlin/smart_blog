<template>
	<article>
		<header class="header">
      <h2><router-link :to="{ name: 'article', params: {id: article.id} }" class="title">{{ article.title }}</router-link></h2>
    </header>
    <div class="intro">
      <div class="intro-author"><span class="author">{{ article.author.name }}</span></div>
      <div class="intro-date"><span class="date">时间:{{ article.date }}</span></div>
    </div>
		<p class="content">{{ article.intro }}</p>
    <footer class="footer">
      <router-link :to="{name: 'article', params: {id: article.id}}"><base-button>查看更多</base-button></router-link>
    </footer>
	</article>
</template>

<script>
const BaseButton = () => import('@/components/base-button')

export default {
	props: {
		article: Object
	},
  components: {
    BaseButton
  }
}
</script>

<style scoped>
article {
	margin-bottom: 30px;
	padding: 0 20px;
	background-color: #fff;
  border-radius: 3px;
	box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ccc;
  }
    .title {
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
	.content {
		margin-top: 10px;
    margin-bottom: 20px;
    padding-left: 5px;
    padding-right: 5px;
		color: #333;
		font-size: .9em;
	}
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-top: 1px solid #ccc;
  }

		.title:hover {
			text-decoration: underline;
		}
</style>
