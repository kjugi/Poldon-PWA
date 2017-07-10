'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _08dd5ac8 = () => import('/Users/mac/www/poldonPWA/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _69127771 = () => import('/Users/mac/www/poldonPWA/pages/post/_id.vue' /* webpackChunkName: "pages/post-id" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _08dd5ac8,
			name: "index"
		},
		{
			path: "/post/:id?",
			component: _69127771,
			name: "post-id"
		}
    ]
  })
}
