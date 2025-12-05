import { createRouter, createWebHistory } from 'vue-router'
import PresentationNird from '../views/PresentationNird.vue'
import PlaceholderPage from '../views/PlaceholderPage.vue'
import LicensesProblem from '../views/LicensesProblem.vue'
import Office365ToLibreOffice from '../views/Office365ToLibreOffice.vue'
import PhotoshopToGimp from '../views/PhotoshopToGimp.vue'
import ChatGPTToHuggingChat from '../views/ChatGPTToHuggingChat.vue'
import PremierToKdenlive from '../views/PremierToKdenlive.vue'
import RGPDPage from '../views/rgpd.vue'
import StockageHorsUE from '../views/StockageHorsUE.vue'
import OpenSource from '../views/OpenSource.vue'
import SobrieteEtEcologie from '../views/SobriétéEtEcologie.vue'

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
  },
  {
    path: '/page/office365-libreoffice',
    name: 'office365-libreoffice',
    component: Office365ToLibreOffice,
    meta: {
      title: 'Microsoft 365 → LibreOffice',
      parent: 'licences'
    }
  },
  {
    path: '/page/photoshop-gimp',
    name: 'photoshop-gimp',
    component: PhotoshopToGimp,
    meta: {
      title: 'Photoshop → GIMP',
      parent: 'licences'
    }
  },
  {
    path: '/page/chatgpt-huggingchat',
    name: 'chatgpt-huggingchat',
    component: ChatGPTToHuggingChat,
    meta: {
      title: 'ChatGPT → HuggingChat',
      parent: 'licences'
    }
  },
  {
    path: '/page/premier-kdenlive',
    name: 'premier-kdenlive',
    component: PremierToKdenlive,
    meta: {
      title: 'Premiere Pro → Kdenlive',
      parent: 'licences'
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
  ,
    {
        path: '/page/licences',
        name: 'licences',
        component: LicensesProblem,
        meta: {
            title: 'Licenses Problem',
            parent: 'presentation'
        }
    }
  ,
  {
    path: '/page/sobriete',
    name: 'sobriete',
    component: SobrieteEtEcologie,
    meta: {
      title: 'Sobriété & Écologie',
      parent: 'open-source'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

