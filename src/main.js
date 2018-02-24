// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import filters from './utils/filters'
import Vant from 'vant';
import 'lib-flexible'
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);




import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import FastClick from 'fastclick'
FastClick.attach(document.body)

import {post,fetch} from './utils/axios'
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
