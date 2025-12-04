<script setup>
import { ref } from 'vue'
import SkillTreeModal from './SkillTreeModal.vue'

const showTree = ref(false)
</script>

<template>
  <header class="site-header">
    <button class="tree-button" @click="showTree = true" title="Voir l'arbre de progression">
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

    <SkillTreeModal v-if="showTree" @close="showTree = false" />
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
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(46, 79, 59, 0.1);
  z-index: 100;
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
}

.tree-button:hover {
  background: #2e4f3b;
  color: white;
  transform: scale(1.05);
}

.tree-icon {
  width: 28px;
  height: 28px;
}
</style>

