<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    todo router-configuration-->
<!--    <router-view/>-->

    <Account/>

  </div>

</template>

<script>
  import Account from './components/AccountComps/Account.vue'
export default {
  name: 'App',
  components:{
    Account
  }
}
</script>

<style>

</style>
