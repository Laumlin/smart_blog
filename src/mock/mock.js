const Mock = require('mockjs')
const Random = Mock.Random
const produceNewData = function () {
	let articles = [];
	for (let i = 0; i < 10; i++) {
		let newArticle = {
			title: Random.csentence(5, 30),
			id: Random.natural(),
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
		articleList: articles
	}
}

Mock.mock('https://test.com/article', 'get', produceNewData);
