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
      <div id="email">
        <label>电子邮箱:</label>
        <span>{{ email }}</span>
      </div>
      <div id="address">
        <label>地址:</label>
        <span>{{ address }}</span>
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

import dummyAccount from '../dummy/accountInfo.json'
async function getDummyInfo() {
  return dummyAccount
}

export default {
  name: 'Account',
  data: function () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      address: null,
      citiAccount: null,
      bindPartDisplayed: false
    }
  },
  created: function () {
    // 请求多个数据
    // todo 设置url
    getDummyInfo().then((res) => {
      for (let prop in res) {
        if (res.hasOwnProperty(prop)) {
          this[prop] = res[prop]
        }
      }
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
