<template>
  <nav class="nav">
    <div class="logo-wrap">
      <router-link :to="{name: 'home'}"><img class="logo" src="@/assets/images/logo.png" alt="Logo"></router-link>
    </div>
    <div class="admin" key="1">
      <button class="admin-button" v-if="!user">
        <router-link class="admin-button-link" :to="{name: 'login'}">登录</router-link>
      </button>
      <div class="button-wrap" v-else>
        <button class="admin-button"><router-link class="admin-button-link" :to="{name: 'login'}">{{user.name}}</router-link></button>
        <button class="admin-button"><router-link :to="{name: 'edit'}"><i class="iconfont loginout">&#xe6d6;</i></router-link></button>
        <button class="admin-button" @click="loginout"><i class="iconfont loginout">&#xe639;</i></button>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'the-nav',
    computed: {
      user () {
        return this.$store.state.user.user
      }
    },
    methods: {
      loginout () {
        console.log('loginout')
        this.$store.dispatch('loginout')
          .then((res) => {
            this.$store.commit('loginout')
            this.$notify({
              group: 'foo',
              type: 'success',
              title: '您已退出登录',
              text: '注销成功'
            })
            this.$router.push({name: 'login'})
          })
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
    z-index: 1501;
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
      .button-wrap {
        display: flex;
      }
        .loginout {
          color: #59b983;
          font-size: 1.5em;
        }
        .admin-button-link:hover {
          text-decoration: underline;
        }
</style>
