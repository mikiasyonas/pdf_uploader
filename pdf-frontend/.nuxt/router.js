import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4963462 = () => interopDefault(import('../pages/DashBoard.vue' /* webpackChunkName: "pages/DashBoard" */))
const _39662fd6 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _6c5e30d2 = () => interopDefault(import('../pages/UploadFile.vue' /* webpackChunkName: "pages/UploadFile" */))
const _647d2266 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/DashBoard",
    component: _d4963462,
    name: "DashBoard"
  }, {
    path: "/inspire",
    component: _39662fd6,
    name: "inspire"
  }, {
    path: "/UploadFile",
    component: _6c5e30d2,
    name: "UploadFile"
  }, {
    path: "/",
    component: _647d2266,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
