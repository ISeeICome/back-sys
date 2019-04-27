// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/basic.css'
import '@/assets/css/font-awesome.min.css'
import {Collapse, CollapseItem, Button, Input, Select, Pagination, Option, DatePicker, Submenu, MenuItem} from 'element-ui'
import axios from 'axios'

// import Blob from './excel/Blob'
// import Export2Excel from './excel/Export2Excel.js'

Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Pagination)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
