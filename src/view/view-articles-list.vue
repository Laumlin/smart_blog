<template>
	<div class="articles-list">
		<v-article v-for="article in articleList" :article="article"></v-article>
	</div>
</template>

<script>
import Article from '@/components/article'
import api from '@/api'
export default {
	name: 'articleList',
	data () {
		return {
			articleList: [
				{
					title: '雨天，记得带把伞',
					id: 123456,
					author: {name: '落梅雪舞', id:'author_1'},
					date: '2018-05-17 09:39',
					content: ' 岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。 有时候，沉默不语，寂静不言，不愿出门，只想一个呆着闷着。不愿读书写字，给懒惰找着各种借口，一心鼓捣一盆盆的多肉。空气一度低沉，在黑夜风吹起时，埋藏了云的眼泪。很多时候，想要坚强一点，不怕雨打或风吹，然湿透了的步履，如何来风干生命？如何去承担之重？岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。'
				},
				{
					title: '雨天，记得带把伞',
					id: 123456,
					author: {name: '落梅雪舞', id:'author_1'},
					date: '2018-05-17 09:39',
					content: ' 岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。 有时候，沉默不语，寂静不言，不愿出门，只想一个呆着闷着。不愿读书写字，给懒惰找着各种借口，一心鼓捣一盆盆的多肉。空气一度低沉，在黑夜风吹起时，埋藏了云的眼泪。很多时候，想要坚强一点，不怕雨打或风吹，然湿透了的步履，如何来风干生命？如何去承担之重？岁月如梭，风雨人生，堪那荆棘载途，怎就一个“累”字概括。从来都是阴差阳错，错误的故事，寒了一季花开，冷了一掬花落。'
				}			
			]
		}
	},
	components: {
		'v-article': Article
	}
}
</script>

<style scoped>
</style>