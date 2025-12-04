import { reactive } from 'vue'

const STORAGE_KEY = 'nird-progress'

// Charger la progression depuis le localStorage
function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    return JSON.parse(saved)
  }
  // Par défaut, seule la page de présentation est débloquée
  return {
    visited: ['presentation'],
    completed: []
  }
}

// État réactif de la progression
export const progress = reactive(loadProgress())

// Sauvegarder la progression
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

// Marquer une page comme visitée
export function visitPage(pageId) {
  if (!progress.visited.includes(pageId)) {
    progress.visited.push(pageId)
    saveProgress()
  }
}

// Marquer une page comme complétée (lue entièrement)
export function completePage(pageId) {
  if (!progress.completed.includes(pageId)) {
    progress.completed.push(pageId)
    saveProgress()
  }
}

// Vérifier si une page est accessible
export function isPageAccessible(pageId) {
  return progress.visited.includes(pageId)
}

// Vérifier si une page est complétée
export function isPageCompleted(pageId) {
  return progress.completed.includes(pageId)
}

// Débloquer les enfants d'une page
export function unlockChildren(childrenIds) {
  childrenIds.forEach(id => {
    if (!progress.visited.includes(id)) {
      progress.visited.push(id)
    }
  })
  saveProgress()
}

