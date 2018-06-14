<template>
	<article>
		<h2><router-link :to="'/atricle/' + article.id" class="article-title">{{ article.title }}</router-link></h2>
		<p><router-link :to="'/atricle/' + article.author.id" class="article-author">{{ article.author.name }}</router-link></p>
		<span class="article-date">时间:{{ article.date }}</span>
		<p class="article-content">{{ article.content }}</p>
		<router-link :to="'/atricle/' + article.id" >查看全文</router-link>
	</article>
</template>

<script>
export default {
	props: {
		article: Object
	}
}
</script>

<style scoped>
article {
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid #000;
}
	.article-title {
		font-size: 28px;
		color: #000;
	}
	.article-author {
		color: #000;
	}
	.article-title:hover, .article-author:hover {
		color: #0581e1;
	}
	.article-date {
		font-size: 16px;
	}
	.article-content {
		margin: 20px 100px;
		text-overflow: ellipsis;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
	}
</style>