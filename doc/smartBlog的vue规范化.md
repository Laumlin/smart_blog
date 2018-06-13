### SmartBlog中的VUE规范化

1. 组件规范

   - 例子: filename: the-header.vue(文件名使用多个单词, 并横线连接)

     ```html
     <template>
       <header class="header">
       	<h1 class="header-text">{{title}}</h1> <!-- class命名时以父元素为基础进行拓展 -->
         <base-button :button-text="buttonText" /> <!-- template中组件自闭合, props名使用横线连接 -->
       </header>
     </template>
     <script>
       const BaseButton = () => import ('@/compontents/base-button') //以这种形式引入组件
       
       export default {
         name: 'the-header', //由多个单词组成, 并使用横线相连
         components: {
           BaseButton
         },
         data () {
           return {
             buttonText: '按钮文字'
           }
         },
         props: {
           title: String, //props标注好格式
           buttonText: String //js中props命名格式: 驼峰
         }
       }
     </script>

     <style scoped> <!-- 使用scoped -->
       .header {
         font-size: 16px;
       }
         .header-text {
     	  color: red;
         } /* 子元素在父元素基础上加上两个空格 */
     </style>
     ```

   - 标签顺序

     ```html
     <template></template>
     <script></script>
     <style></style>
     ```

   - 基础组件名: 以base开头, 表示为基础组件

   - 唯一组件: 以the开头, 表示唯一

   - 页面组件以view开头, eg: `view-home.vue`

   - 组件自闭合: template中组件使用自闭合: `<base-button />`

   - tamplate中的组件名: 

     - 使用多个单词拼接, 用横线连接, eg: `<base-button />`
     - 组件名应该倾向于完整单词而不是缩写

2. v-if和v-for避免一起使用

   可使用计算属性来避免

   ```html
   <template>
     <ul>
       <li v-for="i of newArr"></li>
     </ul>
   </template>
     
   <script>
     export default {
       name: 'BaseTest',
       data () {
         return {
           arr: [1, 2, 3, 4]
         }
       },
       computed: {
         newArr () {
           return this.arr.filter((e) => {
             if (e > 12) return true
           })
         }
       }
     }
   </script>
   ```

3. v-for设置键值

4. 计算属性: 应该把复杂计算属性分割为尽可能多的更简单的属性

5. 使用指令缩写: 

   ```
   v-on:click    等同于   @click
   v-bind:class  等同于   :class
   ```

6. vue中特性的书写顺序

   1. is属性
   2. 列表渲染: v-for
   3. 条件渲染: v-if
   4. 渲染方式: v-once等
   5. ref, key, slot
   6. 双向绑定: v-model
   7. 其他特性: class, title等
   8. 事件: @click等
   9. 内容: v-html, v-text