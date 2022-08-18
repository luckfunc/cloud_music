// import './pluings/element'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
// import axios from "axios";
import service from './service';
import router from "./router/index";
import echarts from 'echarts';
Vue.use(ElementUI);
// Vue.prototype.axios = axios;//挂载到原型上,可以在全局使用
Vue.prototype.service = service; //挂载到原型上,可以在全局使用
Vue.prototype.$echarts = echarts  //挂载到原型上,可以在全局使用
Vue.config.productionTip = false

//路由导航守卫
router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('username')) {
        if (to.path != '/login') {
            next('/login');
        } else next();
    }
    next();
})

/*new Vue({
    render: h => h(App),
    route
}).$mount('#app')*/
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})
/*import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
*/