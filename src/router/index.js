import { createRouter, createWebHistory } from 'vue-router'
import PresentationNird from '../views/PresentationNird.vue'
import PlaceholderPage from '../views/PlaceholderPage.vue'

const routes = [
  {
    path: '/',
    name: 'presentation',
    component: PresentationNird
  },
  {
    path: '/page/confidentialite',
    name: 'confidentialite',
    component: PlaceholderPage,
    meta: {
      title: 'Confidentialité (RGPD)',
      parent: 'presentation'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

