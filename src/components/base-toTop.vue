<template>
  <div>
    <a class="back-top" @click="backTop" v-show="backTopShow"></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backTopShow: false
    }
  },
  mounted () {
   window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    backTop () {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop){
          document.body.scrollTop -= 100
          document.documentElement.scrollTop -= 100
        } else {
          clearInterval(back)
        }
      })
    },
    handleScroll () {
      console.log('move')
      if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        this.backTopShow = true
      } else {
        this.backTopShow = false
      }
    }
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  background: url('../assets/images/top.png') no-repeat;
  opacity: 0.7;
}
</style>
