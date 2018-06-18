<template>
  <div>
    <a class="back-top" @click="backTop" v-show="backTopShow">
      <i class="iconfont top-iconfont">&#xe60e;</i>
    </a>
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
  bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #59b983;
  border-radius: 50px;
  box-shadow: rgba(26, 26, 26, 0.1) 0px 1px 3px;
  transform: translateY(50%);
  cursor: pointer;
}
.back-top:hover {
  background-color: #5fca8d;
  text-decoration: none;
}
  .top-iconfont {
    color: #fff;
    font-size: 2em;
  }
</style>
