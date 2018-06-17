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
  body {
    background-color: #f6f5f5;
  }
</style>
