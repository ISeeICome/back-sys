import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/Home'
import stuInfoMg from '@/views/StuInfoMg'
import AddStuInfo from '@/views/AddStuInfo'
import showBiogenicDis from '@/views/ShowBiogenicDis'
import showeEploymentDis from '@/views/ShoweEploymentDis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/home/stuInfoMg',
      children: [
        {
          path: 'stuInfoMg',
          name: 'stuInfoMg',
          component: stuInfoMg
        },
        {
          path: 'AddStuInfo',
          name: 'AddStuInfo',
          component: AddStuInfo
        },
        {
          path: 'showBiogenicDis',
          name: 'showBiogenicDis',
          component: showBiogenicDis
        },
        {
          path: 'showeEploymentDis',
          name: 'showeEploymentDis',
          component: showeEploymentDis
        }
      ]
    }
  ]
})
