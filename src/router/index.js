
import Vue from "vue";
import Router from 'vue-router'
// import Home from  '../components/Home'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name:'首页',
        redirect: '/login',
        hidden: true,
        // component:Home
        component: () => import('@/components/Login') //路由懒加载
        // component: resolve => require(['@/components/Home'], resolve)
    },
        {
            path: '/login',
            name: 'Login',
            hidden: true,
            // component:Home
            component: () => import('@/components/Login') //路由懒加载
            // component: resolve => require(['@/components/Home'], resolve)
        },
        {
            path: '*',
            name: 'NotFound',
            hidden: true,
            // component:Home
            component: () => import('@/components/NotFound') //路由懒加载
            // component: resolve => require(['@/components/Home'], resolve)
        },
        /*   {
             path: '/home',
             // component: Home
             // component: () => import('@/components/Home')
             component: resolve => require(['@/components/Home'], resolve),
           },*/
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'fa  fa-graduation-cap',
            redirect: '/home/student',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () => import('@/components/students/StudentList')
                },
                {
                    path: 'info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoList')
                },
                {
                    path: 'infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoManage')
                },
                {
                    path: 'work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () => import('@/components/students/WorkList')
                },
                {
                    path: 'works',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: () => import('@/components/students/WorkManage')
                },

            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/DateView')
                },
                {
                    path: 'mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/MapView')
                },
                {
                    path: 'travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/TravelMap')
                },
                {
                    path: 'scope',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/ScopeMap')
                },

            ]
        },
        {
            path: '/home',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'user',
                    name: '权限管理',
                    iconClass: 'fa fa-user',
                    component: () => import('@/components/users/Users')
                }
            ]

        }
    ]
})