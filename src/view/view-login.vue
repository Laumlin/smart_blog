<template>
	<div class="login">
    <div class="login-sign">
      <div class="login-sign-logo">
        <img class="login-sign-avator" src="@/assets/images/logo.png" alt="logo！">
      </div>
      <form class="login-sign-form">
        <input type="text" v-model="user.username" class="login-sign-input" placeholder="username" autofocus>
        <input type="password" v-model="user.password" class="login-sign-input"
        placeholder="password">
        <div class="button-wrap" @click="login"><base-button><i class="iconfont login-icon">&#xe858;</i></base-button></div>
      </form>
    </div>
  </div>
</template>

<script>
  const BaseButton = () => import('@/components/base-button')

  export default {
    name: 'view-login',
    components: {
      BaseButton
    },
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        if (!this.user.username || !this.user.password) {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: '账号密码不得为空',
            text: '登录失败'
          })
          return
        }
        if (this.$store.state.user.user) {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: '已有用户登录',
            text: '请注销后重试'
          })
          return
        }
        this.$store.dispatch('login', {
          username: this.user.username,
          password: this.user.password
        })
          .then((res) => {
            console.log(res)
            this.$store.commit('setUser', res)
            this.$notify({
              group: 'foo',
              title: '欢迎您',
              text: '登录成功!'
            })
            this.$router.push({name: 'home'})
          })
          .catch((err) => {
            this.$notify({
              group: 'foo',
              type: 'error',
              title: '账号或密码错误',
              text: '登录失败'
            })
          })
      }
    }
  }
</script>

<style scoped>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 80px;
  }
    .login-sign {
      width: 500px;
      height: 370px;
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
    }
      .login-sign-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 180px;
      }
        .login-sign-avator {
          width: 150px;
          height: 150px;
        }
      .login-sign-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100% - 180px);
        padding-top: 10px;
      }
        .login-sign-input {
          width: 230px;
          height: 30px;
          padding-left: 10px;
          margin-bottom: 15px;
          font-size: 16px;
          border: 1px solid #999;
          border-radius: 3px;
          outline: none;
        }
          .login-sign-input:focus {
            border-color: #59b983;
          }
        .login-icon {
          font-size: 1.5em;
        }
</style>


