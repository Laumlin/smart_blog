<template>
	<article>
		<h2 class="title"><router-link :to="{ name: 'article', params: {id: article.id} }" class="title-link">{{ article.title }}</router-link></h2>
		<span class="author"><router-link :to="{ name: 'author', params: {id: article.author.id} }" class="author-link">{{ article.author.name }}</router-link></span>
		<span class="date">时间:{{ article.date }}</span>
		<p class="content">{{ article.content }}</p>
		<router-link :to="{ name: 'article', params: {id: article.id} }" class="readmore">查看全文...</router-link>
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
	margin-bottom: 30px;
	padding: 10px;
	background-color: #fff;
	border: 1px solid #adc2d7;
	box-shadow: 1px 2px 3px #adc2d7;
}
	.title {
		margin-bottom: 5px;
		padding-bottom: 10px;
		border-bottom: 1px solid #d8e2eb
	}
		.title-link {
			font-size: 22px;
			color: #40759b;
		}
	.author, .date {
		margin: 8px;
		font-size: 14px;
	}
		.author-link {
			color: #40759b;
		}
	.content {
		margin: 20px 100px;
		color: #444;
		font-size: 16px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.readmore {
		color: #40759b;
	}
		.title:hover, .author:hover, .readmore:hover {
			text-decoration: underline;
		}
</style>