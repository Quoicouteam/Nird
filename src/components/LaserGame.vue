<script setup>
import { ref, watch, onUnmounted } from 'vue'

const isActive = ref(false)

const toggleGame = () => {
  isActive.value = !isActive.value
}

const handleGlobalClick = (event) => {
  if (!isActive.value) return

  // Ne pas tirer sur le bouton du jeu lui-même
  if (event.target.closest('.laser-game-toggle')) return

  const target = event.target
  
  // Si déjà touché, on ne fait rien
  if (target.classList.contains('laser-hit')) return

  // Empêcher l'action par défaut (clic sur lien, bouton, etc.)
  event.preventDefault()
  event.stopPropagation()

  // Ajouter l'effet
  target.classList.add('laser-hit')

  // Retirer l'effet après 2 secondes
  setTimeout(() => {
    target.classList.remove('laser-hit')
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
  document.body.classList.remove('laser-mode')
  window.removeEventListener('click', handleGlobalClick, { capture: true })
})
</script>

<template>
  <button 
    class="laser-game-toggle" 
    @click="toggleGame"
    :class="{ 'is-active': isActive }"
    title="Activer/Désactiver le Laser Game"
  >
    <span v-if="!isActive">🔫</span>
    <span v-else>❌</span>
  </button>
</template>

<style scoped>
.laser-game-toggle {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2c3e50;
  color: white;
  border: 2px solid #fff;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.laser-game-toggle:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 8px rgba(0,0,0,0.4);
}

.laser-game-toggle.is-active {
  background-color: #e74c3c;
  border-color: #c0392b;
}
</style>

<style>
/* Styles globaux pour le mode jeu */
body.laser-mode {
  /* On force le curseur sur tout le body */
  cursor: url('../assets/img/blaster.png') 16 16, auto !important;
}

/* On s'assure que tous les éléments héritent du curseur */
body.laser-mode * {
  cursor: inherit !important;
}

.laser-hit {
  filter: grayscale(100%) brightness(0.8) sepia(0.2) !important;
  pointer-events: none !important;
  transition: filter 0.1s ease-out;
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
  background-color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  animation: laser-flash 0.2s ease-out forwards;
  z-index: 1000;
}

@keyframes laser-flash {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
