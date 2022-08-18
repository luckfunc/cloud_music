// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Layout from '@/views/Layout'
import Home from '@/views/Home';
import Search from '@/views/Search';
import Play from "@/views/Play";
import Comment from '@/views/Comment'
const routes = [{
    path: '/',
    redirect: '/layout'
},
    {
        path: '/layout',
        redirect: '/layout/home', //马上重定向到二级路由上
        component: Layout,
        children: [{
            path: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: '搜索'
                }
            }
        ]
    },
    {
        path: '/play'
        , component: Play
    },
    {
        path:'/comment',
        component: Comment
    }
]

const router = new VueRouter({
    routes
})

export default router