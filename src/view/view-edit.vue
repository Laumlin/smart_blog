<template>
  <div class="edit-wrap">
    <div class="edit">
      <mavon-editor class="edit-tool" v-model="editor.value" placeholder=""/>
    </div>
    <footer class="footer">
      <div class="button-wrap" @click="reset"><base-button>重置</base-button></div>
      <div class="button-wrap" @click="save"><base-button>保存</base-button></div>
    </footer>
  </div>
</template>

<script>
  import { createId } from '@/init/common'

  const BaseButton = () => import ('@/components/base-button')

  export default {
    name: 'view-edit',
    components: {
      BaseButton,
    },
    data () {
      return {
        editor: {
          value: `### 文章标题

---

#### 文章正文

> 文章格式要求: 在\`---\`之前的部分作为文章标题, \`---\`后面的部分为文章正文

编辑器为开源项目, 地址为: [mavonEditor](https://github.com/hinesboy/mavonEditor)`,
          placeholder: '输入文章内容'
        }
      }
    },
    methods: {
      cut (text) {
        let number = text.indexOf('---')
        let title = text.substring(0, number)
        let content = text.substring(number + 3)
        return {
          title,
          content
        }
      },
      save () {
        let date = new Date
        let { title, content } = this.cut(this.editor.value)
        let data = {
          id: createId(),
          title,
          content,
          date,
          author_id: this.$store.state.user.user.id
        }
        this.$http.post('https://test.com', data)
          .then((res) => {
            this.notify({
              group: 'foo',
              type: 'success',
              title: '发表成功'
            })
          })
          .catch((err) => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: '发表失败',
              text: '请重试'
            })
          })
      },
      reset () {
        this.editor.value = ''
      }
    },
    beforeCreate () {
      if (!this.$store.state.user.user) {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: '用户未登录',
          text: '请登录'
        })
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style scoped>
  .edit-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
    .edit {
      width: 850px;
    }
      .edit-tool {
        min-height: 500px;
        min-width: 300px;
      }
    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 850px;
      height: 40px;
    }
      .button-wrap {
        margin-left: 5px;
      }
</style>
