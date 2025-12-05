<script setup>
import { computed, onMounted } from 'vue'
import { isPageUnlocked, isPageCompleted } from '../../router/progress.js'
import { 
  generateNodes, 
  generateBranches, 
  generateTrunk, 
  generateDecorations 
} from './SkillTreeGenerator.js'
import treeData from './SkillTreeData.json'

const emit = defineEmits(['node-click'])

// Génération de la structure de l'arbre
const nodes = computed(() => {
  try {
    return generateNodes(treeData)
  } catch (error) {
    console.error('Erreur génération nodes:', error)
    return []
  }
})

const branches = computed(() => {
  try {
    return generateBranches(nodes.value)
  } catch (error) {
    console.error('Erreur génération branches:', error)
    return []
  }
})

const trunk = computed(() => {
  try {
    return generateTrunk()
  } catch (error) {
    console.error('Erreur génération trunk:', error)
    return { path: '', strokeWidth: 0 }
  }
})

const decorations = computed(() => {
  try {
    return generateDecorations(nodes.value)
  } catch (error) {
    console.error('Erreur génération decorations:', error)
    return { ground: {}, foliage: {}, leaves: [] }
  }
})

// Vérification du statut des nœuds
function getNodeClass(nodeId) {
  const unlocked = isPageUnlocked(nodeId)
  const completed = isPageCompleted(nodeId)
  
  return {
    'node--unlocked': unlocked,
    'node--locked': !unlocked,
    'node--completed': completed
  }
}

function handleNodeClick(node) {
  if (isPageUnlocked(node.id)) {
    emit('node-click', node)
  }
}

onMounted(() => {
  console.log('SkillTreeView monté')
  console.log('Nodes:', nodes.value)
  console.log('TreeData:', treeData)
})
</script>

<template>
  <div class="tree-container">
    <svg class="tree-svg" viewBox="0 0 800 700">
      <!-- Sol / herbe -->
      <ellipse 
        :cx="decorations.ground.cx" 
        :cy="decorations.ground.cy" 
        :rx="decorations.ground.rx" 
        :ry="decorations.ground.ry" 
        fill="#c8e6c9" 
        opacity="0.5"
      />
      
      <!-- Tronc principal (organique) -->
      <path 
        :d="trunk.path" 
        stroke="#8B5A2B" 
        :stroke-width="trunk.strokeWidth" 
        fill="none" 
        stroke-linecap="round"
      />
      
      <!-- Branches dynamiques -->
      <path 
        v-for="branch in branches" 
        :key="branch.from + '-' + branch.to"
        :d="branch.path" 
        stroke="#a0522d" 
        :stroke-width="branch.strokeWidth" 
        fill="none" 
        stroke-linecap="round"
        class="branch--visible"
      />
      
      <!-- Feuillage décoratif de fond -->
      <ellipse 
        :cx="decorations.foliage.cx" 
        :cy="decorations.foliage.cy" 
        :rx="decorations.foliage.rx" 
        :ry="decorations.foliage.ry" 
        fill="#e8f5e9" 
        opacity="0.3"
      />
      
      <!-- Définitions des patterns de hachures -->
      <defs>
        <pattern 
          v-for="node in nodes" 
          :key="'pattern-' + node.id"
          :id="'hatch-' + node.id" 
          patternUnits="userSpaceOnUse" 
          width="4" 
          height="4"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="4" stroke="#999" stroke-width="1" />
        </pattern>
      </defs>
      
      <!-- Nœuds dynamiques -->
      <g 
        v-for="node in nodes" 
        :key="node.id"
        class="node" 
        :class="getNodeClass(node.id)"
        @click="handleNodeClick(node)"
      >
        <!-- Forme du nœud -->
        <ellipse 
          :cx="node.position.x" 
          :cy="node.position.y" 
          :rx="node.shape.rx" 
          :ry="node.shape.ry" 
          class="node-shape"
          :class="{ 'leaf-shape': !node.isRoot }"
        />
        
        <!-- Hachures pour les nœuds verrouillés -->
        <ellipse 
          v-if="!isPageUnlocked(node.id)"
          :cx="node.position.x" 
          :cy="node.position.y" 
          :rx="node.shape.rx" 
          :ry="node.shape.ry" 
          :fill="`url(#hatch-${node.id})`"
          class="node-hatch"
        />
        
        <!-- Texte -->
        <text 
          :x="node.position.x" 
          :y="node.position.y + (node.subtitle ? -4 : 5)" 
          text-anchor="middle" 
          class="node-text"
        >
          {{ node.title }}
        </text>
        <text 
          v-if="node.subtitle"
          :x="node.position.x" 
          :y="node.position.y + 14" 
          text-anchor="middle" 
          class="node-text-sub"
        >
          {{ node.subtitle }}
        </text>
      </g>
      
      <!-- Petites feuilles décoratives -->
      <ellipse 
        v-for="(leaf, index) in decorations.leaves" 
        :key="'leaf-' + index"
        :cx="leaf.cx" 
        :cy="leaf.cy" 
        :rx="leaf.rx" 
        :ry="leaf.ry" 
        :fill="index % 2 === 0 ? '#a5d6a7' : '#c8e6c9'" 
        :opacity="index < 2 ? 0.6 : index < 4 ? 0.5 : 0.4"
      />
    </svg>
  </div>
</template>

<style scoped>
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
  pointer-events: none;
}

.node-text-sub {
  fill: #aaa;
  font-size: 9px;
  font-weight: 400;
  filter: blur(1px);
  pointer-events: none;
}

/* Nœud débloqué */
.node--unlocked .node-shape {
  fill: #c8e6c9;
  stroke: #5a7d6a;
  stroke-width: 3;
  filter: none;
  opacity: 1;
}

.node--unlocked .node-text,
.node--unlocked .node-text-sub {
  fill: #2e4f3b;
  filter: none;
}

.node--unlocked:hover .node-shape {
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

.node--locked .node-shape {
  fill: #e0e0e0;
  stroke: #bbb;
  opacity: 0.6;
}

.node--locked .node-text,
.node--locked .node-text-sub {
  fill: #999;
  filter: blur(0.5px);
}

.node-hatch {
  opacity: 0.3;
  pointer-events: none;
}
</style>
