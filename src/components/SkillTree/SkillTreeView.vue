<script setup>
import { computed, onMounted } from 'vue'
import { isPageUnlocked, isPageCompleted } from '../../router/progress.js'
import { 
  generateNodes, 
  generateBranches, 
  generateTrunk, 
  generateDecorations,
  generateSprouts
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

const sprouts = computed(() => {
  try {
    return generateSprouts(nodes.value)
  } catch (error) {
    console.error('Erreur génération sprouts:', error)
    return []
  }
})

// Vérification du statut des nœuds
function getNodeClass(nodeId) {
  const unlocked = isPageUnlocked(nodeId)
  const completed = isPageCompleted(nodeId)
  const node = nodes.value.find(n => n.id === nodeId)
  const isSprout = node?.special === 'sprout'

  return {
    'node--unlocked': unlocked,
    'node--locked': !unlocked,
    'node--completed': completed,
    'node--sprout': isSprout
  }
}

function handleNodeClick(node) {
  if (isPageUnlocked(node.id)) {
    // Si le nœud a une URL externe, ouvrir dans un nouvel onglet
    if (node.externalUrl) {
      window.open(node.externalUrl, '_blank', 'noopener,noreferrer')
    } else {
      // Sinon, navigation interne normale
      emit('node-click', node)
    }
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
      <!-- Définitions pour les gradients et filtres -->
      <defs>
        <!-- Gradient pour le sol -->
        <radialGradient id="groundGradient" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#b5d6a7;stop-opacity:0.7" />
          <stop offset="100%" style="stop-color:#88b383;stop-opacity:0.4" />
        </radialGradient>
        
        <!-- Gradient pour le tronc -->
        <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#6d4a2f;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8B5A2B;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#6d4a2f;stop-opacity:1" />
        </linearGradient>
        
        <!-- Filtre pour l'ombre -->
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
        </filter>
      </defs>
      
      <!-- Sol / herbe avec animation -->
      <ellipse 
        :cx="decorations.ground.cx" 
        :cy="decorations.ground.cy" 
        :rx="decorations.ground.rx" 
        :ry="decorations.ground.ry" 
        fill="url(#groundGradient)"
        class="ground"
      />
      
      <!-- Racines qui émergent du sol -->
      <g class="roots">
        <path
          v-for="(root, index) in decorations.roots"
          :key="'root-' + index"
          :d="root.path"
          stroke="#9d7a54"
          :stroke-width="root.strokeWidth"
          fill="none"
          stroke-linecap="round"
          class="root"
          :style="{ animationDelay: root.delay + 's' }"
        />
      </g>
      
      <!-- Tronc principal avec texture -->
      <g class="trunk-group">
        <!-- Côté gauche du tronc -->
        <path 
          :d="trunk.leftPath" 
          stroke="url(#trunkGradient)"
          :stroke-width="trunk.strokeWidth" 
          fill="none" 
          stroke-linecap="round"
          class="trunk-side"
          filter="url(#shadow)"
        />
        
        <!-- Côté droit du tronc -->
        <path 
          :d="trunk.rightPath" 
          stroke="url(#trunkGradient)"
          :stroke-width="trunk.strokeWidth" 
          fill="none" 
          stroke-linecap="round"
          class="trunk-side"
          filter="url(#shadow)"
        />
        
        <!-- Lignes d'écorce -->
        <line
          v-for="(line, index) in trunk.barkLines"
          :key="'bark-' + index"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          stroke="#5a3d25"
          stroke-width="1.5"
          opacity="0.4"
          class="bark-line"
        />
      </g>
      
      <!-- Branches dynamiques avec animations -->
      <g class="branches">
        <path 
          v-for="(branch, index) in branches" 
          :key="branch.from + '-' + branch.to"
          :d="branch.path" 
          stroke="#8B5A2B" 
          :stroke-width="branch.strokeWidth" 
          fill="none" 
          stroke-linecap="round"
          class="branch"
          :style="{ animationDelay: branch.animationDelay + 's' }"
          filter="url(#shadow)"
        />
      </g>
      
      <!-- Tiges des pousses dans l'herbe -->
      <path
        v-for="sprout in sprouts"
        :key="'sprout-' + sprout.nodeId"
        :d="sprout.path"
        stroke="#7dab8a"
        :stroke-width="sprout.strokeWidth"
        fill="none"
        stroke-linecap="round"
        class="sprout-stem"
      />

      <!-- Clusters de feuillage dense -->
      <g class="foliage-layer">
        <ellipse 
          v-for="(cluster, index) in decorations.foliageClusters" 
          :key="'foliage-' + index"
          :cx="cluster.cx" 
          :cy="cluster.cy" 
          :rx="cluster.rx" 
          :ry="cluster.ry"
          :transform="`rotate(${cluster.rotation} ${cluster.cx} ${cluster.cy})`"
          fill="#a8d5a3"
          :opacity="cluster.opacity"
          class="foliage-cluster"
          :style="{ animationDelay: cluster.delay + 's' }"
        />
      </g>
      
      <!-- Petites feuilles décoratives le long des branches -->
      <g class="decorative-leaves">
        <ellipse 
          v-for="(leaf, index) in decorations.leaves" 
          :key="'leaf-' + index"
          :cx="leaf.cx" 
          :cy="leaf.cy" 
          :rx="leaf.rx" 
          :ry="leaf.ry" 
          :transform="`rotate(${leaf.rotation} ${leaf.cx} ${leaf.cy})`"
          :fill="index % 3 === 0 ? '#8fc98a' : index % 3 === 1 ? '#a5d6a7' : '#b8e5b3'"
          opacity="0.75"
          class="decorative-leaf"
          :style="{ 
            animationDelay: leaf.delay + 's',
            '--sway-delay': leaf.swayDelay + 's'
          }"
        />
      </g>
      
      <!-- Petites fleurs sur les branches -->
      <g class="flowers">
        <g v-for="(flower, index) in decorations.flowers" :key="'flower-' + index"
           :transform="`translate(${flower.cx}, ${flower.cy})`"
           class="flower"
           :style="{ animationDelay: flower.delay + 's' }">
          <circle 
            v-for="petal in flower.petals"
            :key="'petal-' + petal"
            :cx="Math.cos(petal * Math.PI * 2 / flower.petals) * flower.size"
            :cy="Math.sin(petal * Math.PI * 2 / flower.petals) * flower.size"
            :r="flower.size * 0.6"
            :fill="flower.color"
            opacity="0.8"
          />
          <circle cx="0" cy="0" :r="flower.size * 0.4" fill="#ffe082" />
        </g>
      </g>
      
      <!-- Patterns de hachures pour nœuds verrouillés -->
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
      
      <!-- Nœuds dynamiques au premier plan -->
      <g class="nodes-layer">
        <g 
          v-for="node in nodes" 
          :key="node.id"
          class="node" 
          :class="getNodeClass(node.id)"
          @click="handleNodeClick(node)"
        >
          <!-- Forme du nœud avec effet de profondeur -->
          <ellipse 
            :cx="node.position.x" 
            :cy="node.position.y + 3" 
            :rx="node.shape.rx" 
            :ry="node.shape.ry" 
            fill="#5a7d6a"
            opacity="0.2"
            class="node-shadow"
          />
          
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
      </g>
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

/* ==================== ÉLÉMENTS STATIQUES ==================== */

.ground {
  opacity: 1;
}

.root {
  opacity: 1;
}

.trunk-side {
  opacity: 1;
}

.bark-line {
  opacity: 0.4;
}

.branch {
  opacity: 1;
  transform-origin: center;
}

.sprout-stem {
  opacity: 0.9;
  stroke: #7dab8a;
}

.foliage-cluster {
  transform-origin: center;
}

.decorative-leaf {
  opacity: 0.75;
  transform-origin: center;
}

.flower {
  opacity: 1;
  transform-origin: center;
}

/* ==================== NŒUDS ==================== */

.nodes-layer {
  opacity: 1;
}

.node {
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center;
}

.node-shadow {
  transition: all 0.3s ease;
}

.node-shape {
  fill: #ddd;
  stroke: #bbb;
  stroke-width: 2.5;
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
  user-select: none;
}

.node-text-sub {
  fill: #aaa;
  font-size: 9px;
  font-weight: 400;
  filter: blur(1px);
  pointer-events: none;
  user-select: none;
}

/* Nœud débloqué */
.node--unlocked .node-shape {
  fill: #c8e6c9;
  stroke: #5a7d6a;
  stroke-width: 3.5;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  opacity: 1;
}

.node--unlocked .node-text,
.node--unlocked .node-text-sub {
  fill: #2e4f3b;
  filter: none;
}

.node--unlocked:hover .node-shape {
  fill: #a5d6a7;
  transform: scale(1.1);
  filter: drop-shadow(0 4px 12px rgba(90, 125, 106, 0.5));
}

.node--unlocked:hover .node-shadow {
  transform: translate(0, 5px);
  opacity: 0.3;
}

/* Pousse (quête annexe) - toujours accessible */
.node--sprout.node--unlocked .node-shape {
  fill: #b3e5b3;
  stroke: #6b9b6b;
  stroke-width: 3;
  filter: drop-shadow(0 2px 6px rgba(107, 155, 107, 0.4));
}

.node--sprout.node--unlocked .node-text,
.node--sprout.node--unlocked .node-text-sub {
  fill: #2d5a2d;
}

.node--sprout.node--unlocked:hover .node-shape {
  fill: #9dd69d;
  transform: scale(1.15);
}

/* Nœud complété */
.node--completed .node-shape {
  fill: #5a7d6a;
  stroke: #2e4f3b;
  stroke-width: 4;
  filter: drop-shadow(0 3px 6px rgba(46, 79, 59, 0.5));
}

.node--completed .node-text,
.node--completed .node-text-sub {
  fill: white;
  font-weight: 700;
}

.node--completed:hover .node-shape {
  fill: #4a6d5a;
  transform: scale(1.08);
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
