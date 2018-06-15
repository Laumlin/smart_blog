<template>
	<div class="login">
    <div class="login-sign">
      <div class="login-sign-logo">
        <img class="login-sign-avator" src="../assets/images/girl.png" alt="你的头像不见了！">
      </div>
      <div class="login-sign-form">
        <input type="text" v-model="username" class="login-sign-input" placeholder="username" autofocus><br/>
        <input type="text" v-model="password" class="login-sign-input"
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
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        //登录函数
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


