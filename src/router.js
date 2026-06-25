import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ServiceDetailPage from './pages/ServiceDetailPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/services/:slug', component: ServiceDetailPage },
    // Keep the old weekly-meals link working
    { path: '/weekly-meals', redirect: '/services/weekly-meals' },
    // Anything else returns to the home page
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
