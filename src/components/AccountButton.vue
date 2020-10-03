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
    data: function () {
        return {
            userProfile: null
        }
    },

    computed: {
        buttonText: function () {
            return userProfile
                ? '登录 / 注册'
                : userProfile.firstName + userProfile.lastName
            // TODO try to get account name from the server, if failed, show 'login/register'
        }
    },

    init: function () {
        getUserProfile().then((jsonData) => (userProfile = jsonData))
    }
}
</script>

<style scoped></style>
