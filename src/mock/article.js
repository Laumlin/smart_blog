export const article = {
  title: 'Smart_Blog文章编辑规范',
  id: 1, //文章id
  content: `### 文章标题

> 引语

#### 文章正文

\`\`\`json

{
  "name": "ruofee"
}

\`\`\`

| 标题   | 内容   |
| ---- | ---- |
| 陈若枫的博客 | 心之所向 |

  `, //文章内容

  date: new Date(), //文章发布时间
  author: {
    name: '陈若枫', //作者名称
    id: 1, //作者id
    gender: false //作者性别, true为女生, false为男生, 默认为true
  }
}
