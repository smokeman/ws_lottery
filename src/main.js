// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource';
// import VueScroller from 'vue-scroller';
// import VueLazyLoad from 'vue-lazyload';

// import './lib/css/animate.css';

import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

// Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(VueResource);
// Vue.use(VueScroller);
// Vue.use(VueLazyLoad);
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
