<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="login">
    <header-bar></header-bar>
    <div><p class="titletext">登录 (Login)</p></div>
    <div>
      <Form
        label-width="80"
        ref="loginform"
        class="loginform"
        :model="loginform"
        :rules="loginrule"
      >
        <FormItem prop="user" label="用户名">
          <Input
            type="text"
            v-model="loginform.user"
            placeholder="Username"
            clearable
            maxlength="20"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="pw" label="密码">
          <Input
            type="password"
            v-model="loginform.pw"
            placeholder="Password"
            clearable
            maxlength="20"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button class="btn" type="primary" @click="handleLogin('loginform')"
            >登录</Button
          >
          <Button
            class="btn"
            type="primary"
            @click="handleRegister('loginform')"
            >注册</Button
          >
        </FormItem>
      </Form>
    </div>
    <div class="citi-link-div">
      <a v-bind:href="url" class="citi-link" target="_blank">花旗官网</a>
    </div>

    <info-bar></info-bar>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import InfoBar from './InfoBar'

export default {
  name: 'Login',
  data: function () {
    return {
      url: 'https://www.citibank.com.cn/sim/index.htm',
      projectPath: 'http://www.baidu.com',

      // For ui
      loginform: {
        user: '',
        pw: ''
      },
      loginrule: {
        user: [
          { required: true, message: '用户名不能为空！', trigger: 'blur' }
        ],
        pw: [{ required: true, message: '密码不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login: function () {
      console.log('login')
    },
    onJump: function () {},
    onregist: function () {
      console.log('register')
    },

    // For UI
    handleLogin(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('成功!')
          // Todo: 成功逻辑
          this.login()
        } else {
          this.$Message.error('失败!')
        }
      })
    },
    handleRegister(name) {
      this.onregist()
    }
  },
  components: {
    HeaderBar,
    InfoBar
  }
}
</script>

<style scoped>
.loginform {
  margin: 20px auto;
  width: 400px;
}
.loginform .btn {
  width: 100px;
  margin-right: 20px;
}
.titletext {
  font-size: 24px;
  color: #2b85e4;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 500;
}
.citi-link-div {
  position: relative;
  height: 20px;
  margin: 30px;
}
.citi-link {
  display: inline-block;
  position: absolute;
  width: 56px;
  left: 50%;
  margin-left: -28px;
}
</style>
