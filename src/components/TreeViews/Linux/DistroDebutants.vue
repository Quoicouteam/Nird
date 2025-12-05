<template>
  <div class="page">
    <!-- Décoration de fond végétale -->
    <div class="nature-bg">
      <div class="leaf leaf-1">🍃</div>
      <div class="leaf leaf-2">🌿</div>
      <div class="leaf leaf-3">🍂</div>
      <div class="leaf leaf-4">🌱</div>
      <div class="leaf leaf-5">🍃</div>
      <div class="leaf leaf-6">🌿</div>
    </div>

    <article class="content">
      <div class="header">
        <div class="header-icon">🐧</div>
        <h1>Distro Débutants</h1>
        <p class="subtitle">Les meilleures distributions Linux pour bien commencer</p>
      </div>

      <section class="section">
        <h2>🌱 Pourquoi Choisir Linux ?</h2>
        <p>
          Linux offre une alternative gratuite, sécurisée et respectueuse de la vie privée à Windows. 
          Contrairement aux idées reçues, il existe des distributions Linux très simples d'utilisation, 
          adaptées aux débutants qui ne veulent pas se plonger dans la ligne de commande.
        </p>
      </section>

      <section class="section">
        <h2>⭐ Les Meilleures Distributions pour Débuter</h2>

        <div class="distro-card">
          <div class="distro-header">
            <div class="distro-icon">🎀</div>
            <h3>Ubuntu (ou Linux Mint)</h3>
            <span class="difficulty">Facile</span>
          </div>
          <p>
            <strong>Linux Mint</strong> est la distribution la plus recommandée pour les débutants. 
            Elle est basée sur Ubuntu mais avec une interface encore plus simple et conviviale.
          </p>
          <ul class="pros">
            <li>✅ Interface graphique très intuitive (Cinnamon)</li>
            <li>✅ Installation automatisée en quelques clics</li>
            <li>✅ Énorme communauté (tutoriels en français)</li>
            <li>✅ Logiciels pré-installés (navigateur, mail, suite office, etc.)</li>
            <li>✅ Mise à jour simple et non-intrusive</li>
          </ul>
          <p class="tip">💡 <strong>Conseil :</strong> Téléchargez Linux Mint depuis <code>linuxmint.com</code></p>
        </div>

        <div class="distro-card">
          <div class="distro-header">
            <div class="distro-icon">🦘</div>
            <h3>Ubuntu</h3>
            <span class="difficulty">Très facile</span>
          </div>
          <p>
            La distribution Linux la plus populaire au monde. Version officielle très bien documentée.
          </p>
          <ul class="pros">
            <li>✅ Support professionnel disponible (Canonical)</li>
            <li>✅ Mise à jour garantie pendant 5 ans</li>
            <li>✅ Énorme magasin de logiciels (Ubuntu Software Center)</li>
            <li>✅ Versions de bureau modernes (GNOME)</li>
          </ul>
          <p class="info">ℹ️ Plus minimaliste que Linux Mint, mais tout aussi accessible.</p>
        </div>

        <div class="distro-card">
          <div class="distro-header">
            <div class="distro-icon">🦊</div>
            <h3>Fedora</h3>
            <span class="difficulty">Facile</span>
          </div>
          <p>
            Soutenue par Red Hat, Fedora est une distribution à jour et moderne, 
            parfaite pour ceux qui veulent les dernières technologies sans complexité.
          </p>
          <ul class="pros">
            <li>✅ Très actuelle (mise à jour tous les 6 mois)</li>
            <li>✅ Robuste et stable malgré son modernité</li>
            <li>✅ Grande communauté active</li>
            <li>✅ Préparation idéale pour les professionnels</li>
          </ul>
        </div>

        <div class="distro-card">
          <div class="distro-header">
            <div class="distro-icon">🎨</div>
            <h3>Elementary OS</h3>
            <span class="difficulty">Très facile</span>
          </div>
          <p>
            Si l'esthétique est importante pour vous. Elementary OS est magnifiquement designé 
            et extrêmement simple à utiliser.
          </p>
          <ul class="pros">
            <li>✅ Magnifique interface (App Store propre et minimaliste)</li>
            <li>✅ Légère et rapide</li>
            <li>✅ Support des anciens PCs</li>
            <li>✅ Gratuit mais paiement encouragé</li>
          </ul>
        </div>
      </section>

      <section class="section">
        <h2>🛠️ Étapes pour Installer</h2>
        <ol class="installation-steps">
          <li>
            <strong>Télécharger l'ISO</strong>
            <p>Allez sur le site officiel et téléchargez l'image disque (.iso) de la distribution</p>
          </li>
          <li>
            <strong>Créer une clé USB bootable</strong>
            <p>Utilisez un outil gratuit comme Balena Etcher ou Rufus pour créer une clé d'installation</p>
          </li>
          <li>
            <strong>Booter sur la clé USB</strong>
            <p>Redémarrez votre ordinateur et sélectionnez la clé USB au démarrage (généralement F12 ou Suppr)</p>
          </li>
          <li>
            <strong>Installer la distribution</strong>
            <p>Suivez les étapes simples d'installation (langue, clavier, fuseau horaire, partition)</p>
          </li>
          <li>
            <strong>Redémarrer et Profiter</strong>
            <p>Après installation, votre PC démarre avec Linux. Bienvenue dans le monde libre ! 🎉</p>
          </li>
        </ol>
      </section>

      <section class="section">
        <h2>⚠️ Avant de Commencer</h2>
        <div class="warning-box">
          <p>
            <strong>Conseil Important :</strong> Essayez d'abord Linux en "live" avant d'installer.
            Insérez la clé USB et démarrez sans formater votre disque. Vous pouvez explorer le système 
            et voir si vous l'aimez avant de l'installer.
          </p>
          <p style="margin-top: 0.75rem;">
            <strong>Sauvegarde :</strong> Si vous avez des données importantes, faites une copie avant d'installer Linux.
          </p>
        </div>
      </section>

      <section class="section">
        <h2>📚 Ressources Utiles</h2>
        <ul class="resources">
          <li>🌐 <a href="https://www.linuxmint.com" target="_blank">Linux Mint Official</a></li>
          <li>🌐 <a href="https://ubuntu.com" target="_blank">Ubuntu Official</a></li>
          <li>🌐 <a href="https://getfedora.org" target="_blank">Fedora Official</a></li>
          <li>🌐 <a href="https://elementary.io" target="_blank">Elementary OS Official</a></li>
          <li>📖 Communauté française : Linux.fr, Ubuntu-fr.org</li>
        </ul>
      </section>

      <section class="section conclusion">
        <h2>🌍 Conclusion</h2>
        <p>
          Passer à Linux n'a jamais été aussi facile. Les distributions modernes offrent une expérience 
          utilisateur fluide et intuitive, sans sacrifier la puissance et la liberté. 
          Votre ordinateur retrouvera une nouvelle jeunesse, et vous reprendrez le contrôle de votre numérique.
        </p>
      </section>

      <section class="section call-to-action">
        <h3>📍 Prochaines étapes</h3>
        <div class="choices-grid">
          <button class="choice-button" @click="continueTo('distro-gpu')">
            <span class="choice-icon">🎮</span>
            <span class="choice-title">Distro Gaming/GPU</span>
            <span class="choice-desc">Linux pour le graphisme et jeux</span>
          </button>
          <button class="choice-button" @click="continueTo('/')">
            <span class="choice-icon">🌳</span>
            <span class="choice-title">Retour à l'arbre</span>
            <span class="choice-desc">Explorer d'autres sujets</span>
          </button>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { unlockPage } from '../../../router/progress.js'
import { navigateToPage } from '../../../router/progress.js'

const router = useRouter()

onMounted(() => {
  unlockPage('distro-debutants')
})

function continueTo(pageId) {
  navigateToPage('distro-debutants', pageId, router)
}
</script>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #f0f4f8 100%);
  overflow: hidden;
}

.nature-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
}

.leaf {
  position: absolute;
  font-size: 2rem;
  animation: float-gentle 6s ease-in-out infinite;
}

.leaf-1 { top: 10%; left: 5%; animation-delay: 0s; }
.leaf-2 { top: 20%; right: 10%; animation-delay: 1s; }
.leaf-3 { bottom: 20%; left: 15%; animation-delay: 2s; }
.leaf-4 { top: 50%; right: 5%; animation-delay: 1.5s; }
.leaf-5 { bottom: 30%; right: 20%; animation-delay: 0.5s; }
.leaf-6 { top: 60%; left: 10%; animation-delay: 2.5s; }

@keyframes float-gentle {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 3px solid #5a7d6a;
}

.header-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  animation: pulse-grow 2s ease-in-out infinite;
}

h1 {
  color: #2e4f3b;
  font-size: 2.5rem;
  margin: 0.5rem 0;
  font-weight: 700;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
  margin: 0;
}

.section {
  margin: 2rem 0;
}

h2 {
  color: #5a7d6a;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-left: 4px solid #7dab8a;
  padding-left: 1rem;
}

p {
  color: #444;
  line-height: 1.8;
  margin: 1rem 0;
}

.distro-card {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-left: 5px solid #7dab8a;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.distro-card:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(90, 125, 106, 0.15);
}

.distro-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.distro-icon {
  font-size: 2rem;
}

.distro-card h3 {
  color: #2e4f3b;
  font-size: 1.4rem;
  margin: 0;
  flex: 1;
}

.difficulty {
  background: #7dab8a;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.pros {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  list-style: none;
  padding-left: 1rem;
}

.pros li {
  color: #2e4f3b;
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.pros li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #7dab8a;
  font-weight: bold;
}

.tip, .info {
  background: #e8f5e9;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  color: #2e4f3b;
  font-style: italic;
}

code {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  color: #d32f2f;
}

.installation-steps {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
  counter-reset: step-counter;
  list-style: none;
}

.installation-steps li {
  counter-increment: step-counter;
  margin-bottom: 1.5rem;
  padding-left: 3rem;
  position: relative;
  color: #444;
}

.installation-steps li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 0;
  background: #7dab8a;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.installation-steps strong {
  color: #2e4f3b;
  font-size: 1.1rem;
}

.warning-box {
  background: #fff3e0;
  border-left: 5px solid #ff9800;
  padding: 1.5rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.warning-box p {
  color: #5d4037;
  margin: 0.5rem 0;
}

.resources {
  list-style: none;
  padding: 0;
}

.resources li {
  padding: 0.75rem 0;
  color: #2e4f3b;
  border-bottom: 1px solid #e0e0e0;
}

.resources li:last-child {
  border-bottom: none;
}

.resources a {
  color: #7dab8a;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.resources a:hover {
  color: #5a7d6a;
  text-decoration: underline;
}

.conclusion {
  text-align: center;
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.conclusion p {
  font-size: 1.1rem;
  color: #2e4f3b;
}

.call-to-action {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  text-align: center;
}

.call-to-action h3 {
  color: #2e4f3b;
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
}

.choices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.choice-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f9fdf8 100%);
  border: 2px solid #d4e5da;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.choice-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #5a7d6a, #7dab8a, #5a7d6a);
  background-size: 200% 100%;
  transform: scaleX(0);
  transition: transform 0.4s ease;
  animation: shimmer 2s infinite;
}

.choice-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(93, 175, 125, 0.15);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.choice-button:hover {
  border-color: #5a7d6a;
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(46, 79, 59, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  background: linear-gradient(135deg, #ffffff 0%, #f0f7f3 100%);
}

.choice-button:hover::before {
  transform: scaleX(1);
}

.choice-button:hover::after {
  width: 300px;
  height: 300px;
}

.choice-button:active {
  transform: translateY(-4px) scale(1);
}

.choice-icon { 
  font-size: 2.5rem; 
  margin-bottom: 1rem;
  display: inline-block;
  animation: float-gentle 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.choice-button:hover .choice-icon {
  animation: pulse-grow 0.6s ease-in-out;
}

.choice-title { 
  font-weight: 700; 
  color: #2e4f3b; 
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.choice-button:hover .choice-title {
  color: #3d6b4f;
  animation: glow 2s ease-in-out infinite;
}

.choice-desc { 
  color: #666; 
  font-size: 0.95rem;
}

@keyframes float-gentle {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes pulse-grow {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

@keyframes glow {
  0%, 100% { text-shadow: 0 0 5px rgba(90, 125, 106, 0.3); }
  50% { text-shadow: 0 0 15px rgba(90, 125, 106, 0.6); }
}

@media (max-width: 768px) {
  .content {
    padding: 1.5rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  .distro-card {
    padding: 1rem;
  }

  .choices-grid {
    grid-template-columns: 1fr;
  }
}
</style>
