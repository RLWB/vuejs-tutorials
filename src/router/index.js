import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '@/components/Home'
import LogTime from '@/components/LogTime'
import TimeEntries from '@/components/TimeEntries.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/home',
      name: 'Home',
      component: Home
      },{
          path : '/time-entries',
          name : 'TimeEntries',
          component : TimeEntries
        //   children : [{
        //       path : 'log-time',
        //       // 懒加载
        //       component : resolve => require(['./components/LogTime.vue'],resolve)
        // }]
      }
  ]
})
