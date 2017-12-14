const login = r => require.ensure([], () => r(require('@/components/login')), 'login') // 登录页
const main = r => require.ensure([], () => r(require('@/template/main')), 'main') // 主体页面结构
const index = r => require.ensure([], () => r(require('@/template/page/index')), 'index') // 首页

const error404 = r => require.ensure([], () => r(require('@/template/page/common/404')), 'error404') // 404
const error500 = r => require.ensure([], () => r(require('@/template/page/common/500')), 'error500') // 500
const error502 = r => require.ensure([], () => r(require('@/template/page/common/502')), 'error502') // 502
/* 一级主要路由 */
const mainRouter = [
  {path: '/', redirect: '/login'},
  {path: '/login', name: 'login', component: login},
  {path: '/main', name: 'main', component: main, redirect: '/index', children: [{path: '/index', name: 'index', component: index}]}
]
/* 异常路由 */
const exceptionRouter = [
  {path: '/404', name: '404', component: error404},
  {path: '/500', name: '500', component: error500},
  {path: '/502', name: '502', component: error502},
  {path: '*', name: 'error', redirect: '/404'}
]

export {
  mainRouter,
  exceptionRouter
}
