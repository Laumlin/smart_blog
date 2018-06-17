<template>
	<article>
		<h2 class="title"><router-link :to="{ name: 'article', params: {id: article.id} }" class="title-link">{{ article.title }}</router-link></h2>
    <p class="message">
      <span class="author">{{ article.author.name }}</span>
      <span class="date">时间:{{ article.date }}</span>
    </p>
		<p class="content">{{ article.intro }}</p>
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
	box-shadow: 0 6px 24px 1px rgba(0,0,0,.14),
				      0 6px 10px 1px rgba(0,0,0,.12),
				      0 6px 10px -5px rgba(0,0,0,.2);
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
  .message {
    display: flex;
    justify-content: space-between;
  }
  	.author, .date {
  		font-size: 14px;
  	}
	.content {
		margin: 20px 32px;
		color: #444;
		font-size: 16px;
    text-align: left;
    text-indent: 32px;
	}
	.readmore {
		color: #40759b;
	}
		.title:hover, .readmore:hover {
			text-decoration: underline;
		}
</style>
