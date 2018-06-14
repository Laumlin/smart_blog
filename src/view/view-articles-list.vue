<template>
	<div class="articles-list">
		<v-article :article="article"></v-article>
	</div>
</template>

<script>
import article from '@/components/article'
export default {
	name: 'articleList',
	data () {
		return {
			// articleList: [
			// 	{
			// 		title: '雨天，记得带把伞',
			// 		id: 123456,
			// 		author: {name: '落梅雪舞', id:'author_1'},
			// 		date: '2018-05-17 09:39',
			// 		content: ' 岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。 有时候，沉默不语，寂静不言，不愿出门，只想一个呆着闷着。不愿读书写字，给懒惰找着各种借口，一心鼓捣一盆盆的多肉。空气一度低沉，在黑夜风吹起时，埋藏了云的眼泪。很多时候，想要坚强一点，不怕雨打或风吹，然湿透了的步履，如何来风干生命？如何去承担之重？岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。'
			// 	},
			// 	{
			// 		title: '雨天，记得带把伞',
			// 		id: 123456,
			// 		author: {name: '落梅雪舞', id:'author_2'},
			// 		date: '2018-05-17 09:39',
			// 		content: ' 岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。'
			// 	}
			// ]
			article: {
				title: '雨天，记得带把伞',
				id: 123456,
				author: {name: '落梅雪舞', id:'author_1'},
				date: '2018-05-17 09:39',
				content: ' 岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。 有时候，沉默不语，寂静不言，不愿出门，只想一个呆着闷着。不愿读书写字，给懒惰找着各种借口，一心鼓捣一盆盆的多肉。空气一度低沉，在黑夜风吹起时，埋藏了云的眼泪。很多时候，想要坚强一点，不怕雨打或风吹，然湿透了的步履，如何来风干生命？如何去承担之重？岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。'
			}
		}
	},
	components: {
		'v-article': article
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
