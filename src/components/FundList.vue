<!-- show a list of funds -->
<template>
  <ol class="fund-list">
    <li v-for="fund in funds" :key="fund.name">
      <a href="#">  <!-- Todo -->
        <Card class="fund-card">
          <p slot="title" class="fund-name">{{ fund.name }}</p>
          <!-- 统计图 -->
          <div class="fund-statistics">
          </div>
          <div class="fund-industry">
            {{ fund.industry }}
          </div>
        </Card>
      </a>
    </li>
  </ol>
</template>

<script>
import { v4 as uuid } from 'uuid'

async function getFunds() {
  const apiPath = '/api/v1/fund/list'
  return fetch(apiPath, { headers: { Uuid: uuid() } })
    .then((resp) => resp.json())
    .then((obj) => obj.fundList)
}

// use dummy
import testData from '../dummy/fundList.json'
getFunds = async function () {
  console.log(testData.fundList)
  return testData.fundList
}

export default {
  name: 'fund-list',

  data: function () {
    return {
      funds: []
    }
  },

  created: function () {
    getFunds().then((fundList) => (this.funds = fundList))
  }
}
</script>

<style scoped>
  .fund-card {
    padding: 0;
    margin: 25px auto;
    background-color: #F7F7F7;
    border-radius: 15px;
  }
  .fund-list {
    list-style: none;
  }
  .fund-name {
    font-size: 18px;
  }
  .fund-industry {
    font-size: 15px;
    color: royalblue;
  }
  .fund-statistics {
    height: 400px;
    width: 700px;
    margin: 0 auto 15px;
    border: 2px solid #EAECEF;
  }
  ol li a {
    display: block;
    padding: 0;
    margin: 0 auto;
    width: 800px;
  }
</style>
