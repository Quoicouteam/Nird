// Script pour réinitialiser le localStorage avec la bonne structure
console.log('🔧 Initialisation de la progression NIRD...')

const defaultProgress = {
  unlockedPages: ['presentation'],
  completed: []
}

localStorage.setItem('nird-progress', JSON.stringify(defaultProgress))

console.log('✅ Progression initialisée:', defaultProgress)
console.log('📍 Rechargez la page pour appliquer les changements')
