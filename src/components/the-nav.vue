<template>
  <nav class="nav">
    <div class="logo-wrap">
      <img class="logo" src="@/assets/images/logo.png" alt="Logo">
    </div>
    <div class="admin" v-if="!userCurrent">
      <button class="admin-button">
        <router-link class="admin-button-link" :to="{name: 'login'}">登录</router-link>
      </button>
    </div>
    <div class="admin" v-else>
      <button class="admin-button"><router-link class="admin-button-link" :to="{name: 'login'}">{{userCurrent.name}}</router-link></button>
      <button class="admin-button" @click="loginout"><i class="iconfont loginout">&#xe639;</i></button>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'the-nav',
    computed: {
      userCurrent () {
        return this.$store.state.user.user
      }
    },
    methods: {
      loginout () {
        //脱出
      }
    }
  }
</script>

<style scoped>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 1px 1px 1px #a5a5a582;
  }
    .logo-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 60px;
    }
      .logo {
        width: 50px;
        height: 50px;
      }
    .admin {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: calc(100% - 120px);
    }
      .admin-button {
        width: auto;
        height: 60px;
        min-width: 55px;
        color: #333;
        border: none;
        background-color: #fff;
        outline: none;
        cursor: pointer;
      }
        .loginout {
          color: #59b983;
          font-size: 1.5em;
        }
        .admin-button-link:hover {
          text-decoration: underline;
        }
</style>
