
const Mock = require('mockjs')

import {articles} from './articles'
import {user} from './user'
import {article} from './article'

Mock.mock('https://test.com/login', 'post', user)
Mock.mock('https://test.com/articles', 'get', articles)
Mock.mock('https://test.com/article', 'get', article)
Mock.mock('https://test.com/loginout', 'post')

