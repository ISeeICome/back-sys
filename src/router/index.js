import Vue from 'vue'
import Router from 'vue-router'

import admin from '@/views/admin/admin'
import stu from '@/views/stu/stu'
import login from '@/views/login'
import StuManage from '@/views/admin/StuManage'
import AddStuInfo from '@/views/admin/AddStuInfo'
import showBiogenicDis from '@/views/admin/ShowBiogenicDis'
import showeEploymentDis from '@/views/admin/ShoweEploymentDis'
import addMajor from '@/views/admin/addMajor'
import addClass from '@/views/admin/addClass'
import majorManage from '@/views/admin/majorManage'
import superAdmin from '@/views/admin/superAdmin'
import commonAdmin from '@/views/admin/commonAdmin'
import addAdmin from '@/views/admin/addAdmin'
import classManage from '@/views/admin/classManage'
import releaseRecruit from '@/views/admin/releaseRecruit'
import releaseHelp from '@/views/admin/releaseHelp'
import releaseExcellentStu from '@/views/admin/releaseExcellentStu'
import excellentStuManage from '@/views/admin/excellentStuManage'
import recruitManage from '@/views/admin/recruitManage'
import helpManage from '@/views/admin/helpManage'
import updateAdminPwd from '@/views/admin/updateAdminPwd'

import personInfo from '@/views/stu/personInfo'
import excellentStu from '@/views/stu/excellentStu'
import stuRecruit from '@/views/stu/stuRecruit'
import stuHelp from '@/views/stu/stuHelp'
import stuSys from '@/views/stu/stuSys'
import updatePwd from '@/views/stu/updatePwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect: '/admin/showBiogenicDis',
      children: [
        {
          path: 'StuManage',
          name: 'StuManage',
          component: StuManage
        },
        {
          path: 'excellentStuManage',
          name: 'excellentStuManage',
          component: excellentStuManage
        },
        {
          path: 'recruitManage',
          name: 'recruitManage',
          component: recruitManage
        },
        {
          path: 'helpManage',
          name: 'helpManage',
          component: helpManage
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
          path: 'majorManage',
          name: 'majorManage',
          component: majorManage
        },
        {
          path: 'addMajor',
          name: 'addMajor',
          component: addMajor
        },
        {
          path: 'classManage',
          name: 'classManage',
          component: classManage
        },
        {
          path: 'addClass',
          name: 'addClass',
          component: addClass
        },
        {
          path: 'releaseRecruit',
          name: 'releaseRecruit',
          component: releaseRecruit
        },
        {
          path: 'releaseHelp',
          name: 'releaseHelp',
          component: releaseHelp
        },
        {
          path: 'releaseExcellentStu',
          name: 'releaseExcellentStu',
          component: releaseExcellentStu
        },
        {
          path: 'superAdmin',
          name: 'superAdmin',
          component: superAdmin
        },
        {
          path: 'commonAdmin',
          name: 'commonAdmin',
          component: commonAdmin
        },
        {
          path: 'addAdmin',
          name: 'addAdmin',
          component: addAdmin
        },
        {
          path: 'updateAdminPwd',
          name: 'updateAdminPwd',
          component: updateAdminPwd
        }
      ]
    },
    {
      path: '/stu',
      name: 'stu',
      component: stu,
      redirect: '/stu/personInfo',
      children: [
        {
          path: 'personInfo',
          name: 'personInfo',
          component: personInfo
        },
        {
          path: 'excellentStu',
          name: 'excellentStu',
          component: excellentStu
        },
        {
          path: 'stuRecruit',
          name: 'stuRecruit',
          component: stuRecruit
        },
        {
          path: 'stuHelp',
          name: 'stuHelp',
          component: stuHelp
        },
        {
          path: 'stuSys',
          name: 'stuSys',
          component: stuSys
        },
        {
          path: 'updatePwd',
          name: 'updatePwd',
          component: updatePwd
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
