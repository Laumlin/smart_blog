<template>
	<div class="login">
    <div class="login-sign" @keyup.enter="login">
      <div class="login-sign-logo">
        <img class="login-sign-avator" src="../assets/images/girl.png" alt="你的头像不见了！">
      </div>
      <div class="login-sign-form">
        <input type="text" v-model="user.username" class="login-sign-input" placeholder="username" autofocus><br/>
        <input type="text" v-model="user.password" class="login-sign-input"
        placeholder="password" @keyup.enter.stop="login"><br/>
        <button @click="login" class="login-sign-btn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'view-login',
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
        this.$store.dispatch('login', {
          username: this.user.username,
          password: this.user.password
        })
          .then((res) => {
            this.$store.commit('setUser', res)
            this.$notify({
              group: 'foo',
              title: '欢迎您',
              text: '登录成功!'
            })
            this.$store.commit('resetStore')
            // this.$router.push({name: 'home'})
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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .login-sign {
      width: 500px;
      height: 500px;
      background-color: rgba(255,255,255,.5);
      border: 1px solid blue;
      border-radius: 20px;
      box-shadow: 0 2px 3px 4px #888;
    }
      .login-sign-logo {
        height: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
        .login-sign-avator {
          width: 100px;
          height: 100px;
          padding: 5px;
          border: 1px solid #fff;
          border-radius: 50%;
        }
      .login-sign-form {
        height: 65%;
      }
        .login-sign-input {
          margin: 40px;
          width: 230px;
          height: 30px;
          padding-left: 10px;
          font-size: 16px;
          border: 1px solid blue;
          border-radius: 5px;
        }
        .login-sign-input:hover {
          transform: scale(1.1);
        }
        .login-sign-btn {
          margin-top: 20px;
          width: 100px;
          height: 36px;
          border: 1px solid blue;
          border-radius: 3px;
        }
        .login-sign-btn:hover {
          transform: scale(1.1);
          background-color: #FFd;
        }
</style>


