<template>
	<article>
		<h2><router-link :to="{name: 'home'}" class="title">{{ article.title }}</router-link></h2>
		<!-- <span><router-link :to="'/atricle/' + article.author.id" class="author">{{ article.author.name }}</router-link></span> -->
		<span class="date">时间:{{ article.date }}</span>
		<p class="content">{{ article.content }}</p>
		<router-link :to="{ name: 'article', params: {id: article.id} }" >查看全文</router-link>
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
	border-bottom: 1px dashed #000;
}
	.title {
		font-size: 26px;
		color: #000;
	}
	.author, .date {
		margin: 8px;
		padding: 5px;
		font-size: 14px;
		color: #000;
	}
	.title:hover, .author:hover {
		color: #0581e1;
	}
	.content {
		margin: 20px 100px;
		text-overflow: ellipsis;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
	}
</style>
