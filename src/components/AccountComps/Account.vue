<template>
  <div id="info">
    <h2>账户信息</h2>
    <form>
      <div id="first-name">
        <label>姓:</label>
        <span>{{firstName}}</span>

      </div>
      <div id="last-name">
        <label>名:</label>
        <span>{{lastName}}</span>
      </div>
      <div id="phone-number">
        <label>手机号:</label>
        <span>{{phoneNumber}}</span>
      </div>
      <div id="email">
        <label>电子邮箱:</label>
        <span>{{email}}</span>
      </div>
      <div id="address">
        <label>地址:</label>
        <span>{{address}}</span>
      </div>
      <div id="card-info">
        <label>银行卡信息:</label>
        <span>{{cardInfo}}</span>
      </div>
      <div id="citi-account">
        <label>花旗账号:</label>
        <button v-if="!isBinded" v-on:click="displayPartsForBind">去绑定</button>
        <span v-if="isBinded">{{citiAccount}}</span>
        <div v-if="bindPartDisplayed">
            <form action="">
              <input type="text"  placeholder="cilent_id" v-model="formMess.cilent_id"><br>
              <input type="text"  placeholder="redirect_url" v-model="formMess.redirect_url"><br>

            </form>
            <Button><span class="but" @click="hidePartsAndSetBinded">提交</span></Button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  import {getAccountInfo, bindCitiAccount} from '../../network/Account'
  export default {
    name: 'Account',
    data(){
      return {
        result : null,
        //for test
        firstName : '张',
        lastName : '潮越',
        phoneNumber: '123',
        email: '@example',
        address: '163 xinlin road',
        cardInfo : 'ABC',
        citiAccount : 'citi',
        isBinded: false, //判断是否绑定了花旗账户
        bindPartDisplayed: false,
        formMess:{
          response_type:"code",
          cilent_id:"",
          scope:"accounts_details_transaction",
          countryCode:"CH",//china?
          businessCode:"GCB",
          locale:"en_US",
          state:"12093",
          redirect_url:""
        }
      }
    },
    created () {
      //请求多个数据
      //todo 设置url
      getAccountInfo().then(res =>{
        this.result = res;
        //todo: set data
      })
    },
    methods:{
      displayPartsForBind() {
        this.bindPartDisplayed = true;
      },
      hidePartsAndSetBinded(){
        // let formData = JSON.stringify(this.formMess);
        // this.formMess.
        this.bindPartDisplayed = false;
        this.isBinded = true;
        //提交数据
        bindCitiAccount(this.formMess);
      }
    }
  }
</script>

<style scoped>

  h2{
    margin: 30px;
    margin-left: 60px;
  }
  label{
    display: inline-block;
    width: 6em;
    text-align: right;
  }
  div{
    margin: 20px;
    font-size: 25px;

}
</style>
