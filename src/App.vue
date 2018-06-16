<template>
  <div id="app">
    <notifications group="foo" position="top center"></notifications>
    <!-- <img src="./assets/images/logo.png"> -->
    <the-nav />
    <router-view></router-view>
  </div>
</template>

<script>
const TheNav = () => import('@/components/the-nav')

export default {
  name: 'App',
  components: {
    TheNav
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 60px;
  }
</style>
