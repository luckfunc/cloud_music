"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("@/mobile/flexible");

require("@/styles/reset.css");

var _router = _interopRequireDefault(require("@/router"));

require("@/vants/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//用相对路径不好 原因 改变文件路径后也需要对应设置
//解决：绝对路径@代表src的绝对路径
//自动适应宽度改变html对应的font-size
//初始化默认样式表
//导入路由对象
//全局注册vant组件按需引入
// import {NavBar} from 'vant';
// Vue.use(NavBar);
_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"]
}).$mount('#app');