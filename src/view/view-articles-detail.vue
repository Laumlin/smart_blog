<template>
  	<article>
  		<h2 class="title">{{ article.title }}</h2>
  		<span class="author"><router-link :to="{ name: 'author', params: {id: article.author.id} }" class="author-link">{{ article.author.name }}</router-link></span>
  		<span class="date">{{ article.date }}</span>
  		<p class="content">{{ article.content }}</p>
  	</article>
</template>

<script>
export default {
	name: 'articleDetail',
	data () {
		return {
			article: {}
		}
	},
	mounted () {
		let id = this.$route.params.id
		this.$http.get('https://test.com/article/' + id)
		.then(res => {
			this.article = res.article
		})
	}
}
</script>

<style scoped>
article {
	margin-left: 40px;
	width: 70%;
	padding: 20px;
	text-align: left;
	background-color: #fff;
	border: 1px solid #adc2d7;
	box-shadow: 1px 2px 3px #adc2d7;
}
 	.title {
 		margin-bottom: 5px;
		padding-bottom: 10px;
		color: #40759b;
		border-bottom: 1px solid #d8e2eb;
 	}
	.author:hover {
		text-decoration: underline;
	}
	.date {
		font-size: 14px;
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