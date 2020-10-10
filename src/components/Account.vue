<template>
  <div id="info">
    <header-bar></header-bar>
    <div><p class="titletext">账户信息</p></div>
    <Modal
      v-model="bindPartDisplayed"
      title="花旗账号绑定"
      @on-ok="modal_ok"
      @on-cancel="modal_cancel">
      <!-- Content -->
      <Form
      :model="formMess"
      label-position="left"
      ref="formMess"
      :label-width="70"
      :rules="bindrule">
        <FormItem prop="account" label="用户名">
          <Input type="text"
            v-model="formMess.account"
            placeholder="Username"
            clearable
            maxlength="20">
            <!-- <Icon type="ios-person-outline" slot="prepend"></Icon> -->
          </Input>
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input type="password"
            v-model="formMess.password"
            placeholder="Password"
            clearable
            maxlength="20">
            <!-- <Icon type="ios-lock-outline" slot="prepend"></Icon> -->
          </Input>
        </FormItem>
      </Form>
    </Modal>
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
      formMess:{
        "account":"",
        "password":""
      },

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
      ],
      // For Modal use
      bindrule: {
        account: [{ required: true, message: '用户名不能为空！', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空！', trigger: 'blur' }]
      }
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
    hidePartsAndSetBinded(){
      let formData = JSON.stringify(this.formMess);
      this.bindPartDisplayed = false;
      this.isBinded = true;
      //提交数据
      bindCitiAccount(formData);
    },

    // For Modal use
    modal_ok() {
      this.$Message.success('成功!');
      this.hidePartsAndSetBinded();
    },
    modal_cancel() {
      this.$refs['formMess'].resetFields();
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
