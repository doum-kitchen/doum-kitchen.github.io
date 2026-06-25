import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import WeeklyMealsPage from './pages/WeeklyMealsPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/weekly-meals', component: WeeklyMealsPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
