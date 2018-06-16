<template>
  <nav class="nav">
    <div class="logo-wrap">
      <img class="logo" :src="logo.src" alt="Logo">
    </div>
    <div class="admin">
      <button class=""></button>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'the-nav',
    data () {
      return {
        logo: {
          src: '@/assets/images/logo.png'
        }
      }
    }
  }
</script>

<style scoped>
  .nav {
    position: fixed;
    top: 0;
    height: 60px;
    background-color: #030303;
  }
</style>
