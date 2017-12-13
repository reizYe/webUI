import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'
Vue.use(Router)

export default new Router({
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  routes: []
})
