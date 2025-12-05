import { createRouter, createWebHistory } from 'vue-router'
import PresentationNird from '../views/PresentationNird.vue'
import PlaceholderPage from '../views/PlaceholderPage.vue'
import LicensesProblem from '../views/LicensesProblem.vue'
import RGPDPage from '../views/rgpd.vue'
import StockageHorsUE from '../views/StockageHorsUE.vue'
import OpenSource from '../views/OpenSource.vue'

const routes = [
  {
    path: '/',
    name: 'presentation',
    component: PresentationNird
  },
  {
    path: '/page/confidentialite',
    name: 'confidentialite',
    component: RGPDPage,
    meta: {
      title: 'Confidentialité (RGPD)',
      parent: 'presentation'
    }
  }
  ,
  {
    path: '/page/stockage-hors-ue',
    name: 'stockage-hors-ue',
    component: StockageHorsUE,
    meta: {
      title: 'Stockage des données hors UE',
      parent: 'confidentialite'
    }
  }
  ,
  {
    path: '/page/open-source',
    name: 'open-source',
    component: OpenSource,
    meta: {
      title: 'Open Source',
      parent: 'stockage-hors-ue'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

