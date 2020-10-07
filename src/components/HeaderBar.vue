<template>
  <Header class="head">
    <account-button class="login"/>
    <Avatar shape="circle" icon="ios-person" class="icon"/>
  </Header>
</template>

<script>
  import AccountButton from './AccountButton'

  export default {
    name: 'header-bar',
    props: ['src'],
    methods: {

    },
    created: function () {

    },
    components: {
      AccountButton
    }
  }
</script>

<style scoped>
  .head {
    position: relative;
    margin-bottom: 20px;
  }
  .login {
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -17px;
    height: 34px;
  }
  .icon {
    position: absolute;
    right: 135px;
    top: 50%;
    margin-top: -17px;
    height: 34px;
    /* border: 1px solid #FFFFFF; */
  }
</style>
