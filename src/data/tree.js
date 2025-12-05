export const skillTree = {
  id: 'presentation',
  title: 'Présentation NIRD',
  children: [
    {
      id: 'confidentialite',
      title: 'Confidentialité (RGPD)',
      children: [
        {
          id: 'stockage-hors-ue',
          title: 'Stockage des données hors UE',
          children: [
            {
              id: 'open-source',
              title: 'Open Source',
              children: []
            }
          ]
        }
      ]
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

export function findNode(tree, id) {
  if (tree.id === id) return tree
  if (tree.children) {
    for (const child of tree.children) {
      const found = findNode(child, id)
      if (found) return found
    }
  }
  return
}

export function getPathToNode(tree, id, path = []) {
  if (tree.id === id) return [...path, tree]
  if (tree.children) {
    for (const child of tree.children) {
      const found = getPathToNode(child, id, [...path, tree])
      if (found) return found
    }
  }
  return
}

