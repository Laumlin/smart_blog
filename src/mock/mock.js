const Mock = require('mockjs')

import {articles} from './articles'

Mock.mock('https://test.com/articles', 'get', articles)
