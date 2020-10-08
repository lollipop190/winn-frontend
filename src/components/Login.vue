<template>
  <div class="login">
    <h1>登录(Login)</h1>
    <div>
      <input
        type="text"
        name="username"
        class="username"
        placeholder="请输入您的用户名！"
      />
      <br />
      <input
        type="password"
        name="password"
        class="password"
        placeholder="请输入您的用户密码！"
      />
      <br />
      <button v-on:click="login">登录</button>
      <button v-on:click="onregist">注册</button>
    </div>
    <a v-bind:href="url">花旗官网</a>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      url: 'https://www.citibank.com.cn/sim/index.htm',
      projectPath: 'http://www.baidu.com'
    }
  },
  methods: {
    login: function () {
      console.log('login')
    },
    onJump: function () {},
    onregist: function () {
      console.log('register')
    }
  }
}
</script>

<style scoped>
</style>
