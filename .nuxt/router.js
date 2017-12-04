import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _9d7fdf6a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _aa4e7a94 = () => import('../pages/recenzje/index.vue' /* webpackChunkName: "pages/recenzje/index" */).then(m => m.default || m)
const _02de2762 = () => import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */).then(m => m.default || m)
const _6c03fa9e = () => import('../pages/recenzje/_id.vue' /* webpackChunkName: "pages/recenzje/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
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
			component: _9d7fdf6a,
			name: "index"
		},
		{
			path: "/recenzje",
			component: _aa4e7a94,
			name: "recenzje"
		},
		{
			path: "/post/:id?",
			component: _02de2762,
			name: "post-id"
		},
		{
			path: "/recenzje/:id",
			component: _6c03fa9e,
			name: "recenzje-id"
		}
    ],
    fallback: false
  })
}
