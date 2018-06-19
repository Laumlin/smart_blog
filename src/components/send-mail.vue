<template>
  <div class="body">
    <form class="form" action="mailto:ruofee@126.com" enctype="text/plain">
      <input class="title" type="text" name="subject" placeholder="邮件标题">
      <textarea class="content" name="body" placeholder="邮件正文"></textarea>
      <footer class="footer">
        <input class="footer-button" type="submit">
      </footer>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'send-mail'
  }
</script>

<style scoped>
  .body {
    padding: 20px 30px 0 30px;
  }
    .form {
      display: flex;
      flex-direction: column;
      height: 400px;
    }
      .title {
        height: 35px;
        padding: 4px 10px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid #999;
        outline: none;
      }
      .title:focus {
        border-color: #59b982;
      }
      .content {
        height: 280px;
        padding: 10px 10px;
        border-radius: 4px;
        border: 1px solid #999;
        resize: none;
        outline: none;
      }
      .content:focus {
        border-color: #59b982;
      }
      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
      }
        .footer-button {
          width: 60px;
          height: 30px;
          color: #fff;
          border: none;
          border-radius: 3px;
          background-color: #59b982;
          cursor: pointer;
        }
        .footer-button:hover {
          background-color: #6ce29f;
        }
</style>
