<!-- home page -->
<template>
    <div>
        <header>
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
</style>
