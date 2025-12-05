import { reactive } from 'vue'

const STORAGE_KEY = 'nird-progress'

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    return JSON.parse(saved)
  }
  return {
    unlockedPages: ['presentation'], // Seule la page de présentation est débloquée au départ
    completed: []
  }
}

export const progress = reactive(loadProgress())

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function unlockPage(pageId) {
  console.log('🔓 unlockPage appelé:', pageId)
  console.log('📋 Pages débloquées avant:', [...progress.unlockedPages])
  if (!progress.unlockedPages.includes(pageId)) {
    progress.unlockedPages.push(pageId)
    saveProgress()
    console.log('✅ Page débloquée:', pageId)
    console.log('📋 Pages débloquées après:', [...progress.unlockedPages])
  } else {
    console.log('ℹ️ Page déjà débloquée:', pageId)
  }
}

export function isPageUnlocked(pageId) {
  const unlocked = progress.unlockedPages.includes(pageId)
  console.log(`🔍 isPageUnlocked('${pageId}'):`, unlocked)
  return unlocked
}

export function completePage(pageId) {
  if (!progress.completed.includes(pageId)) {
    progress.completed.push(pageId)
    saveProgress()
  }
}

export function isPageCompleted(pageId) {
  return progress.completed.includes(pageId)
}

/**
 * Naviguer vers une page en la débloquant et en complétant la page actuelle
 */
export function navigateToPage(currentPageId, targetPageId, router) {
  console.log(`🧭 Navigation: ${currentPageId} → ${targetPageId}`)
  
  // Compléter la page actuelle
  if (currentPageId) {
    completePage(currentPageId)
  }
  
  // Débloquer la page cible
  unlockPage(targetPageId)
  
  // Naviguer
  if (targetPageId === 'presentation') {
    router.push('/')
  } else {
    router.push(`/page/${targetPageId}`)
  }
}

