<script setup>
import { progress } from '../stores/progress.js'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const router = useRouter()

function isNodeVisible(nodeId) {
  return progress.visited.includes(nodeId)
}

function isNodeCompleted(nodeId) {
  return progress.completed.includes(nodeId)
}

function goToPage(nodeId) {
  if (isNodeVisible(nodeId)) {
    if (nodeId === 'presentation') {
      router.push('/')
    } else {
      router.push(`/page/${nodeId}`)
    }
    emit('close')
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">×</button>
      
      <h2 class="modal-title">🌳 Votre progression</h2>
      
      <div class="tree-container">
        <svg class="tree-svg" viewBox="0 0 600 450">
          <!-- Sol / herbe -->
          <ellipse cx="300" cy="420" rx="280" ry="20" fill="#c8e6c9" opacity="0.5"/>
          
          <!-- Tronc principal (organique) -->
          <path d="M290 420 Q285 380 295 350 Q300 320 300 300" 
                stroke="#8B5A2B" stroke-width="12" fill="none" stroke-linecap="round"/>
          
          <!-- Branche vers la gauche (Confidentialité) -->
          <path d="M295 340 Q260 310 200 280 Q160 260 140 240" 
                stroke="#a0522d" stroke-width="6" fill="none" stroke-linecap="round"
                :class="{ 'branch--visible': isNodeVisible('confidentialite'), 'branch--hidden': !isNodeVisible('confidentialite') }"/>
          
          <!-- Branche vers le centre (Licences) -->
          <path d="M300 310 Q300 280 300 250 Q300 220 300 200" 
                stroke="#a0522d" stroke-width="6" fill="none" stroke-linecap="round"
                :class="{ 'branch--visible': isNodeVisible('licences'), 'branch--hidden': !isNodeVisible('licences') }"/>
          
          <!-- Branche vers la droite (Sobriété) -->
          <path d="M305 340 Q340 310 400 280 Q440 260 460 240" 
                stroke="#a0522d" stroke-width="6" fill="none" stroke-linecap="round"
                :class="{ 'branch--visible': isNodeVisible('sobriete'), 'branch--hidden': !isNodeVisible('sobriete') }"/>
          
          <!-- Feuillage décoratif de fond -->
          <ellipse cx="300" cy="150" rx="180" ry="100" fill="#e8f5e9" opacity="0.3"/>
          
          <!-- Nœud racine (bas) - comme un gros fruit/bourgeon -->
          <g 
            class="node" 
            :class="{ 
              'node--visible': isNodeVisible('presentation'),
              'node--completed': isNodeCompleted('presentation')
            }"
            @click="goToPage('presentation')"
          >
            <!-- TODO : Refacto cet endroit -->
            <ellipse cx="300" cy="380" rx="35" ry="28" class="node-shape"/>
            <text x="300" y="385" text-anchor="middle" class="node-text">NIRD</text>
            

            <!-- Petites feuilles autour -->
            <path d="M265 375 Q255 365 260 355" stroke="#5a7d6a" stroke-width="2" fill="none"/>
            <path d="M335 375 Q345 365 340 355" stroke="#5a7d6a" stroke-width="2" fill="none"/>
          </g>
          
          <!-- Nœud Confidentialité (comme une feuille/fruit) -->
          <g 
            class="node" 
            :class="{ 
              'node--visible': isNodeVisible('confidentialite'),
              'node--completed': isNodeCompleted('confidentialite'),
              'node--locked': !isNodeVisible('confidentialite')
            }"
            @click="goToPage('confidentialite')"
          >
            <ellipse cx="120" cy="220" rx="45" ry="30" class="node-shape leaf-shape"/>
            <text x="120" y="218" text-anchor="middle" class="node-text">Confidentialité</text>
            <text x="120" y="232" text-anchor="middle" class="node-text-sub">RGPD</text>
          </g>
          
          <!-- Nœud Licences -->
          <g 
            class="node" 
            :class="{ 
              'node--visible': isNodeVisible('licences'),
              'node--completed': isNodeCompleted('licences'),
              'node--locked': !isNodeVisible('licences')
            }"
            @click="goToPage('licences')"
          >
            <ellipse cx="300" cy="170" rx="45" ry="30" class="node-shape leaf-shape"/>
            <text x="300" y="168" text-anchor="middle" class="node-text">Licences</text>
            <text x="300" y="182" text-anchor="middle" class="node-text-sub">coûteuses</text>
          </g>
          
          <!-- Nœud Sobriété -->
          <g 
            class="node" 
            :class="{ 
              'node--visible': isNodeVisible('sobriete'),
              'node--completed': isNodeCompleted('sobriete'),
              'node--locked': !isNodeVisible('sobriete')
            }"
            @click="goToPage('sobriete')"
          >
            <ellipse cx="480" cy="220" rx="45" ry="30" class="node-shape leaf-shape"/>
            <text x="480" y="218" text-anchor="middle" class="node-text">Sobriété</text>
            <text x="480" y="232" text-anchor="middle" class="node-text-sub">Écologie</text>
          </g>
          
          <!-- Petites feuilles décoratives -->
          <ellipse cx="200" cy="280" rx="15" ry="10" fill="#a5d6a7" opacity="0.6"/>
          <ellipse cx="400" cy="280" rx="15" ry="10" fill="#a5d6a7" opacity="0.6"/>
          <ellipse cx="250" cy="200" rx="12" ry="8" fill="#c8e6c9" opacity="0.5"/>
          <ellipse cx="350" cy="200" rx="12" ry="8" fill="#c8e6c9" opacity="0.5"/>
          <ellipse cx="180" cy="160" rx="10" ry="7" fill="#a5d6a7" opacity="0.4"/>
          <ellipse cx="420" cy="160" rx="10" ry="7" fill="#a5d6a7" opacity="0.4"/>

        </svg>
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
  max-width: 850px;
  max-height: 90vh;
  padding: 2rem;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(90, 125, 106, 0.2);
  display: flex;
  flex-direction: column;
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

.tree-container {
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.tree-svg {
  width: 100%;
  height: auto;
  min-height: 350px;
}

/* Branches */
.branch--hidden {
  opacity: 0.2;
  stroke: #ccc;
}

.branch--visible {
  opacity: 1;
  stroke: #8B5A2B;
}

/* Nœuds */
.node {
  cursor: pointer;
  transition: all 0.3s ease;
}

.node-shape {
  fill: #ddd;
  stroke: #bbb;
  stroke-width: 2;
  filter: blur(2px);
  opacity: 0.5;
  transition: all 0.3s ease;
  transform-origin: center;
  transform-box: fill-box;
}

.leaf-shape {
  rx: 45px;
}

.node-text {
  fill: #999;
  font-size: 11px;
  font-weight: 600;
  filter: blur(1px);
  transition: all 0.3s ease;
}

.node-text-sub {
  fill: #aaa;
  font-size: 9px;
  font-weight: 400;
  filter: blur(1px);
}

/* Nœud visible */
.node--visible .node-shape {
  fill: #c8e6c9;
  stroke: #5a7d6a;
  stroke-width: 3;
  filter: none;
  opacity: 1;
}

.node--visible .node-text,
.node--visible .node-text-sub {
  fill: #2e4f3b;
  filter: none;
}

.node--visible:hover .node-shape {
  fill: #a5d6a7;
  transform: scale(1.05);
}

/* Nœud complété */
.node--completed .node-shape {
  fill: #5a7d6a;
  stroke: #2e4f3b;
}

.node--completed .node-text,
.node--completed .node-text-sub {
  fill: white;
}

/* Nœud verrouillé */
.node--locked {
  cursor: not-allowed;
}

.modal-hint {
  text-align: center;
  color: #6b8f7a;
  font-size: 0.9rem;
  margin-top: 1rem;
}
</style>
