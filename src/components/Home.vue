<!-- home page -->
<template>
    <div>
        <header class="loginBtn">
            <account-button></account-button>
        </header>
        <main>
            <fund-list></fund-list>
        </main>
        <footer>
            <info-bar></info-bar>
        </footer>
    </div>
</template>

<script>
import AccountButton from './AccountButton'
import FundList from './FundList'
import InfoBar from './InfoBar'

export default {
    name: 'home',
    components: {
        AccountButton,
        FundList,
        InfoBar
    }
}
</script>

<style scoped>
  .clearfix:before, .clearfix:after {
    content: "";
    display: table;
  }
  .clearfix:after{
    clear: both;
  }
  .clearfix {
    *zoom: 1;
  }
  .loginBtn {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>
