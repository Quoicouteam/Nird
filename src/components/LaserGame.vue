<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { progress } from '../router/progress.js'
import skillTreeData from './SkillTree/SkillTreeData.json'

const router = useRouter()
const isActive = ref(false)
const showGameOver = ref(false)
const timeLeft = ref(60)
const score = ref(0)
let timerInterval = null

const stopGame = (manualStop = false) => {
  isActive.value = false
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  
  // Dans tous les cas (fin du temps ou arrêt manuel), on affiche le Game Over
  showGameOver.value = true
}

const closeGameOver = () => {
  showGameOver.value = false
  timeLeft.value = 60
}

const startGame = () => {
  showGameOver.value = false
  isActive.value = true
  teleportToRandomPage()
  timeLeft.value = 60
  score.value = 0
  
  if (timerInterval) clearInterval(timerInterval)
  
  timerInterval = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopGame(false) // Fin du temps = Game Over
    }
  }, 1000)
}

const toggleGame = () => {
  if (isActive.value) {
    stopGame(true) // Arrêt manuel = Pas de Game Over
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
  // On exclut explicitement 'audio-visualizer' car c'est une page externe/spéciale
  const validDestinations = unlockedIds.filter(id => idToRoute[id] && id !== 'audio-visualizer')
  
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

  // Ne pas tirer sur le header
  if (event.target.closest('.site-header')) {
    event.preventDefault()
    event.stopPropagation()
    return
  }

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
    '.choice-button', // Explicite pour les choix
    '.issue-card',    // Cartes problèmes (Licences)
    '.solution-card', // Cartes solutions (Licences)
    '.example-box',   // Boîtes exemples (Licences)
    '.header-icon',   // Icône header (Licences)
    '.solution-icon', // Icônes solutions (Licences)
    '.bottom-card',   // Carte bas de page (Licences)
    '.btn-next',      // Bouton suivant (Licences)
    '.action-button', // Bouton retour (Licences)
    '.btn-option',    // Options du quiz (RGPD)
    '.alternative-card', // Carte comparaison (Logiciels)
    '.soft-item',     // Item logiciel (Logiciels)
    '.soft-icon',     // Icône logiciel (Logiciels)
    '.arrow',         // Flèche comparaison (Logiciels)
    '.recap-table'    // Tableau récapitulatif (Logiciels)
  ].join(', ')

  const block = target.closest(blockSelector)
  
  if (block) {
    finalTarget = block
  } else {
    // 2. Sinon, éléments de contenu individuels (Textes, Images...)
    const allowedTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'SPAN', 'LI', 'INPUT', 'LABEL', 'STRONG', 'EM', 'I', 'B', 'A', 'TD', 'TH', 'TR']
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

  // --- CALCUL DU SCORE ---
  let points = 0
  
  // Barème de base selon le type d'élément
  if (finalTarget.matches('.feature, .step, .card, .alert-box, .hero-icon, .issue-card, .solution-card, .example-box, .header-icon, .solution-icon, .bottom-card, .alternative-card, .soft-item, .recap-table')) {
    points = 50 // Gros blocs
  } else if (finalTarget.matches('h1, h2, h3, h4, h5, h6, button, .choice-button, .btn-next, .action-button, .btn-option')) {
    points = 100 // Titres et boutons
  } else if (finalTarget.matches('p, a, img, span, li, input, label, strong, em, i, b, td, th, tr')) {
    points = 200 // Petits éléments (inclut cellules de tableau)
  } else if (finalTarget.matches('.leaf')) {
    // Bonus aléatoire pour les feuilles (entre 50 et 100)
    points = Math.floor(Math.random() * (100 - 50 + 1)) + 50
  } else {
    // Par défaut
    points = 50
  }

  score.value += points
  showFloatingScore(event.clientX, event.clientY, points)

  // Ajouter l'effet
  finalTarget.classList.add('laser-hit')

  // Retirer l'effet après 2 secondes
  setTimeout(() => {
    finalTarget.classList.remove('laser-hit')
  }, 2000)
}

const showFloatingScore = (x, y, points) => {
  const el = document.createElement('div')
  el.textContent = `+${points}`
  el.className = 'floating-score'
  el.style.left = `${x}px`
  el.style.top = `${y}px`
  document.body.appendChild(el)
  
  // Nettoyage après l'animation
  setTimeout(() => {
    el.remove()
  }, 1000)
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
    <!-- Écran Game Over (Téléporté au body pour éviter les problèmes de positionnement) -->
    <Teleport to="body">
      <div v-if="showGameOver" class="game-over-overlay">
        <div class="game-over-card">
          <h2>Partie Terminée</h2>
          <div class="final-score">
            <span>SCORE FINAL</span>
            <strong>{{ score }}</strong>
          </div>
          <div class="game-over-actions">
            <button @click="startGame" class="btn-restart">Rejouer 🔫</button>
            <button @click="closeGameOver" class="btn-close">Fermer</button>
          </div>
        </div>
      </div>
    </Teleport>

    <div v-if="isActive" class="game-stats">
      <div class="timer-display">{{ timeLeft }}s</div>
      <div class="score-display">SCORE: {{ score }}</div>
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

.game-stats {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  margin-bottom: 10px;
}

.timer-display {
  background-color: #e74c3c;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-weight: bold;
  font-family: monospace;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.score-display {
  background-color: #f1c40f;
  color: #2c3e50;
  padding: 5px 15px;
  border-radius: 15px;
  font-weight: bold;
  font-family: 'Segoe UI', monospace;
  font-size: 1.1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  animation: pop-in 0.3s 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards;
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

.game-over-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Noir semi-transparent simple */
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  /* backdrop-filter: blur(8px);  <-- Supprimé */
  animation: fade-in 0.3s ease-out;
}

.game-over-card {
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  color: #2c3e50;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.5);
  animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  min-width: 350px;
  max-width: 90%;
}

.game-over-card h2 {
  font-size: 2.5rem;
  margin: 0 0 20px 0;
  color: #2e4f3b; /* Vert foncé Nird */
  text-shadow: none;
  font-family: 'Segoe UI', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 3px solid #e8d4c4;
  padding-bottom: 15px;
  display: inline-block;
}

.final-score {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
  margin-top: 10px;
}

.final-score span {
  font-size: 1.1rem;
  color: #5a7d6a;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.final-score strong {
  font-size: 4.5rem;
  color: #e67e22; /* Orange/Bronze pour le score */
  text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
  line-height: 1;
  font-family: 'Segoe UI', sans-serif;
}

.game-over-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn-restart, .btn-close {
  padding: 12px 28px;
  border-radius: 50px;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-restart {
  background: #5a7d6a;
  color: white;
  box-shadow: 0 4px 15px rgba(90, 125, 106, 0.3);
}

.btn-restart:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(90, 125, 106, 0.4);
  background: #2e4f3b;
}

.btn-close {
  background: transparent;
  color: #7f8c8d;
  border: 2px solid #bdc3c7;
}

.btn-close:hover {
  background: #ecf0f1;
  color: #2c3e50;
  border-color: #95a5a6;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
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

.floating-score {
  position: fixed;
  color: #f1c40f;
  font-weight: bold;
  font-size: 24px;
  pointer-events: none;
  z-index: 10000;
  text-shadow: 2px 2px 0 #000;
  animation: float-up 1s ease-out forwards;
}

@keyframes float-up {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5);
  }
  50% {
    transform: translate(-50%, -100%) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -150%) scale(1);
  }
}
</style>
