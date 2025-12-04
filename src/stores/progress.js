import { reactive } from 'vue'

const STORAGE_KEY = 'nird-progress'

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    return JSON.parse(saved)
  }
  return {
    visited: ['presentation'],
    completed: []
  }
}

export const progress = reactive(loadProgress())

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function visitPage(pageId) {
  if (!progress.visited.includes(pageId)) {
    progress.visited.push(pageId)
    saveProgress()
  }
}

export function completePage(pageId) {
  if (!progress.completed.includes(pageId)) {
    progress.completed.push(pageId)
    saveProgress()
  }
}

export function isPageAccessible(pageId) {
  return progress.visited.includes(pageId)
}

export function isPageCompleted(pageId) {
  return progress.completed.includes(pageId)
}

export function unlockChildren(childrenIds) {
  childrenIds.forEach(id => {
    if (!progress.visited.includes(id)) {
      progress.visited.push(id)
    }
  })
  saveProgress()
}

