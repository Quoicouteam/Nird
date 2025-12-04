// Structure de l'arbre de compétences NIRD
// Chaque nœud a un id, un titre, et ses enfants

export const skillTree = {
  id: 'presentation',
  title: 'Présentation NIRD',
  children: [
    {
      id: 'confidentialite',
      title: 'Confidentialité (RGPD)',
      children: []
    },
    {
      id: 'licences',
      title: 'Problématique licences coûteuses',
      children: []
    },
    {
      id: 'sobriete',
      title: 'Sobriété & Écologie',
      children: []
    }
  ]
}

// Fonction pour trouver un nœud par son ID
export function findNode(tree, id) {
  if (tree.id === id) return tree
  if (tree.children) {
    for (const child of tree.children) {
      const found = findNode(child, id)
      if (found) return found
    }
  }
  return null
}

// Fonction pour obtenir le chemin vers un nœud
export function getPathToNode(tree, id, path = []) {
  if (tree.id === id) return [...path, tree]
  if (tree.children) {
    for (const child of tree.children) {
      const found = getPathToNode(child, id, [...path, tree])
      if (found) return found
    }
  }
  return null
}

