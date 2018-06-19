<template>
  <div class="send-wrap">
    <div class="send">
      <header class="header">
        <div class="tab" :class="{'tab-select': tab}" @click="selectMail"><i class="iconfont tab-icon">&#xe643;</i></div>
        <div class="tab" :class="{'tab-select': !tab}" @click="selectGithub"><i class="iconfont tab-icon">&#xe79e;</i></div>
      </header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'view-send',
    data () {
      return {
        tab: this.$route.fullPath == '/mail'
      }
    },
    methods: {
      selectMail () {
        this.tab = !this.tab
        this.$router.push({name: 'send-mail'})
      },
      selectGithub () {
        this.tab = !this.tab
        this.$router.push({name: 'send-github'})
      }
    }
  }
</script>

<style scoped>
  .send-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
    .send {
      width: 850px;
      background-color: #fff;
      border-radius: 6px 6px 0 0;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      overflow: hidden;
    }
      .header {
        display: flex;
        height: 60px;
        overflow: hidden;
      }
        .tab {
          display: flex;
          flex-grow: 1;
          justify-content: center;
          align-items: center;
          color: #59b983;
          cursor: pointer;
        }
          .tab-icon {
            font-size: 1.6em;
          }
        .tab-select {
          background-color: #59b983;
          color: #fff;
        }
</style>
