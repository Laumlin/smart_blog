<template>
  <nav class="nav">
    <div class="logo-wrap">
      <img class="logo" src="@/assets/images/logo.png" alt="Logo">
    </div>
    <div class="admin">
      <button class="admin-button"><router-link class="admin-button-link" :to="{name: 'login'}">登录</router-link></button>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'the-nav',
    data () {
      return {
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
    box-shadow: 1px 1px 1px #3333337d;
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
        width: 60px;
        height: 60px;
        color: #333;
        border: none;
        background-color: #fff;
        outline: none;
      }
        .admin-button-link {
        }
        .admin-button-link:hover {
          text-decoration: underline;
        }
</style>
