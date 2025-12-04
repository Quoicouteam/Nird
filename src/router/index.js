import { createRouter, createWebHistory } from 'vue-router'
import PresentationNird from '../views/PresentationNird.vue'
import PlaceholderPage from '../views/PlaceholderPage.vue'
import LicensesProblem from '../views/LicensesProblem.vue'

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
  },
  {
    path: '/page/licences',
    name: 'licences',
    component: LicensesProblem,
    meta: {
      title: 'Les Licences Payantes',
      parent: 'presentation'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

