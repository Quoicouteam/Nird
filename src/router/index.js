import { createRouter, createWebHistory } from 'vue-router'
import Windows from '../components/TreeViews/Windows/Windows.vue'
import WindowsPayant from '../components/TreeViews/Licenses/Windows/WindowsPayant.vue'
import PresentationNird from '../components/TreeViews/PresentationNird.vue'
import LicensesProblem from '../components/TreeViews/Licenses/LicensesProblem.vue'
import LogicielsAlternatifs from '../components/TreeViews/Licenses/LogicielsAlternatifs/LogicielsAlternatifs.vue'
import DistroDebutants from '../components/TreeViews/Linux/DistroDebutants.vue'
import DistroGPU from '../components/TreeViews/Linux/DistroGPU.vue'
import RGPDPage from '../components/TreeViews/RGPD/RGPD.vue'
import StockageHorsUE from '../components/TreeViews/RGPD/StockageHorsUE/StockageHorsUE.vue'
import OpenSource from '../components/TreeViews/RGPD/StockageHorsUE/OpenSource/OpenSource.vue'
import SobrieteEtEcologie from '../components/TreeViews/SobrieteEcologie/SobriétéEtEcologie.vue'
import AccessDenied from '../components/TreeViews/AccessDenied.vue'
import { isPageUnlocked } from './progress.js'

const routes = [
  {
    path: '/',
    name: 'presentation',
    component: PresentationNird
  },
  {
    path: '/access-denied',
    name: 'access-denied',
    component: AccessDenied
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
  },
  {
    path: '/page/windows',
    name: 'windows',
    component: Windows,
    meta: {
      title: 'Windows',
      parent: 'presentation'
    }
  },
  {
    path: '/page/windows-payant',
    name: 'windows-payant',
    component: WindowsPayant,
    meta: {
      title: 'Windows Payant',
      parent: 'licences'
    }
  },
  {
    path: '/page/licences',
    name: 'licences',
    component: LicensesProblem,
    meta: {
      title: 'Licences Coûteuses',
      parent: 'presentation'
    }
  },
  {
    path: '/page/logiciels-alternatifs',
    name: 'logiciels-alternatifs',
    component: LogicielsAlternatifs,
    meta: {
      title: 'Logiciels Alternatifs',
      parent: 'licences'
    }
  }
  ,
  {
    path: '/page/distro-debutants',
    name: 'distro-debutants',
    component: DistroDebutants,
    meta: {
      title: 'Distro Débutants',
      parent: ['licences', 'windows']
    }
  },
  {
    path: '/page/distro-gpu',
    name: 'distro-gpu',
    component: DistroGPU,
    meta: {
      title: 'Distro Gaming/GPU',
      parent: ['licences', 'windows']
    }
  }
  ,
  {
    path: '/page/sobriete',
    name: 'sobriete',
    component: SobrieteEtEcologie,
    meta: {
      title: 'Sobriété & Écologie',
      parent: 'presentation'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de navigation : empêche l'accès aux pages si le parent n'est pas débloqué
router.beforeEach((to, from, next) => {
  console.log('🔍 [v2] Guard navigation:', { 
    to: to.name, 
    from: from.name,
    parent: to.meta?.parent,
    fullRoute: to
  })
  
  // Pages toujours accessibles
  if (to.name === 'presentation' || to.path === '/' || to.name === 'access-denied') {
    console.log('✅ Page toujours accessible:', to.name)
    return next()
  }
  
  // Vérifier UNIQUEMENT si la page a un parent requis qui est débloqué
  // La page elle-même sera débloquée par usePageUnlock() à l'arrivée
  if (to.meta?.parent) {
    // Support des parents multiples (array) et single parent (string)
    const parents = Array.isArray(to.meta.parent) ? to.meta.parent : [to.meta.parent]
    const parentUnlocked = parents.some(parentId => isPageUnlocked(parentId))
    
    console.log('🔐 Vérification parent:', { 
      parent: to.meta.parent, 
      unlocked: parentUnlocked,
      allUnlocked: JSON.parse(localStorage.getItem('nird-progress') || '{}').unlockedPages
    })
    
    if (!parentUnlocked) {
      // Rediriger vers la page d'accès refusé si aucun parent n'est débloqué
      console.warn(`⚠️ Accès refusé à ${to.name} : aucun parent parmi ${parents.join(', ')} n'est débloqué`)
      return next({ name: 'access-denied' })
    }
  }
  
  // Si le parent est débloqué (ou pas de parent), on laisse passer
  console.log('✅ Accès autorisé à', to.name)
  next()
})

export default router

