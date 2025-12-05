<template>
  <div class="page-wrapper">
    <!-- Décoration de fond végétale -->
    <div class="nature-bg">
      <div class="leaf leaf-1">🍃</div>
      <div class="leaf leaf-2">🌿</div>
      <div class="leaf leaf-3">🍂</div>
      <div class="leaf leaf-4">🌱</div>
      <div class="leaf leaf-5">🍃</div>
      <div class="leaf leaf-6">🌿</div>
    </div>

    <div class="page-container">
      <article class="content-card">
        <!-- HEADER -->
        <header class="page-header">
          <div class="header-icon">🌱</div>
          <h1>Distributions Linux pour Débutants</h1>
          <p class="subtitle">Les meilleures distributions Linux pour bien commencer sans stress</p>
        </header>

        <!-- INTRODUCTION -->
        <section class="page-section">
          <h2>🎯 Choisir la Bonne Distribution</h2>
          <p>
            Pour les débutants, le choix de la distribution est crucial. Vous voulez quelque chose de simple, 
            intuitif, avec une large communauté pour vous aider. Voici notre sélection des meilleures distributions 
            pour débuter sereinement avec Linux.
          </p>
        </section>

        <!-- LES DISTRIBUTIONS -->
        <section class="page-section">
          <h2>⭐ Top 4 des Distributions Débutants</h2>

          <!-- LINUX MINT -->
          <div class="distro-card featured">
            <div class="distro-header">
              <div class="distro-icon">🎀</div>
              <h3>Linux Mint</h3>
              <span class="badge beginner">🏆 Notre Choix #1</span>
            </div>
            <p class="distro-tagline">
              La distribution la plus recommandée pour les débutants. Interface familière, 
              simple et élégante.
            </p>
            
            <div class="pros-cons">
              <div class="pros-section">
                <h4>✅ Points Forts</h4>
                <ul>
                  <li>Interface Cinnamon ultra-intuitive (ressemble à Windows 7)</li>
                  <li>Installation en 10 minutes chrono</li>
                  <li>Logiciels essentiels pré-installés (navigateur, bureautique, lecteur multimédia)</li>
                  <li>Énorme communauté francophone</li>
                  <li>Mises à jour simples et non-intrusives</li>
                  <li>Basée sur Ubuntu (donc compatible avec tous les tutoriels Ubuntu)</li>
                </ul>
              </div>
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://linuxmint.com" target="_blank">linuxmint.com</a></p>
              <p>💾 <strong>Configuration minimale :</strong> 2 Go RAM, 20 Go disque</p>
            </div>
          </div>

          <!-- UBUNTU -->
          <div class="distro-card">
            <div class="distro-header">
              <div class="distro-icon">🦘</div>
              <h3>Ubuntu</h3>
              <span class="badge easy">Très Facile</span>
            </div>
            <p class="distro-tagline">
              La distribution Linux la plus populaire au monde. Standard de facto pour les débutants.
            </p>
            
            <div class="pros-cons">
              <div class="pros-section">
                <h4>✅ Points Forts</h4>
                <ul>
                  <li>Support professionnel disponible (Canonical)</li>
                  <li>Mises à jour garanties pendant 5 ans (LTS)</li>
                  <li>Ubuntu Software Center : boutique de logiciels simple</li>
                  <li>Interface GNOME moderne et épurée</li>
                  <li>Documentation exhaustive en français</li>
                  <li>Compatible avec une énorme bibliothèque de logiciels</li>
                </ul>
              </div>
            </div>

            <div class="info-box">
              <p>ℹ️ Plus minimaliste que Linux Mint, mais tout aussi accessible. Idéal si vous aimez les interfaces modernes.</p>
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://ubuntu.com" target="_blank">ubuntu.com</a></p>
              <p>💾 <strong>Configuration minimale :</strong> 4 Go RAM, 25 Go disque</p>
            </div>
          </div>

          <!-- FEDORA -->
          <div class="distro-card">
            <div class="distro-header">
              <div class="distro-icon">🦊</div>
              <h3>Fedora Workstation</h3>
              <span class="badge easy">Facile</span>
            </div>
            <p class="distro-tagline">
              Moderne, élégante et professionnelle. Parfaite si vous voulez les dernières technologies.
            </p>
            
            <div class="pros-cons">
              <div class="pros-section">
                <h4>✅ Points Forts</h4>
                <ul>
                  <li>Soutenue par Red Hat (entreprise leader Linux)</li>
                  <li>Toujours à jour avec les dernières innovations</li>
                  <li>Très stable malgré son côté "cutting-edge"</li>
                  <li>Interface GNOME optimisée</li>
                  <li>Excellente pour les développeurs</li>
                  <li>Mises à jour tous les 6 mois</li>
                </ul>
              </div>
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://getfedora.org" target="_blank">getfedora.org</a></p>
              <p>💾 <strong>Configuration minimale :</strong> 4 Go RAM, 20 Go disque</p>
            </div>
          </div>

          <!-- ELEMENTARY OS -->
          <div class="distro-card">
            <div class="distro-header">
              <div class="distro-icon">🎨</div>
              <h3>Elementary OS</h3>
              <span class="badge easy">Très Facile</span>
            </div>
            <p class="distro-tagline">
              Si l'esthétique compte pour vous. Design magnifique inspiré de macOS.
            </p>
            
            <div class="pros-cons">
              <div class="pros-section">
                <h4>✅ Points Forts</h4>
                <ul>
                  <li>Interface Pantheon : design épuré et élégant</li>
                  <li>App Store propre et minimaliste</li>
                  <li>Légère et rapide</li>
                  <li>Parfaite pour les anciens utilisateurs Mac</li>
                  <li>Support des anciens PC</li>
                  <li>Philosophie "pay what you want" (gratuit ou don)</li>
                </ul>
              </div>
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://elementary.io" target="_blank">elementary.io</a></p>
              <p>💾 <strong>Configuration minimale :</strong> 4 Go RAM, 15 Go disque</p>
            </div>
          </div>
        </section>

        <!-- INSTALLATION -->
        <section class="page-section">
          <h2>🛠️ Comment Installer une Distribution ?</h2>
          
          <div class="install-steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Télécharger l'ISO</h4>
                <p>Allez sur le site officiel de la distribution et téléchargez le fichier .iso (image disque).</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Créer une clé USB bootable</h4>
                <p>Utilisez un outil gratuit comme <strong>Balena Etcher</strong> (Windows/Mac/Linux) ou <strong>Rufus</strong> (Windows) pour créer une clé d'installation.</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Essayer en "Live"</h4>
                <p>Redémarrez votre PC, appuyez sur F12 (ou Suppr/F2) pour accéder au menu de boot, sélectionnez la clé USB. 
                Vous pouvez tester Linux sans rien installer !</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Installer si vous êtes convaincu</h4>
                <p>Cliquez sur "Installer" sur le bureau. L'assistant vous guidera : langue, clavier, fuseau horaire, partition du disque. 
                Tout est expliqué en français !</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h4>Redémarrer et profiter</h4>
                <p>Après 10-15 minutes, redémarrez. Votre PC démarre maintenant sous Linux. Bienvenue dans le monde libre ! 🎉</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CONSEILS -->
        <section class="page-section">
          <h2>💡 Conseils Pratiques</h2>
          
          <div class="tip-card warning">
            <h4>⚠️ Avant de Commencer</h4>
            <ul>
              <li><strong>Sauvegardez vos données importantes</strong> si vous comptez remplacer Windows.</li>
              <li><strong>Testez en "live"</strong> avant d'installer définitivement.</li>
              <li>Vous pouvez installer Linux <strong>à côté de Windows</strong> (dual-boot) pour garder les deux systèmes.</li>
            </ul>
          </div>

          <div class="tip-card success">
            <h4>✅ Après l'Installation</h4>
            <ul>
              <li><strong>Mettez à jour le système</strong> (le gestionnaire de mises à jour vous le proposera).</li>
              <li><strong>Installez vos logiciels favoris</strong> via la logithèque (équivalent du Play Store).</li>
              <li><strong>Explorez les paramètres</strong> pour personnaliser votre expérience.</li>
              <li><strong>Rejoignez la communauté</strong> : forums, Discord, Reddit r/linuxfr.</li>
            </ul>
          </div>
        </section>

        <!-- RESSOURCES -->
        <section class="page-section">
          <h2>📚 Ressources Utiles</h2>
          <ul class="resources-list">
            <li>🌐 <a href="https://www.linuxmint.com" target="_blank">Linux Mint Official</a></li>
            <li>🌐 <a href="https://ubuntu.com" target="_blank">Ubuntu Official</a></li>
            <li>🌐 <a href="https://getfedora.org" target="_blank">Fedora Official</a></li>
            <li>🌐 <a href="https://elementary.io" target="_blank">Elementary OS Official</a></li>
            <li>📖 <a href="https://www.linux.fr" target="_blank">Linux.fr</a> - Communauté francophone</li>
            <li>📖 <a href="https://ubuntu-fr.org" target="_blank">Ubuntu-fr.org</a> - Forum d'entraide</li>
            <li>🎥 YouTube : Recherchez "Linux Mint tutoriel français" pour des vidéos pas-à-pas</li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { unlockPage } from '../../../router/progress.js'
import { navigateToPage } from '../../../router/progress.js'
import '../../../assets/pages-common.css'

const router = useRouter()

onMounted(() => {
  unlockPage('linux-distros-debutants')
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  } catch (e) {}
})

function continueTo(pageId) {
  navigateToPage('linux-distros-debutants', pageId, router)
}
</script>

<style scoped>
/* Styles spécifiques à LinuxDistrosDebutants.vue */

.distro-card {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-left: 5px solid #7dab8a;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.distro-card.featured {
  border-left-width: 8px;
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  box-shadow: 0 4px 20px rgba(90, 125, 106, 0.15);
}

.distro-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(90, 125, 106, 0.2);
}

.distro-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.distro-icon {
  font-size: 2.5rem;
}

.distro-card h3 {
  color: #2e4f3b;
  font-size: 1.6rem;
  margin: 0;
  flex: 1;
}

.badge {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge.beginner {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #7d5e00;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
}

.badge.easy {
  background: #c8e6c9;
  color: #2e7d32;
}

.distro-tagline {
  font-size: 1.05rem;
  color: #666;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.pros-cons {
  margin: 1.5rem 0;
}

.pros-section h4 {
  color: #2e7d32;
  margin-bottom: 0.75rem;
}

.pros-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros-section li {
  padding: 0.5rem 0 0.5rem 1.75rem;
  position: relative;
  color: #555;
}

.pros-section li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #7dab8a;
  font-weight: bold;
  font-size: 1.2rem;
}

.download-box {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.download-box p {
  margin: 0.5rem 0;
  color: #555;
}

.download-box a {
  color: #2196f3;
  text-decoration: none;
  font-weight: 600;
}

.download-box a:hover {
  text-decoration: underline;
}

.info-box {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #2196f3;
}

.info-box p {
  margin: 0;
  color: #0d47a1;
}

.install-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #5a7d6a, #7dab8a);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(90, 125, 106, 0.3);
}

.step-content {
  flex: 1;
}

.step-content h4 {
  color: #2e4f3b;
  margin: 0 0 0.5rem 0;
}

.step-content p {
  margin: 0;
  color: #555;
  line-height: 1.7;
}

.tip-card {
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.tip-card.warning {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-left: 5px solid #ff9800;
}

.tip-card.success {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-left: 5px solid #4caf50;
}

.tip-card h4 {
  margin: 0 0 1rem 0;
  color: #2e4f3b;
}

.tip-card ul {
  margin: 0;
  padding-left: 1.5rem;
}

.tip-card li {
  margin: 0.5rem 0;
  color: #555;
}

.resources-list {
  list-style: none;
  padding: 0;
}

.resources-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.resources-list li:last-child {
  border-bottom: none;
}

.resources-list a {
  color: #2196f3;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.resources-list a:hover {
  color: #1565c0;
  text-decoration: underline;
}

.call-to-action {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.call-to-action h3 {
  color: #2e4f3b;
  font-size: 1.3rem;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

@media (max-width: 768px) {
  .distro-card {
    padding: 1.5rem;
  }
  
  .step {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
