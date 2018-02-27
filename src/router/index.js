import Vue from 'vue'
import Router from 'vue-router'

//直接加载
import Login from '@/components/Login'
import Register from '@/components/Register'
import FindPassword from '@/components/FindPassword'
import ResetPassword from '@/components/ResetPassword'
import Home from '@/components/Home'
import FlowGiftRecord from '@/components/FlowGiftRecord'
import Report from '@/components/Report'
import MyFans from '@/components/MyFans'
import SendMsg from '@/components/SendMsg'

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
      component: Login,
      children: [
        {
          path: 'register',
          component: Register
        },
        {
          path: 'findPassword',
          component: FindPassword,
          children:[
            {
              path:'resetPassword',
              component:ResetPassword
            }
          ]
        },
        {
          "path":'home',
           component: Home,
           children:[
            {
              path: 'flowGiftRecord',
              component: FlowGiftRecord,
              children:[
                {
                  path: 'report',
                  component: Report,
                }
              ]
            },
             {
               path: 'myFans',
               component: MyFans,
               children:[
                 {
                   path: 'sendMsg',
                   component: SendMsg,
                 }
               ]
             }
          ]
        }
      ]

    }
  ]
})
