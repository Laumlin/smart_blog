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

      - url: `/articles`

      - 查询字符串: 

        ```json
        {
          "page": Number, //页数
        }
        ```

      - 返回参数: 

        ```json
        {
          "next": Boolean, //是否有下一页
          "articles": [
            {
              "title": String, //文章标题
              "id": Number, //文章id
              "intro": String, //简略内容
              "date": Date, //文章发布时间
              "author": {
                "name": String, //作者名称
                "id": Number, //作者id
                "gender": Boolean //作者性别, true为女生, false为男生, 默认为true
              }
            }
           ...
          ]
        }
        ```

   2. 文章详细

      - type: `GET`

      - url: `/article/`

      - 参数: 

        ```json
        {
          "id": Number //文章id
        }
        ```

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
            "gender": Boolean //作者性别, true为女生, false为男生, 默认为true
          }
        }
        ```

3. 个人中心接口(次要)

   1. 用户信息

      - type: `GET`

      - url: `/user/`

      - 参数

        ```json
        {
          "id": Number //作者id
        }
        ```

      - 返回参数:

        ```json
        {
          "name": String, //作者名称
          "id": Number, //作者id
          "gender": boolean
        }
        ```

   2. 用户文章列表

      - type: `get`

      - url: `/article`

      - 查询字符串

        ```json
        {
          "authorId": Number, //作者id
        }
        ```

      - 返回参数

        ```json
        [
          {
            "title": String, //文章标题
            "id": Number, //文章id
            "intro": String, //简略内容
            "date": Date, //文章发布时间
            "author": {
              "name": String, //作者名称
              "id": Number, //作者id
              "gender": Boolean //作者性别, true为女生, false为男生, 默认为true
            }
          }
         ...
        ]
        ```

   3. 发表文章接口

      - type: `post`

      - url: `/publish/`

      - 发送数据

        ```json
        {
          "id": Number, //文章id
          "date": Date, //时间
          "title": String, //文章标题
          "content": String, //文章内容
          "author_id": Number //作者id
        }
        ```

        ​

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