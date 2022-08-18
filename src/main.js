import Vue from 'vue'
import App from './App.vue'
//用相对路径不好 原因 改变文件路径后也需要对应设置
//解决：绝对路径@代表src的绝对路径
import '@/mobile/flexible' //自动适应宽度改变html对应的font-size
import '@/styles/reset.css' //初始化默认样式表
import router from "@/router";//导入路由对象
//全局注册vant组件按需引入
// import {NavBar} from 'vant';
// Vue.use(NavBar);
import '@/vants/index'
import moment from 'moment'
Vue.prototype.moment  =  moment;
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')