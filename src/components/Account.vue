<template>
  <div id="info">
    <h2>账户信息</h2>
    <form>
      <div id="first-name">
        <label>姓:</label>
        <span>{{ firstName }}</span>
      </div>
      <div id="last-name">
        <label>名:</label>
        <span>{{ lastName }}</span>
      </div>
      <div id="phone-number">
        <label>手机号:</label>
        <span>{{ phoneNumber }}</span>
      </div>
      <div id="email">
        <label>电子邮箱:</label>
        <span>{{ email }}</span>
      </div>
      <div id="address">
        <label>地址:</label>
        <span>{{ address }}</span>
      </div>
      <div id="card-info">
        <label>银行卡信息:</label>
        <span>{{ cardInfo }}</span>
      </div>
      <div id="citi-account">
        <label>花旗账号:</label>
        <button v-if="!isBinded" v-on:click="displayPartsForBind">
          去绑定
        </button>
        <span v-if="isBinded">{{ citiAccount }}</span>
        <div v-if="bindPartDisplayed">
          此处为花旗用户绑定
          <button v-on:click="hidePartsAndSetBinded">确认</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
// 请求数据已被封装
import { getAccountInfo, bindCitiAccount } from '../network/Account'
export default {
  name: 'Account',
  data: function () {
    return {
      result: null,
      // for test
      firstName: '张',
      lastName: '潮越',
      phoneNumber: '123',
      email: '@example',
      address: '163 xinlin road',
      cardInfo: 'ABC',
      citiAccount: 'citi',
      isBinded: false, // 判断是否绑定了花旗账户
      bindPartDisplayed: false
    }
  },
  created: function () {
    // 请求多个数据
    // todo 设置url
    getAccountInfo().then((res) => {
      this.result = res
      // todo: set data
    })
  },
  methods: {
    displayPartsForBind() {
      this.bindPartDisplayed = true
    },
    hidePartsAndSetBinded() {
      this.bindPartDisplayed = false
      this.isBinded = true
      // todo 获取用户输入的花旗用户数据
      bindCitiAccount('citi account')
    }
  }
}
</script>

<style scoped>
.tb {
  margin: 5px 30px;
}
</style>
