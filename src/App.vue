<template>
  <div id="app">
    <notifications group="foo" position="top center"></notifications>
    <!-- <img src="./assets/images/logo.png"> -->
    <the-nav />
    <the-top />
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
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
