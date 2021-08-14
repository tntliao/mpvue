import Vue from 'vue';
import App from './App.vue';
import store from './store/store'
//设置vue的提示功能关闭
Vue.config.productionTip = false;

//声明当前组件的类型
App.type = 'app' //应用

//将store对象放置Vue的原型上，每个实例都能使用
Vue.prototype.$store = store;

//生成应用的实例
const app = new Vue(App);

//挂载整个应用
app.$mount();