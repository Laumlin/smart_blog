<template>
  <div>
    <button class="back-top" @click="backTop" v-show="backTopShow">toTop</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backTopShow: true
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
    }
  },
  handleScroll () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
      this.backTopShow = true
    } else {
      this.backTopShow = false
    }
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 10px;
}
</style>
