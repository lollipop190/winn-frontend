<!-- an account button component, displayed in homepage and fund detail page -->

<template>
  <Button v-on:click="handleClick">
    {{ buttonText }}
  </Button>
</template>

<script>
import { v4 as uuid } from 'uuid'

async function getUserProfile() {
  const apiPath = '/api/v1/account/info'
  return fetch(apiPath, { headers: { Uuid: uuid() } }).then((resp) =>
    resp.json()
  )
}

export default {
  name: 'account-button',

  data: function () {
    return {
      userProfile: null
    }
  },

  computed: {
    buttonText: function () {
      return this.userProfile === null
        ? '登录 / 注册'
        : this.userProfile.firstName + this.userProfile.lastName
      // TODO try to get account name from the server, if failed, show 'login/register'
    }
  },

  methods: {
    handleClick: function () {
      if (this.userProfile === null) this.$router.push('/login')
      else this.$router.push('/account')
    }
  },

  created: function () {
    getUserProfile().then((jsonData) => (this.userProfile = jsonData))
  }
}
</script>

<style scoped></style>
