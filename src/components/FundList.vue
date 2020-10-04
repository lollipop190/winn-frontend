<!-- show a list of funds -->
<template>
  <ol class="fund-list">
    <li v-for="fund in funds" :key="fund.name">
      <div>
        <span class="fund-name">
          {{ fund.name }}
        </span>
        <span class="fund-industry">
          {{ fund.industry }}
        </span>
      </div>
    </li>
  </ol>
</template>

<script>
import { v4 as uuid } from 'uuid'

async function getFunds() {
  const apiPath = '/api/v1/fund/list'
  return fetch(apiPath, { headers: { Uuid: uuid() } }).then((resp) =>
    resp.json()
  )
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
</style>
