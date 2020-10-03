<!-- an account button component, displayed in homepage and fund detail page -->

<template>
    <button>
        {{ buttonText }}
    </button>
</template>

<script>
import { v4 as uuid } from 'uuid'
function getUserProfile() {
    const apiPath = '/api/v1/account/info'
    return fetch(apiPath).then((resp) => resp.json())
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

    created: function () {
        getUserProfile().then((jsonData) => (userProfile = jsonData))
    }
}
</script>

<style scoped></style>
