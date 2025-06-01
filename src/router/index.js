import { createRouter, createWebHistory } from 'vue-router'

// Enhanced lazy loading with better chunk names and error handling
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue').catch(() => import('../views/Home.vue'))
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "experience" */ '../views/Experience.vue').catch(() => import('../views/Experience.vue'))
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue').catch(() => import('../views/About.vue'))
  },
  {
    path: '/interests',
    name: 'Interests',
    component: () => import(/* webpackChunkName: "interests" */ '../views/Interests.vue').catch(() => import('../views/Interests.vue'))
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Smooth scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Performance optimizations
router.beforeResolve(async (to, from, next) => {
  // Preload critical routes on initial navigation
  if (from.name === null) {
    // Preload Experience and About pages after initial load
    setTimeout(() => {
      import('../views/Experience.vue').catch(() => {})
      import('../views/About.vue').catch(() => {})
    }, 1000)
  }
  
  next()
})

// Global navigation guards for performance tracking
let navigationStart = 0
router.beforeEach((to, from, next) => {
  navigationStart = performance.now()
  next()
})

router.afterEach((to) => {
  const navigationTime = performance.now() - navigationStart
  if (process.env.NODE_ENV === 'development') {
    console.log(`Navigation to ${to.name} took ${navigationTime.toFixed(2)}ms`)
  }
})

export default router 