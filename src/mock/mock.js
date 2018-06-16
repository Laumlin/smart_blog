const Mock = require('mockjs')

const Random = Mock.Random

const articles = function () {
	let articles = [];
	for (let i = 0; i < 10; i++) {
		let newArticle = {
			title: Random.csentence(5, 20),
			id: 123456,
			content: Random.cparagraph(100, 400),
			date:  Random.date() + ' ' + Random.time(),
			author: {
				name: Random.cname(),
				id: Random.natural()
			}
		}
		articles.push(newArticle)
	}

	return {
		articles: articles
	}
}

const article = function () {
	let article = {
		title: Random.csentence(5, 20),
		id: Random.natural(),
		content: Random.cparagraph(100, 400),
		date:  Random.date() + ' ' + Random.time(),
		author: {
			name: Random.cname(),
			id: Random.natural()
		}
	}

	return {
		article: article
	}
}

Mock.mock('https://test.com/article', 'get', articles);
Mock.mock('https://test.com/article/123456', 'get', article);
