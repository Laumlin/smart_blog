const Mock = require('mockjs')

import {articles} from './articles'
import {article} from './article'

Mock.mock('https://test.com/articles', 'get', articles)
Mock.mock('https://test.com/article/1', 'get', article)
