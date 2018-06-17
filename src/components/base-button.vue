<template>
  <button class="button">
    <span><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: 'base-button'
  }
</script>

<style scoped>
  .button {
    width: 80px;
    height: 30px;
    color: #fff;
    border: none;
    border-radius: 3px;
    background-color: #59b983;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    outline: none;
    cursor: pointer;
  }
  .button:hover {
    background-color: #5fca8d;
  }
</style>
