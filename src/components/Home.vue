<!-- home page -->
<template>
  <div class="global">
    <header-bar class="headerBar"> </header-bar>
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
  background-color: #f8f8f9;
}
.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
.headerBar {
  
}
.homefooter {
  
}
</style>
