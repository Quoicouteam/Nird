<script setup>
const emit = defineEmits(['open-tree'])
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
</style>

