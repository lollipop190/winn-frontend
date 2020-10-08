<template>
  <div id="info">
    <header-bar></header-bar>
    <div><p class="titletext">账户信息</p></div>
    <form class="showform">
      <Table
        stripe
        border
        :columns="tbcolumns"
        :data="tbdata"
        :show-header="showheader">
        <template slot-scope="{ row }" slot="c1">
          <strong style="color: #035bc6;">{{ row.c1 }}</strong>
        </template>
      </Table>
      <div id="citi-account">
<!--        <label>花旗账号:</label>
        <button v-if="!isBinded" v-on:click="displayPartsForBind">
          去绑定
        </button>
        <span v-if="isBinded">{{ citiAccount }}</span> -->
        <div v-if="bindPartDisplayed">
          此处为花旗用户绑定
          <button v-on:click="hidePartsAndSetBinded">确认</button>
        </div>
      </div>
    </form>
    <info-bar></info-bar>
  </div>
</template>

<script>
// 请求数据已被封装
import { getAccountInfo, bindCitiAccount } from '../network/Account'

import dummyAccount from '../dummy/accountInfo.json'
import InfoBar from './InfoBar'

async function getDummyInfo() {
  return dummyAccount
}

import HeaderBar from './HeaderBar'

export default {
  name: 'Account',
  data: function () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      address: null,
      citiAccount: null,
      bindPartDisplayed: false,
      isBinded: false,

      // For table use
      showheader: false,
      tbcolumns: [
        {
          title: 'C1',
          key: 'c1',
          slot: 'c1',
          width: 150
        },
        {
          title: 'C2',
          key: 'c2',
          render: (h, params) => {
            if (params.index < 4 || this.isBinded) {
              return h('span', params.row.c2);
            }
            else {
              return h('Button', {
                props: {
                },
                on: {
                  click: () => {
                    this.displayPartsForBind();
                  }
                }
              }, '去绑定');
            }
          }
        }
      ]
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
  },
  components: {
    HeaderBar,
    InfoBar
  },
  computed: {
    tbdata: function() {
      let tbdata = [];
      tbdata.push({
        c1: '姓',
        c2: this.firstName
      });
      tbdata.push({
        c1: '名',
        c2: this.lastName
      });
      tbdata.push({
        c1: '电子邮箱',
        c2: this.email
      });
      tbdata.push({
        c1: '地址',
        c2: this.address
      });
      tbdata.push({
        c1: '花旗账号',
        c2: this.citiAccount
      });
      return tbdata;
    }
  }
}
</script>

<style scoped>
  * {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .titletext {
    font-size: 24px;
    color: #2b85e4;
    text-align: center;
    letter-spacing: 10px;
    font-weight: 500;
  }
  .showform {
    margin: 20px 40px;
  }
</style>
