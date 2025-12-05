import { reactive } from 'vue'
import treeData from '../components/SkillTree/SkillTreeData.json'

const STORAGE_KEY = 'nird-progress'

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY)

  // Trouver toutes les pousses (quêtes annexes) à débloquer automatiquement
  const sprouts = treeData.children
    .filter(child => child.special === 'sprout')
    .map(child => child.id)

  const defaultUnlocked = ['presentation', ...sprouts]

  if (saved) {
    const progress = JSON.parse(saved)
    // S'assurer que les pousses sont toujours débloquées même si sauvegarde existante
    sprouts.forEach(sproutId => {
      if (!progress.unlockedPages.includes(sproutId)) {
        progress.unlockedPages.push(sproutId)
      }
    })
    return progress
  }

  return {
    unlockedPages: defaultUnlocked, // Présentation + toutes les pousses
    completed: [],
    // Lettres collectées pour l'easter-egg (ex: SNAKE)
    lettersEarned: []
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

// --- Easter-egg letters support ---------------------------------
// Ajouter le champ lettersEarned dans l'objet progress et helpers
export function grantLetter(letter) {
  if (!letter) return
  const ch = String(letter).toUpperCase()
  if (!progress.lettersEarned) {
    progress.lettersEarned = []
  }
  if (!progress.lettersEarned.includes(ch)) {
    progress.lettersEarned.push(ch)
    saveProgress()
  }
}

export function hasAllLetters(targetWord) {
  if (!targetWord) return false
  const uniq = Array.from(new Set(String(targetWord).toUpperCase().split('')))
  if (!progress.lettersEarned) return false
  return uniq.every(ch => progress.lettersEarned.includes(ch))
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
  
  // Si la cible est '/' ou 'presentation', aller à la page d'accueil
  if (targetPageId === '/' || targetPageId === 'presentation') {
    router.push('/')
    return
  }
  
  // Débloquer la page cible
  unlockPage(targetPageId)
  
  // Naviguer
  router.push(`/page/${targetPageId}`)
}

