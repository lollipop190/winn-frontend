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
        <button v-show="!isBinded">去绑定</button>
        <span v-show="isBinded">{{citiAccount}}</span>

      </div>

    </form>
  </div>

</template>

<script>
  // import axios from 'axios'
  // axios({
  //   url:'http://123.207.32.32:8000/home/multidata',
  //   method: 'get'//也可以传递post
  // }).then(res =>{
  //   console.log(res)
  // })

//上面的请求数据已被封装
  import {getAccountInfo} from '../../network/Account'





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
        isBinded: false //判断是否绑定了花旗账户
      }
    },
    created () {
      //请求多个数据
      //todo 设置url
      getAccountInfo().then(res =>{
        this.result = res;
      })
    },
    methods:{
      getInfo(){
        //通过api获取账户信息
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
