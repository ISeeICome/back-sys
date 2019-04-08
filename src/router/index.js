import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/Home'
import login from '@/views/login'
import stuInfoMg from '@/views/StuInfoMg'
import AddStuInfo from '@/views/AddStuInfo'
import showBiogenicDis from '@/views/ShowBiogenicDis'
import showeEploymentDis from '@/views/ShoweEploymentDis'
import majorInfo from '@/views/majorInfo'
import classInfo from '@/views/classInfo'
import recruit from '@/views/recruit'
import help from '@/views/help'

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
      path: '/login',
      name: 'login',
      component: login
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
        },
        {
          path: 'majorInfo',
          name: 'majorInfo',
          component: majorInfo
        },
        {
          path: 'classInfo',
          name: 'classInfo',
          component: classInfo
        },
        {
          path: 'recruit',
          name: 'recruit',
          component: recruit
        },
        {
          path: 'help',
          name: 'help',
          component: help
        }
      ]
    }
  ]
})
