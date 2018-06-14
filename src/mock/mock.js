const Mock = require('mockjs')

const Random = Math.random

const produceNewData = function () {
	let articles = [];
	for (let i = 0; i < 10; i++) {
		let newArticle = {
			title: Random.scentence(5, 30),
			id: Random.natural(),
			content: Random.cparagraph(100, 400),
			date: Random.dateTime(),
			author: {
				name: Random.cname(),
				id: Random.natural()
			}
		}
		articles.push(newArticle)
	}

	return {
		articleList: articles
	}
}

Mock.mock('/article', 'get', produceNewData);