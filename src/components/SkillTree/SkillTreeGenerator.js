/**
 * SkillTreeGenerator - Génère automatiquement la structure visuelle de l'arbre
 * Responsabilité : Calcul des positions, formes, branches et décorations
 */

// Configuration de l'arbre
const SVG_WIDTH = 800
const ROOT_Y = 550
const ROOT_X = SVG_WIDTH / 2
const LEVEL_HEIGHT = 120
const CHILD_SPACING = 160

/**
 * Construit une hiérarchie basée sur le champ parent
 */
function buildHierarchy(treeData) {
  const nodeMap = new Map()
  
  // Ajouter la racine
  nodeMap.set(treeData.root.id, {
    ...treeData.root,
    children: [],
    level: 0
  })
  
  // Ajouter tous les enfants à la map
  treeData.children.forEach(child => {
    nodeMap.set(child.id, {
      ...child,
      children: [],
      level: 0
    })
  })
  
  // Construire les relations parent-enfant
  treeData.children.forEach(child => {
    const parentNode = nodeMap.get(child.parent)
    const childNode = nodeMap.get(child.id)
    if (parentNode && childNode) {
      parentNode.children.push(childNode)
    }
  })
  
  // Calculer les niveaux
  function calculateLevels(node, level) {
    node.level = level
    node.children.forEach(child => calculateLevels(child, level + 1))
  }
  calculateLevels(nodeMap.get(treeData.root.id), 0)
  
  return nodeMap.get(treeData.root.id)
}

/**
 * Calcule les positions des nœuds en fonction de la hiérarchie
 */
function calculatePositions(node, parentX = ROOT_X, index = 0, siblingsCount = 1) {
  // Position spéciale pour les pousses (sprout)
  if (node.special === 'sprout') {
    node.position = { x: ROOT_X - 200, y: ROOT_Y + 50 }
    node.shape = { rx: 25, ry: 20 }
    node.isRoot = false
    node.isSprout = true
    return
  }

  const level = node.level
  const y = ROOT_Y - (level * LEVEL_HEIGHT)
  
  let x
  if (level === 0) {
    x = ROOT_X
  } else {
    // Centrer les enfants sous le parent
    const totalWidth = (siblingsCount - 1) * CHILD_SPACING
    const startX = parentX - totalWidth / 2
    x = startX + index * CHILD_SPACING
  }
  
  node.position = { x, y }
  node.shape = level === 0 ? { rx: 35, ry: 28 } : { rx: 45, ry: 30 }
  node.isRoot = level === 0
  
  // Calculer récursivement pour les enfants
  node.children.forEach((child, childIndex) => {
    calculatePositions(child, x, childIndex, node.children.length)
  })
}

/**
 * Aplatir l'arbre hiérarchique en liste
 */
function flattenTree(node, result = []) {
  result.push(node)
  node.children.forEach(child => flattenTree(child, result))
  return result
}

/**
 * Génère les nœuds avec leurs positions et formes
 */
export function generateNodes(treeData) {
  const hierarchy = buildHierarchy(treeData)
  calculatePositions(hierarchy)
  return flattenTree(hierarchy)
}

/**
 * Génère les branches selon la hiérarchie parent-enfant avec variations organiques
 */
export function generateBranches(nodes) {
  const result = []
  const nodeMap = new Map(nodes.map(n => [n.id, n]))
  
  // Pour chaque nœud sauf la racine, créer une branche vers son parent
  nodes.forEach((node, index) => {
    // Ignorer les pousses spéciales (pas de branche classique)
    if (node.parent && node.special !== 'sprout') {
      const parentNode = nodeMap.get(node.parent)
      if (!parentNode) return
      
      const distance = Math.sqrt(
        Math.pow(node.position.x - parentNode.position.x, 2) + 
        Math.pow(node.position.y - parentNode.position.y, 2)
      )
      
      // Épaisseur basée sur le niveau (tronc plus épais, branches fines)
      const baseWidth = parentNode.level === 0 ? 12 : Math.max(4, 10 - parentNode.level * 2)
      const strokeWidth = baseWidth + Math.random() * 2
      
      // Point de départ légèrement décalé du centre du parent
      const offsetX = node.position.x > parentNode.position.x ? 8 : -8
      const startX = parentNode.position.x + offsetX
      const startY = parentNode.position.y - 35
      
      // Point d'arrivée près du nœud enfant
      const endOffsetX = node.position.x > parentNode.position.x ? -25 : 25
      const endX = node.position.x + endOffsetX
      const endY = node.position.y + 25
      
      // Variation organique de la courbure
      const curvatureVariation = (Math.sin(index * 0.5) * 20) + (node.position.x > parentNode.position.x ? 15 : -15)
      const ctrlX1 = startX + (endX - startX) * 0.25 + curvatureVariation
      const ctrlY1 = startY - 20
      const ctrlX2 = endX - (endX - startX) * 0.25 + curvatureVariation * 0.5
      const ctrlY2 = endY + 30
      
      result.push({
        from: parentNode.id,
        to: node.id,
        path: `M${startX} ${startY} C${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`,
        strokeWidth: strokeWidth,
        distance: distance,
        animationDelay: parentNode.level * 0.3 + index * 0.1
      })
    }
  })
  
  return result
}

/**
 * Génère le tronc principal avec une forme plus organique
 */
export function generateTrunk() {
  const baseX = ROOT_X
  const baseY = ROOT_Y + 40
  const topY = ROOT_Y - 100
  
  // Tronc avec une forme ondulante et naturelle
  const leftPath = `M${baseX - 18} ${baseY} 
                    C${baseX - 20} ${baseY - 30}, ${baseX - 16} ${baseY - 70}, ${baseX - 12} ${baseY - 110}
                    C${baseX - 10} ${baseY - 140}, ${baseX - 8} ${topY + 20}, ${baseX - 6} ${topY}`
  
  const rightPath = `M${baseX + 18} ${baseY}
                     C${baseX + 20} ${baseY - 30}, ${baseX + 16} ${baseY - 70}, ${baseX + 12} ${baseY - 110}
                     C${baseX + 10} ${baseY - 140}, ${baseX + 8} ${topY + 20}, ${baseX + 6} ${topY}`
  
  // Texture du tronc (lignes verticales pour l'écorce)
  const barkLines = []
  for (let i = 0; i < 5; i++) {
    const offset = -15 + i * 7
    const y1 = baseY - 10
    const y2 = topY + 30
    barkLines.push({
      x1: baseX + offset,
      y1: y1,
      x2: baseX + offset + (Math.sin(i) * 3),
      y2: y2
    })
  }
  
  return {
    leftPath,
    rightPath,
    barkLines,
    strokeWidth: 16
  }
}

/**
 * Génère les tiges des pousses spéciales qui sortent de l'herbe
 */
export function generateSprouts(nodes) {
  const sprouts = nodes.filter(n => n.special === 'sprout')
  return sprouts.map(sprout => {
    const startY = ROOT_Y + 40 // Au niveau du sol
    const endY = sprout.position.y
    const x = sprout.position.x

    // Une petite tige qui pousse du sol avec une légère courbe
    return {
      nodeId: sprout.id,
      path: `M${x} ${startY} Q${x - 5} ${(startY + endY) / 2} ${x} ${endY}`,
      strokeWidth: 3
    }
  })
}

/**
 * Génère les éléments décoratifs (sol, feuillage dense, petites feuilles animées)
 */
export function generateDecorations(nodes) {
  if (!nodes || nodes.length === 0) {
    return {
      ground: { cx: ROOT_X, cy: ROOT_Y + 40, rx: 280, ry: 20 },
      foliageClusters: [],
      leaves: [],
      flowers: [],
      roots: []
    }
  }
  
  const minY = Math.min(...nodes.map(n => n.position.y))
  
  // Génère des racines qui sortent du sol
  const roots = []
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI
    const xOffset = Math.cos(angle) * (40 + i * 8)
    const rootX = ROOT_X + xOffset
    const rootY = ROOT_Y + 40
    roots.push({
      path: `M${ROOT_X} ${ROOT_Y + 35} Q${ROOT_X + xOffset * 0.5} ${rootY + 10} ${rootX} ${rootY + 5 + Math.random() * 3}`,
      strokeWidth: 4 - i * 0.5,
      delay: i * 0.1
    })
  }
  
  // Génère des clusters de feuillage autour de chaque nœud et branche
  const foliageClusters = []
  nodes.forEach((node, index) => {
    if (node.level > 0) {
      // Feuillage principal autour du nœud
      for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2
        const offsetX = Math.cos(angle) * (50 + Math.random() * 20)
        const offsetY = Math.sin(angle) * (30 + Math.random() * 15)
        foliageClusters.push({
          cx: node.position.x + offsetX,
          cy: node.position.y + offsetY,
          rx: 35 + Math.random() * 15,
          ry: 25 + Math.random() * 10,
          rotation: Math.random() * 360,
          opacity: 0.3 + Math.random() * 0.3,
          delay: index * 0.15 + i * 0.05
        })
      }
    }
  })
  
  // Grand feuillage au sommet de l'arbre
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2
    const radius = 120 + Math.random() * 40
    foliageClusters.push({
      cx: ROOT_X + Math.cos(angle) * radius,
      cy: minY - 50 + Math.sin(angle) * 60,
      rx: 60 + Math.random() * 30,
      ry: 45 + Math.random() * 20,
      rotation: Math.random() * 360,
      opacity: 0.25 + Math.random() * 0.25,
      delay: 1 + i * 0.1
    })
  }
  
  // Petites feuilles individuelles le long des branches
  const leaves = []
  nodes.slice(1).forEach((node, index) => {
    const parentNode = nodes.find(n => n.id === node.parent)
    if (parentNode) {
      // Plusieurs feuilles le long de la branche
      for (let i = 0; i < 5; i++) {
        const t = i / 5
        const branchX = parentNode.position.x + (node.position.x - parentNode.position.x) * t
        const branchY = parentNode.position.y + (node.position.y - parentNode.position.y) * t
        
        const side = Math.random() > 0.5 ? 1 : -1
        const offsetX = side * (20 + Math.random() * 15)
        const offsetY = -10 + Math.random() * 20
        
        leaves.push({
          cx: branchX + offsetX,
          cy: branchY + offsetY,
          rx: 12 + Math.random() * 6,
          ry: 8 + Math.random() * 4,
          rotation: Math.random() * 360,
          delay: index * 0.2 + i * 0.1,
          swayDelay: Math.random() * 2
        })
      }
    }
  })
  
  // Petites fleurs sur certaines branches
  const flowers = []
  nodes.slice(1).forEach((node, index) => {
    if (Math.random() > 0.6) { // 40% de chance d'avoir une fleur
      for (let i = 0; i < 2; i++) {
        flowers.push({
          cx: node.position.x + (Math.random() - 0.5) * 60,
          cy: node.position.y + (Math.random() - 0.5) * 40,
          size: 4 + Math.random() * 3,
          petals: 5,
          rotation: Math.random() * 360,
          delay: 1.5 + index * 0.15 + i * 0.1,
          color: Math.random() > 0.5 ? '#ffb5d8' : '#fff59a'
        })
      }
    }
  })
  
  return {
    ground: {
      cx: ROOT_X,
      cy: ROOT_Y + 40,
      rx: 300,
      ry: 25
    },
    foliageClusters,
    leaves,
    flowers,
    roots
  }
}
