import Vue from 'vue'
import Router from 'vue-router'

//直接加载
import Login from '@/components/Login'

//延迟加载
//const HelloWorld = () => import('@/components/HelloWorld');

Router.prototype.goBack = function () {
  window.history.go(-1);
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
