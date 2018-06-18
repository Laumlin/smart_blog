<template>
  <div id="app">
    <notifications group="foo" position="top center"></notifications>
    <!-- <img src="./assets/images/logo.png"> -->
    <the-nav />
    <the-top />
    <router-view></router-view>
  </div>
</template>

<script>
const TheNav = () => import('@/components/the-nav')
const TheTop = () => import('@/components/the-top')

export default {
  name: 'App',
  components: {
    TheNav,
    TheTop
  }
}
</script>

<style>
  body {
    background-color: #f6f5f5;
  }
</style>
