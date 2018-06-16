const Mock = require('mockjs')

import {articles} from './articles'
import {user} from './user'

Mock.mock('https://test.com/login', 'post', user)
Mock.mock('https://test.com/articles', 'get', articles)
