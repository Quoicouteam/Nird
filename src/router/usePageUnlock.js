/**
 * usePageUnlock - Composable pour gérer le déblocage automatique des pages
 * Responsabilité : Débloquer une page quand on y arrive
 */

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { unlockPage } from './progress.js'
import treeData from '../components/SkillTree/SkillTreeData.json'

/**
 * Débloquer une page immédiatement (utilisé avant navigation)
 */
export function unlockPageBeforeNavigation(pageId) {
  unlockPage(pageId)
}

export function usePageUnlock() {
  const route = useRoute()

  onMounted(() => {
    // Débloquer la page actuelle
    const currentPageId = getCurrentPageId(route)
    if (currentPageId) {
      unlockPage(currentPageId)
    }
  })

  return {
    unlockPage
  }
}

/**
 * Détermine l'ID de la page actuelle à partir de la route
 */
function getCurrentPageId(route) {
  // Page racine
  if (route.path === '/' || route.path === '') {
    return treeData.root.id
  }
  
  // Pages enfants
  const match = route.path.match(/\/page\/(.+)/)
  if (match) {
    return match[1]
  }
  
  return null
}
