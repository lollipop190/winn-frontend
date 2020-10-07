<!-- home page -->
<template>
    <div class="global">
        <header-bar class="headerBar">
        </header-bar>
        <main>
            <fund-list></fund-list>
        </main>
        <footer class="homefooter">
            <info-bar></info-bar>
        </footer>
    </div>
</template>

<script>
import FundList from './FundList'
import InfoBar from './InfoBar'
import HeaderBar from './HeaderBar'

export default {
    name: 'home',
    components: {
        FundList,
        InfoBar,
        HeaderBar
    }
}
</script>

<style scoped>
  .global {
    background-color: #F8F8F9;
  }
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
  .headerBar {
    background-color: #2d8cf0;
  }
  .homefooter {  /* Don't change this. */
    color: #757575;
    width: 400px;
    margin: 40px auto 15px;
  }
</style>
