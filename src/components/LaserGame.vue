<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { progress } from '../router/progress.js'
import skillTreeData from './SkillTree/SkillTreeData.json'

const router = useRouter()
const isActive = ref(false)
const timeLeft = ref(60)
let timerInterval = null

const stopGame = () => {
  isActive.value = false
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  timeLeft.value = 60
}

const startGame = () => {
  isActive.value = true
  teleportToRandomPage()
  timeLeft.value = 60
  
  if (timerInterval) clearInterval(timerInterval)
  
  timerInterval = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopGame()
    }
  }, 1000)
}

const toggleGame = () => {
  if (isActive.value) {
    stopGame()
  } else {
    startGame()
  }
}

const teleportToRandomPage = () => {
  // 1. Récupérer tous les IDs de pages débloquées
  const unlockedIds = progress.unlockedPages
  
  // 2. Construire une map ID -> Route pour faciliter la recherche
  const idToRoute = {}
  
  // Ajouter la racine
  if (skillTreeData.root) {
    idToRoute[skillTreeData.root.id] = skillTreeData.root.route
  }
  
  // Ajouter les enfants
  if (skillTreeData.children) {
    skillTreeData.children.forEach(child => {
      idToRoute[child.id] = child.route
    })
  }
  
  // 3. Filtrer les IDs débloqués pour ne garder que ceux qui ont une route valide
  const validDestinations = unlockedIds.filter(id => idToRoute[id])
  
  if (validDestinations.length > 0) {
    // 4. Choisir une destination au hasard
    const randomIndex = Math.floor(Math.random() * validDestinations.length)
    const randomId = validDestinations[randomIndex]
    const targetRoute = idToRoute[randomId]
    
    console.log(`🎲 Laser Game Teleport: ${randomId} -> ${targetRoute}`)
    
    // 5. Rediriger
    router.push(targetRoute)
  }
}

const handleGlobalClick = (event) => {
  if (!isActive.value) return

  // Ne pas tirer sur le bouton du jeu lui-même
  if (event.target.closest('.laser-game-toggle')) return

  const target = event.target
  let finalTarget = null

  // 1. Priorité aux blocs conteneurs définis (Les "Blocks" demandés)
  // On utilise closest() pour cibler le conteneur parent si on clique sur un enfant
  const blockSelector = [
    '.feature',       // Blocs Découvrez, Apprenez, Agissez
    '.step',          // Blocs 1, 2, 3
    '.hero-icon',     // L'arbre principal
    '.leaf',          // Les feuilles décoratives
    '.card',          // Les cartes d'info
    '.alert-box',     // Les boîtes d'alerte
    '.choice-button'  // Explicite pour les choix
  ].join(', ')

  const block = target.closest(blockSelector)
  
  if (block) {
    finalTarget = block
  } else {
    // 2. Sinon, éléments de contenu individuels (Textes, Images...)
    const allowedTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'SPAN', 'LI', 'INPUT', 'LABEL', 'STRONG', 'EM', 'I', 'B', 'A']
    if (allowedTags.includes(target.tagName)) {
      finalTarget = target
    }
  }

  // Si aucune cible valide trouvée, on arrête
  if (!finalTarget) return

  // Si déjà touché, on ne fait rien
  if (finalTarget.classList.contains('laser-hit')) return

  // Empêcher l'action par défaut (clic sur lien, bouton, etc.)
  event.preventDefault()
  event.stopPropagation()

  // Ajouter l'effet
  finalTarget.classList.add('laser-hit')

  // Retirer l'effet après 2 secondes
  setTimeout(() => {
    finalTarget.classList.remove('laser-hit')
  }, 2000)
}

watch(isActive, (newValue) => {
  if (newValue) {
    document.body.classList.add('laser-mode')
    // Utiliser capture: true pour intercepter l'événement avant les autres
    window.addEventListener('click', handleGlobalClick, { capture: true })
  } else {
    document.body.classList.remove('laser-mode')
    window.removeEventListener('click', handleGlobalClick, { capture: true })
  }
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
  document.body.classList.remove('laser-mode')
  window.removeEventListener('click', handleGlobalClick, { capture: true })
})
</script>

<template>
  <div class="laser-game-container">
    <div v-if="isActive" class="timer-display">
      {{ timeLeft }}s
    </div>
    <button 
      class="laser-game-toggle" 
      @click="toggleGame"
      :class="{ 'is-active': isActive }"
      title="Activer/Désactiver le Laser Game"
    >
      <span v-if="!isActive" class="btn-text">Laser Game</span>
      <span v-else>❌</span>
    </button>
  </div>
</template>

<style scoped>
.laser-game-container {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.timer-display {
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
  font-family: monospace;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes pop-in {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.laser-game-toggle {
  /* position: fixed;  <-- On retire le position fixed car le parent gère le positionnement maintenant */
  /* right: 20px; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  /* z-index: 9999; */
  width: 45px;
  height: auto;
  min-height: 140px;
  padding: 20px 0;
  border-radius: 30px;
  
  /* Design & Couleurs : Gradient "Cyber/Space" */
  background: linear-gradient(180deg, #2b5876 0%, #4e4376 100%);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* Texte Vertical */
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.btn-text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 5px rgba(255,255,255,0.5);
}

.laser-game-toggle:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(78, 67, 118, 0.6);
  border-color: rgba(255,255,255,0.8);
}

.laser-game-toggle.is-active {
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  border-color: white;
  width: 50px;
  height: 50px;
  min-height: 50px;
  padding: 0;
  border-radius: 50%;
  writing-mode: horizontal-tb;
}
</style>

<style>
/* Styles globaux pour le mode jeu */
body.laser-mode,
body.laser-mode * {
  /* On force le curseur sur tout le body et ses enfants */
  /* Ajustement du point d'ancrage au centre (64 64 pour une image 128x128) */
  cursor: url('../assets/img/blaster.png') 64 64, auto !important;
}

.laser-hit {
  opacity: 0.1 !important;
  pointer-events: none !important;
  transition: opacity 0.2s ease-out;
  position: relative;
}

/* Petit effet de flash au moment de l'impact (optionnel mais sympa) */
.laser-hit::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  pointer-events: none;
  animation: laser-flash 0.2s ease-out forwards;
  z-index: 1000;
}

@keyframes laser-flash {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
