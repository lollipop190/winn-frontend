// 配置路由相关信息

import Vue from 'vue'
import Router from 'vue-router'
import Home from  '../components/Home'
import Login from '../components/Login'
import Details from '../components/Details'
import FundList from '../components/FundList'
import Account from '../components/AccountComps/Account'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/details',
            component: Details
        },
        {
            path: '/account',
            component: Account
        },
        {
            path: '/fundlist',
            component: FundList
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
