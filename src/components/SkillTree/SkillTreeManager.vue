<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SkillTreeView from './SkillTreeView.vue'
import { unlockPage } from '../../router/progress.js'

const emit = defineEmits(['close'])
const router = useRouter()
const treeContainer = ref(null)

function handleNodeClick(node) {
  // Débloquer et naviguer
  unlockPage(node.id)
  router.push(node.route)
  emit('close')
}

onMounted(() => {
  // Scroll vers le bas au montage (là où se trouve la racine)
  if (treeContainer.value) {
    treeContainer.value.scrollTop = treeContainer.value.scrollHeight
  }
})
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">×</button>
      
      <h2 class="modal-title">🌳 Votre progression</h2>
      
      <div class="tree-container" ref="treeContainer">
        <SkillTreeView @node-click="handleNodeClick" />
      </div>
      
      <p class="modal-hint">🍃 Cliquez sur un nœud débloqué pour y accéder</p>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;
  padding: 2rem;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(90, 125, 106, 0.2);
  display: flex;
  flex-direction: column;
}

.tree-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 500px;
  padding: 1rem;
  border-radius: 12px;
  background: linear-gradient(to bottom, #f8faf9, #ffffff);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: #5a7d6a;
  border-radius: 50%;
  transition: all 0.2s;
}

.close-button:hover {
  background: rgba(46, 79, 59, 0.1);
  color: #2e4f3b;
}

.modal-title {
  text-align: center;
  color: #2e4f3b;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.modal-hint {
  text-align: center;
  color: #6b8f7a;
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>
