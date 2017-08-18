import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _08dd5ac8 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _b3e2e8f6 = () => import('../pages/recenzje/index.vue' /* webpackChunkName: "pages/recenzje" */).then(m => m.default || m)
const _69127771 = () => import('../pages/post/_id.vue' /* webpackChunkName: "pages/post-id" */).then(m => m.default || m)
const _0063ab2d = () => import('../pages/recenzje/_id.vue' /* webpackChunkName: "pages/recenzje-id" */).then(m => m.default || m)



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
			component: _08dd5ac8,
			name: "index"
		},
		{
			path: "/recenzje",
			component: _b3e2e8f6,
			name: "recenzje"
		},
		{
			path: "/post/:id?",
			component: _69127771,
			name: "post-id"
		},
		{
			path: "/recenzje/:id",
			component: _0063ab2d,
			name: "recenzje-id"
		}
    ],
    fallback: false
  })
}
