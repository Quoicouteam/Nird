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
 * Génère les branches selon la hiérarchie parent-enfant
 */
export function generateBranches(nodes) {
  const result = []
  const nodeMap = new Map(nodes.map(n => [n.id, n]))
  
  // Pour chaque nœud sauf la racine, créer une branche vers son parent
  nodes.forEach(node => {
    if (node.parent) {
      const parentNode = nodeMap.get(node.parent)
      if (!parentNode) return
      
      // Point de départ légèrement décalé du centre du parent
      const startX = parentNode.position.x + (node.position.x > parentNode.position.x ? 5 : -5)
      const startY = parentNode.position.y - 40
      
      // Point d'arrivée près du nœud enfant
      const endX = node.position.x + (node.position.x > parentNode.position.x ? -20 : 20)
      const endY = node.position.y + 20
      
      // Points de contrôle pour une courbe naturelle
      const midX = (startX + endX) / 2
      const midY = (startY + endY) / 2
      const ctrlX1 = startX + (endX - startX) * 0.3
      const ctrlY1 = startY - 30
      const ctrlX2 = endX - (endX - startX) * 0.3
      const ctrlY2 = endY + 40
      
      result.push({
        from: parentNode.id,
        to: node.id,
        path: `M${startX} ${startY} Q${ctrlX1} ${ctrlY1} ${midX} ${midY} Q${ctrlX2} ${ctrlY2} ${endX} ${endY}`,
        strokeWidth: 6
      })
    }
  })
  
  return result
}

/**
 * Génère le tronc principal
 */
export function generateTrunk() {
  return {
    path: `M${ROOT_X - 10} ${ROOT_Y + 40} Q${ROOT_X - 15} ${ROOT_Y} ${ROOT_X - 5} ${ROOT_Y - 50} Q${ROOT_X} ${ROOT_Y - 80} ${ROOT_X} ${ROOT_Y - 80}`,
    strokeWidth: 12
  }
}

/**
 * Génère les éléments décoratifs (sol, feuillage, petites feuilles)
 */
export function generateDecorations(nodes) {
  if (!nodes || nodes.length === 0) {
    return {
      ground: { cx: ROOT_X, cy: ROOT_Y + 40, rx: 280, ry: 20 },
      foliage: { cx: ROOT_X, cy: 150, rx: 180, ry: 100 },
      leaves: []
    }
  }
  
  const minX = Math.min(...nodes.map(n => n.position.x))
  const maxX = Math.max(...nodes.map(n => n.position.x))
  const minY = Math.min(...nodes.map(n => n.position.y))
  
  return {
    ground: {
      cx: ROOT_X,
      cy: ROOT_Y + 40,
      rx: 280,
      ry: 20
    },
    foliage: {
      cx: ROOT_X,
      cy: minY - 70,
      rx: (maxX - minX) / 2 + 80,
      ry: 100
    },
    leaves: nodes.slice(1).flatMap((node) => {
      const branchMidX = (ROOT_X + node.position.x) / 2
      const branchMidY = (ROOT_Y + node.position.y) / 2
      return [
        { cx: branchMidX, cy: branchMidY + 20, rx: 15, ry: 10 },
        { cx: node.position.x - 50, cy: node.position.y - 20, rx: 12, ry: 8 }
      ]
    })
  }
}
