# Nuit de l'Info 2025 : Le Village Numérique Résistant

## À propos du projet

Ce projet a été développé en une nuit dans le cadre de l'édition 2025 de la Nuit de l'Info. Le site web se présente comme une plateforme interactive et éducative conçue pour répondre à la thématique principale : "Comment les établissements scolaires peuvent tenir tête aux Big Tech ?".

Notre objectif est de sensibiliser les élèves, les enseignants et les administrations aux enjeux de la souveraineté numérique, à la dépendance vis-à-vis des géants de la technologie (GAFAM), et de promouvoir des alternatives logicielles libres, open-source et respectueuses de la vie privée.

Le projet est accessible en ligne à l'adresse suivante : [nuitdelinfo.bessastien.fr](https://nuitdelinfo.bessastien.fr)

## Le concept de la Nuit de l'Info

La Nuit de l'Info est une compétition nationale qui met au défi des étudiants de développer une application web en une seule nuit. L'événement vise à mettre en avant la créativité, les compétences techniques et le travail d'équipe pour répondre à un grand sujet sociétal et à plusieurs défis techniques proposés par des entreprises partenaires.

## Les défis relevés

Notre équipe a choisi de participer aux défis suivants :

### 1. Sujet Principal : Le Village Numérique Résistant
- **Objectif :** Créer une plateforme pour outiller la communauté scolaire face à la dépendance aux géants du numérique. Le projet devait proposer des scénarios, des alternatives et des pistes de réflexion pour un environnement numérique plus sobre, éthique et souverain.
- **Notre approche :** Nous avons conçu une expérience gamifiée sous la forme d'un "arbre de compétences". L'utilisateur explore différentes problématiques (dépendance technologique, licences coûteuses, stockage des données hors UE) et découvre des solutions concrètes et des alternatives viables.

### 2. Défi : Visualisation Audio & ft_rube_goldberg
- **Objectifs :** Créer une expérience de visualisation audio amusante et concevoir une "machine de Rube Goldberg" (une séquence d'événements complexes pour une tâche simple).
- **Notre approche :** Nous avons lié ces deux défis. L'arbre de compétences contient une "quête annexe" (une pousse) qui mène à un visualiseur audio. Dans ce visualiseur audio, nous avons une petite machine de Rube Goldberg permettant de modifier la puissance de la musique avec un tourne-disque capricieux.
- **Dépôts associés :**
  - [Audio-Visualizer-With-Goldberg-Volume](https://github.com/Quoicouteam/Audio-Visualizer-With-Goldberg-Volume)
  - [Audio-Visualizer](https://github.com/Quoicouteam/Audio-Visualizer)
  - [VolumeGoldberg](https://github.com/Quoicouteam/VolumeGoldberg)

### 3. Défi : La zerguèm de la nuit
- **Objectifs :** Gamifier la page en transformant le curseur en pistolet laser pour tirer sur des éléments, compter les points et inclure des ennemis qui ripostent.
- **Notre approche :** Nous avons développé un mini-jeu de tir directement sur la page. Le curseur de l'utilisateur devient un viseur, lui permettant d'interagir de manière ludique avec le contenu en tirant dessus pour marquer des points.
- **Dépôt associé :** [Lazergu-m-](https://github.com/Quoicouteam/Lazergu-m-)

### 4. Easter Egg : Hidden Snake
- **Concept :** Un mini-jeu Snake est caché dans le site.
- **Activation :** En complétant des QCM éparpillés dans le site, on découvre les lettres à taper pour lancer le jeu. Le [code secret](/CODE_SECRET.md) est disponible pour les développeurs. 
- **Dépôt associé :** [Hidden-Snake](https://github.com/Quoicouteam/Hidden-Snake)

## Arborescence du projet

Le projet est structuré de la manière suivante, en utilisant le framework Vue.js et Vite :

```
/
├── public/               # Fichiers statiques et surprises
├── src/
│   ├── assets/           # CSS, polices et images
│   ├── components/       # Composants Vue réutilisables (Header, Footer, Arbre)
│   │   ├── SkillTree/    # Logique de génération et d'affichage de l'arbre
│   │   └── TreeViews/    # Vues spécifiques pour chaque nœud de l'arbre
│   ├── router/           # Configuration du routage et gestion de la progression
│   ├── troll/            # Contenu lié aux easter eggs
│   └── App.vue           # Composant racine de l'application
├── index.html            # Point d'entrée HTML
├── package.json          # Dépendances et scripts du projet
└── vite.config.js        # Configuration de Vite
```

## Installation et Lancement

Pour lancer le projet en local, suivez ces étapes :

1.  **Cloner le dépôt**
    ```sh
    git clone https://github.com/QuoicouTeam/nuit-de-l-info-2025.git
    cd nuit-de-l-info-2025
    ```

2.  **Installer les dépendances**
    Le projet utilise `npm` pour la gestion des paquets.
    ```sh
    npm install
    ```

3.  **Lancer le serveur de développement**
    Cette commande démarre un serveur local avec rechargement à chaud.
    ```sh
    npm run dev
    ```

4.  **Compiler pour la production**
    Pour créer une version optimisée du site.
    ```sh
    npm run build
    ```

## Collaborateurs

Ce projet a été réalisé par une équipe d'étudiants de l'EPSI Lyon :

- Anton Hladyshev
- Lucas De Poorter
- Marton Valet
- Sacha Trouvé
- Owen Exiga
- Matthew Pouce-Tassin
- Stefan Moisoiu
- Sébastien Dabert

---

*Fait avec beaucoup de café et de boissons énergisantes.*

