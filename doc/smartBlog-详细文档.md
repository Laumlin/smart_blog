### 接口文档

1. 登录接口

   - type: `POST`


   - url: `/login/`

   - 参数: 

     ```json
     {
       "username": String, //用户名
       "password": String //用户密码
     }
     ```

2. 文章接口

   1. 文章列表

      - type: `GET`

      - url: `/article`

      - 返回参数: 

        ```json
        [
          {
            "title": String, //文章标题
            "id": Number, //文章id
            "content": String, //文章内容
            "date": Date, //文章发布时间
            "author": {
              "name": String, //作者名称
              "id": Number, //作者id
            }
          }
         ...
        ]
        ```

   2. 文章具体

      - type: `GET`

      - url: `/article/:id`

      - 返回参数:

        ```json
        {
          "title": String, //文章标题
          "id": Number, //文章id
          "content": String, //文章内容
          "date": Date, //文章发布时间
          "author": {
            "name": String, //作者名称
            "id": Number, //作者id
          }
        }
        ```

3. 个人中心接口(次要)

   1. 用户信息

      - type: `GET`

      - url: `/user/:id`

      - 返回参数:

        ```json
        {
          "name": String, //作者名称
          "id": Number, //作者id
        }
        ```

   2. 用户文章列表

      - type: `get`

      - url: `/article?userId=2`

      - 返回参数

        ```json
        [
          {
            "title": String, //文章标题
            "id": Number, //文章id
            "content": String, //文章内容
            "date": Date, //文章发布时间
            "author": {
              "name": String, //作者名称
              "id": Number, //作者id
            }
          }
         ...
        ]
        ```

4. 注销接口

   - type: `POST`
   - url: `/loginout`


### 页面详情

1. 登录界面
2. 文章列表页面(混合)
3. 文章详情页面
4. 个人中心页面(次要)
   - 个人文章列表
   - 编辑文章
     - 写
     - 改
     - 删