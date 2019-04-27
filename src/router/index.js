import Vue from 'vue'
import Router from 'vue-router'

import admin from '@/views/admin/admin'
import stu from '@/views/stu/stu'
import backLogin from '@/views/backLogin'
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
import updateClass from '@/views/admin/updateClass'
import releaseRecruit from '@/views/admin/releaseRecruit'
import releaseHelp from '@/views/admin/releaseHelp'
import releaseExcellentStu from '@/views/admin/releaseExcellentStu'
import excellentStuManage from '@/views/admin/excellentStuManage'
import recruitManage from '@/views/admin/recruitManage'
import helpManage from '@/views/admin/helpManage'
import updateAdminPwd from '@/views/admin/updateAdminPwd'
import updateAdmin from '@/views/admin/updateAdmin'
import updateMajor from '@/views/admin/updateMajor'
import updateStu from '@/views/admin/updateStu'
import updateExcellentStu from '@/views/admin/updateExcellentstu'
import updateHelp from '@/views/admin/updateHelp'
import updateRecruit from '@/views/admin/updateRecruit'
import examine from '@/views/admin/examine'
import schoolNoticeManage from '@/views/admin/schoolNoticeManage'
import addSchoolNotice from '@/views/admin/addSchoolNotice'
import updateSchoolNotice from '@/views/admin/updateSchoolNotice'

import personInfo from '@/views/stu/personInfo'
import excellentStu from '@/views/stu/excellentStu'
import stuRecruit from '@/views/stu/stuRecruit'
import stuHelp from '@/views/stu/stuHelp'
import stuSys from '@/views/stu/stuSys'
import updatePwd from '@/views/stu/updatePwd'
import stuExamine from '@/views/stu/examine'

import index from '@/views/official/index'
import activeDetail from '@/views/official/activeDetail'
import excellentStuO from '@/views/official/excellentStu'
import stuHelpO from '@/views/official/stuHelp'
import stuRecruitO from '@/views/official/stuRecruit'
import schoolNoticeO from '@/views/official/schoolNotice'
import registerAndLogin from '@/views/registerAndLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/backLogin',
      name: 'backLogin',
      component: backLogin
    },
    {
      path: '/registerAndLogin',
      name: 'registerAndLogin',
      component: registerAndLogin
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
          path: 'schoolNoticeManage',
          name: 'schoolNoticeManage',
          component: schoolNoticeManage
        },
        {
          path: 'addSchoolNotice',
          name: 'addSchoolNotice',
          component: addSchoolNotice
        },
        {
          path: 'updateSchoolNotice/:ID',
          name: 'updateSchoolNotice',
          component: updateSchoolNotice
        },
        {
          path: 'excellentStuManage',
          name: 'excellentStuManage',
          component: excellentStuManage
        },
        {
          path: 'updateExcellentStu/:ID',
          name: 'updateExcellentStu',
          component: updateExcellentStu
        },
        {
          path: 'updateHelp/:ID',
          name: 'updateHelp',
          component: updateHelp
        },
        {
          path: 'updateRecruit/:ID',
          name: 'updateRecruit',
          component: updateRecruit
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
          path: 'updateMajor/:ID',
          name: 'updateMajor',
          component: updateMajor
        },
        {
          path: 'updateStu/:ID',
          name: 'updateStu',
          component: updateStu
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
          path: 'updateClass/:ID',
          name: 'updateClass',
          component: updateClass
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
        },
        {
          path: 'updateAdmin/:id',
          name: 'updateAdmin',
          component: updateAdmin
        },
        {
          path: 'examine',
          name: 'examine',
          component: examine
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
        },
        {
          path: 'stuExamine',
          name: 'stuExamine',
          component: stuExamine
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/activeDetail',
      name: 'activeDetail',
      component: activeDetail
    },
    {
      path: '/excellentStu',
      name: 'excellentStu',
      component: excellentStuO
    },
    {
      path: '/stuHelp',
      name: 'stuHelp',
      component: stuHelpO
    },
    {
      path: '/stuRecruit',
      name: 'stuRecruit',
      component: stuRecruitO
    },
    {
      path: '/schoolNotice',
      name: 'schoolNotice',
      component: schoolNoticeO
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
