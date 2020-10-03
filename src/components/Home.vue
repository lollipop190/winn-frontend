<!-- home page -->
<template>
    <div>
        <header>
            {{ accountButton }}
        </header>
        <main>
            {{ fundList }}
        </main>
        <footer>
            {{ infoBar }}
        </footer>
    </div>
</template>

<script>
import AccountButton from './AccountButton'
import FundList from './FundList'
import InfoBar from './InfoBar'

export default {
    name: 'Home',
    data: function () {
        return {
            accountButton: new AccountButton(),
            fundList: new FundList(),
            infoBar: new InfoBar()
        }
    }
}
</script>

<style scoped>
</style>
