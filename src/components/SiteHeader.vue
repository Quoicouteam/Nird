<script setup>
import { computed } from 'vue'
import { progress } from '../router/progress.js'

const emit = defineEmits(['open-tree'])

const targetWord = 'SNAKE'
const letters = targetWord.split('')

const masked = computed(() => {
  return letters.map(ch => progress.lettersEarned && progress.lettersEarned.includes(ch) ? ch : '_')
})
</script>

<template>
  <header class="site-header">
    <button class="tree-button" @click="$emit('open-tree')" title="Voir l'arbre de progression">
      <svg viewBox="0 0 40 40" class="tree-icon">
        <!-- Tronc -->
        <path d="M18 38 L18 28 Q18 26 20 26 Q22 26 22 28 L22 38" fill="#8B5A2B"/>
        <!-- Feuillage bas -->
        <ellipse cx="20" cy="22" rx="12" ry="8" fill="#5a7d6a"/>
        <!-- Feuillage milieu -->
        <ellipse cx="20" cy="15" rx="10" ry="7" fill="#6b9b7a"/>
        <!-- Feuillage haut -->
        <ellipse cx="20" cy="9" rx="7" ry="5" fill="#7dab8a"/>
        <!-- Petites feuilles décoratives -->
        <circle cx="12" cy="20" r="2" fill="#4a6d5a"/>
        <circle cx="28" cy="20" r="2" fill="#4a6d5a"/>
        <circle cx="14" cy="13" r="1.5" fill="#5a8d6a"/>
        <circle cx="26" cy="13" r="1.5" fill="#5a8d6a"/>
      </svg>
    </button>
    <div class="egg-mask" aria-hidden="false">
      <div class="masked-word">
        <span v-for="(ch, idx) in masked" :key="idx" :id="'masked-letter-' + letters[idx]" class="masked-letter">{{ ch }}</span>
      </div>
    </div>

    <a href="src/troll/rickroll/pageRickroll.html" target="_blank" class="snake-troll">
      <img src="../troll/snakeTroll.jpeg" alt="snaketroll">
    </a>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: var(--base);
  left: var(--base);
  right: var(--base);
  height: 60px;
  display: flex;
  align-items: center;
  padding: var(--base) 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0 1.5rem;
  background: #f1f1f1;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(46, 79, 59, 0.1);
  z-index: 100;
  box-shadow: 0 2px 8px rgba(46, 79, 59, 0.05);
  animation: header-slide-in 0.4s ease-out;
}

@keyframes header-slide-in {
  from {
    transform: translateY(-60px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.tree-button {
  width: 44px;
  height: 44px;
  border: 2px solid #2e4f3b;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #2e4f3b;
  position: relative;
  overflow: hidden;
}

.tree-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(125, 171, 138, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tree-button:hover {
  background: #2e4f3b;
  color: white;
  transform: scale(1.08) rotate(2deg);
  box-shadow: 0 4px 12px rgba(46, 79, 59, 0.25);
}

.tree-button:hover::before {
  opacity: 1;
}

.tree-icon {
  width: 28px;
  height: 28px;
  animation: float-gentle 3s ease-in-out infinite;
}

.tree-button:hover .tree-icon {
  animation: pulse-grow 0.6s ease-in-out;
}


.snake-troll img {
  width: 40px;
  height: 40px;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.snake-troll:hover img {
  opacity: 1;
}

.snake-troll {
  position: absolute;
  right: 10px;
  top: 10px;
}

/* Masked word center */
.egg-mask {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  translate: 0 -50%;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.masked-word { display: flex; gap: 0.5rem; font-weight: 800; color: #2e4f3b; font-size: 1rem; }
.masked-letter { display: inline-block; width: 20px; text-align: center; font-family: inherit; }
</style>

