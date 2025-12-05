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
          <div class="header-icon">🎮</div>
          <h1>Distributions Linux Gaming & GPU</h1>
          <p class="subtitle">Linux pour les gamers, créatifs et professionnels du graphisme</p>
        </header>

        <!-- INTRODUCTION -->
        <section class="page-section">
          <h2>🎯 Linux pour le Gaming et les Graphismes Intensifs</h2>
          <p>
            Vous êtes gamer, monteur vidéo, artiste 3D ou développeur de jeux ? Linux n'est plus un choix exotique, 
            c'est devenu une plateforme sérieuse pour le gaming et la création graphique professionnelle. 
            Avec les bons drivers et les bonnes distributions, Linux peut rivaliser (voire dépasser) Windows en performance.
          </p>
        </section>

        <!-- POURQUOI LINUX POUR LE GAMING ? -->
        <section class="page-section">
          <h2>🚀 Pourquoi Linux pour le Gaming & GPU ?</h2>
          
          <div class="benefit-grid">
            <div class="benefit-item">
              <div class="benefit-icon">💰</div>
              <h4>Gratuit</h4>
              <p>Pas de licence Windows ni d'abonnements. Économisez 300€+ pour investir dans du matériel.</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">⚡</div>
              <h4>Performance</h4>
              <p>Moins de processus en arrière-plan = plus de ressources pour vos jeux et logiciels.</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🛡️</div>
              <h4>Stabilité</h4>
              <p>Pas de ralentissements mystérieux, pas de redémarrages forcés pendant une session.</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🎮</div>
              <h4>Proton/Steam</h4>
              <p>Des milliers de jeux Windows tournent parfaitement via Proton (couche de compatibilité de Valve).</p>
            </div>
          </div>
        </section>

        <!-- LES DISTRIBUTIONS -->
        <section class="page-section">
          <h2>🏆 Top Distributions pour Gaming & GPU</h2>

          <!-- UBUNTU + DRIVERS -->
          <div class="distro-card featured">
            <div class="distro-header">
              <div class="distro-icon">🦘</div>
              <h3>Ubuntu (avec drivers propriétaires)</h3>
              <span class="badge recommended">🏆 Meilleur Choix</span>
            </div>
            <p class="distro-tagline">
              La base la plus flexible pour le gaming et la création. Installation simplifiée des drivers NVIDIA/AMD.
            </p>
            
            <div class="pros-section">
              <h4>✅ Points Forts</h4>
              <ul>
                <li>Support officiel des drivers NVIDIA et AMD</li>
                <li>Installation des drivers en un clic (Paramètres → Pilotes)</li>
                <li>Compatibilité maximale avec Steam et Proton</li>
                <li>Support Vulkan, OpenGL, CUDA</li>
                <li>Communauté gaming très active</li>
                <li>Tutoriels abondants pour optimiser les performances</li>
              </ul>
            </div>

            <div class="install-tip">
              <strong>💡 Installation des drivers :</strong> Paramètres → Logiciels & Mises à jour → Onglet "Pilotes supplémentaires"
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://ubuntu.com" target="_blank">ubuntu.com</a></p>
              <p>💾 <strong>Config recommandée :</strong> 8 Go RAM, GPU NVIDIA GTX 900+ ou AMD RX 500+</p>
            </div>
          </div>

          <!-- POP!_OS -->
          <div class="distro-card">
            <div class="distro-header">
              <div class="distro-icon">🎮</div>
              <h3>Pop!_OS</h3>
              <span class="badge gaming">Gaming-Ready</span>
            </div>
            <p class="distro-tagline">
              Distribution gaming-focused par System76. Drivers NVIDIA pré-installés sur la version ISO dédiée.
            </p>
            
            <div class="pros-section">
              <h4>✅ Points Forts</h4>
              <ul>
                <li>Version ISO spéciale avec drivers NVIDIA intégrés</li>
                <li>Optimisée pour le gaming et les workstations</li>
                <li>Interface COSMIC (basée sur GNOME) élégante</li>
                <li>Gestion automatique des GPU hybrides (laptop gaming)</li>
                <li>Excellente pour les créatifs (montage vidéo, 3D)</li>
                <li>Basée sur Ubuntu (donc compatible)</li>
              </ul>
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://pop.system76.com" target="_blank">pop.system76.com</a></p>
              <p>💡 Choisissez la version NVIDIA si vous avez une carte NVIDIA !</p>
            </div>
          </div>

          <!-- FEDORA -->
          <div class="distro-card">
            <div class="distro-header">
              <div class="distro-icon">🦊</div>
              <h3>Fedora Workstation</h3>
              <span class="badge pro">Professionnel</span>
            </div>
            <p class="distro-tagline">
              Idéale pour les professionnels du graphisme et de la vidéo. Stack graphique très à jour.
            </p>
            
            <div class="pros-section">
              <h4>✅ Points Forts</h4>
              <ul>
                <li>Mises à jour régulières des stacks graphiques</li>
                <li>Excellent support Wayland et X11</li>
                <li>Performance optimale pour Blender, Krita, GIMP, DaVinci Resolve</li>
                <li>Infrastructure de compilation optimisée</li>
                <li>Largement utilisée par les studios professionnels</li>
                <li>Support Red Hat (entreprise leader Linux)</li>
              </ul>
            </div>

            <div class="info-box">
              <p>ℹ️ Plus technique qu'Ubuntu, mais offre une meilleure stabilité pour du travail professionnel.</p>
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://getfedora.org" target="_blank">getfedora.org</a></p>
            </div>
          </div>

          <!-- ARCH / ENDEAVOUROS -->
          <div class="distro-card">
            <div class="distro-header">
              <div class="distro-icon">🕷️</div>
              <h3>Arch Linux / EndeavourOS</h3>
              <span class="badge expert">Expert</span>
            </div>
            <p class="distro-tagline">
              Pour les utilisateurs avancés. Contrôle total, performance maximale.
            </p>
            
            <div class="pros-section">
              <h4>✅ Points Forts</h4>
              <ul>
                <li>Rolling release = toujours la dernière version de tout</li>
                <li>Accès immédiat aux drivers GPU les plus récents</li>
                <li>Performance maximale (système épuré, zéro bloatware)</li>
                <li>Très flexible pour configurations personnalisées</li>
                <li>Wiki Arch : meilleure documentation Linux au monde</li>
                <li>EndeavourOS = Arch facile à installer</li>
              </ul>
            </div>

            <div class="warning-box">
              <p>⚠️ <strong>Attention :</strong> Nécessite des connaissances techniques. Déconseillé pour débuter, 
              mais inégalé pour les experts qui veulent extraire 100% de leur matériel.</p>
            </div>

            <div class="download-box">
              <p>📥 <strong>Téléchargement :</strong> <a href="https://endeavouros.com" target="_blank">endeavouros.com</a> (Arch facile)</p>
            </div>
          </div>
        </section>

        <!-- LOGICIELS GRAPHIQUES -->
        <section class="page-section">
          <h2>🎨 Logiciels Graphiques & Gaming sur Linux</h2>
          
          <div class="software-category">
            <h3>🎮 Gaming</h3>
            <div class="software-grid">
              <div class="software-item">
                <h4>Steam</h4>
                <p>Plateforme de jeu officielle. Proton intégré pour jouer aux jeux Windows.</p>
                <span class="status native">Natif Linux</span>
              </div>
              <div class="software-item">
                <h4>Lutris</h4>
                <p>Lance tous les jeux (Epic, GOG, Battle.net, etc.)</p>
                <span class="status native">Open Source</span>
              </div>
              <div class="software-item">
                <h4>Heroic Games Launcher</h4>
                <p>Pour les jeux Epic Games Store et GOG</p>
                <span class="status native">Open Source</span>
              </div>
            </div>
          </div>

          <div class="software-category">
            <h3>🎨 Création Graphique 2D/3D</h3>
            <div class="software-grid">
              <div class="software-item">
                <h4>Blender</h4>
                <p>Suite 3D complète : modélisation, animation, rendu. Standard professionnel mondial.</p>
                <span class="status pro">Studio</span>
              </div>
              <div class="software-item">
                <h4>GIMP</h4>
                <p>Équivalent de Photoshop. Retouche et création 2D complète.</p>
                <span class="status mature">Mature</span>
              </div>
              <div class="software-item">
                <h4>Krita</h4>
                <p>Peinture numérique et dessin. Préféré par les artistes.</p>
                <span class="status mature">Artistique</span>
              </div>
              <div class="software-item">
                <h4>Inkscape</h4>
                <p>Design vectoriel. Équivalent d'Illustrator.</p>
                <span class="status mature">Design</span>
              </div>
            </div>
          </div>

          <div class="software-category">
            <h3>🎬 Montage Vidéo</h3>
            <div class="software-grid">
              <div class="software-item">
                <h4>DaVinci Resolve</h4>
                <p>Montage vidéo professionnel. Aussi puissant que Premiere Pro.</p>
                <span class="status pro">Hollywood</span>
              </div>
              <div class="software-item">
                <h4>Kdenlive</h4>
                <p>Montage vidéo open source complet et accessible.</p>
                <span class="status native">Open Source</span>
              </div>
            </div>
          </div>
        </section>

        <!-- OPTIMISATION GPU -->
        <section class="page-section">
          <h2>🔧 Optimisation GPU</h2>
          
          <div class="optimization-section">
            <h3>Installation des Drivers</h3>
            <div class="code-block">
              <p><strong>Pour Ubuntu/Pop!_OS (NVIDIA) :</strong></p>
              <code>sudo ubuntu-drivers install</code>
              <p style="margin-top: 1rem;"><strong>Pour Ubuntu/Pop!_OS (AMD) :</strong></p>
              <code>sudo apt install mesa-vulkan-drivers</code>
            </div>
          </div>

          <div class="optimization-section">
            <h3>Vérification de votre GPU</h3>
            <div class="code-block">
              <code>lspci | grep -i vga</code>
              <p style="margin-top: 0.75rem;">ou (pour NVIDIA) :</p>
              <code>nvidia-smi</code>
            </div>
          </div>

          <div class="optimization-section">
            <h3>Performance Gaming avec Proton</h3>
            <p>
              🎮 <strong>Proton</strong> est la couche de compatibilité de Valve qui permet de lancer 
              les jeux Windows sur Linux. Performances généralement identiques, parfois meilleures.
            </p>
            <p>
              📊 <strong>Vérifier la compatibilité :</strong> Visitez <a href="https://www.protondb.com" target="_blank">ProtonDB</a> 
              pour voir si votre jeu tourne sous Linux.
            </p>
          </div>
        </section>

        <!-- COMPARAISON -->
        <section class="page-section">
          <h2>⚖️ Linux vs Windows pour le Gaming & Graphisme</h2>
          
          <div class="content-card no-padding">
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Linux</th>
                  <th>Windows</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Coût</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Gratuit</td>
                  <td style="color: #c62828; font-weight: 600;">259-359€</td>
                </tr>
                <tr>
                  <td><strong>Logiciels Pro</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Tous gratuits (Blender, DaVinci...)</td>
                  <td style="color: #c62828; font-weight: 600;">Coûts de licences élevés</td>
                </tr>
                <tr>
                  <td><strong>Performance GPU</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Excellent (drivers modernes)</td>
                  <td style="color: #f57f17; font-weight: 600;">Bon</td>
                </tr>
                <tr>
                  <td><strong>Gaming natif</strong></td>
                  <td style="color: #f57f17; font-weight: 600;">Croissant (milliers de jeux)</td>
                  <td style="color: #2e7d32; font-weight: 600;">Tous les jeux</td>
                </tr>
                <tr>
                  <td><strong>Gaming via Proton</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">~80% des jeux Windows</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td><strong>Stabilité</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Très stable</td>
                  <td style="color: #c62828; font-weight: 600;">Ralentissements courants</td>
                </tr>
                <tr>
                  <td><strong>Vie Privée</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Respectée</td>
                  <td style="color: #c62828; font-weight: 600;">Télémétrie Microsoft</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- CAS D'USAGE -->
        <section class="page-section">
          <h2>💼 Cas d'Usage Réels</h2>

          <div class="usecase-grid">
            <div class="usecase-card">
              <h4>🎮 Gaming Compétitif</h4>
              <p>
                CS:GO, Dota 2, Apex Legends, Valorant (via Proton), World of Warcraft... 
                Des milliers de joueurs compétitifs utilisent Linux quotidiennement.
              </p>
            </div>

            <div class="usecase-card">
              <h4>🎬 Studios de Production</h4>
              <p>
                Pixar, DreamWorks, Weta Digital utilisent Linux pour leurs pipelines de production 3D. 
                Blender sous Linux est le standard de l'industrie.
              </p>
            </div>

            <div class="usecase-card">
              <h4>🎨 Artistes Indépendants</h4>
              <p>
                Krita, GIMP, Inkscape offrent une suite complète gratuite pour les designers et illustrateurs.
              </p>
            </div>

            <div class="usecase-card">
              <h4>💻 Développeurs de Jeux</h4>
              <p>
                Unity, Unreal Engine, Godot tournent parfaitement sous Linux. 
                Beaucoup de développeurs préfèrent Linux pour la stabilité.
              </p>
            </div>
          </div>
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
  unlockPage('linux-distros-gpu')
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  } catch (e) {}
})

function continueTo(pageId) {
  navigateToPage('linux-distros-gpu', pageId, router)
}
</script>

<style scoped>
/* Styles spécifiques à LinuxDistrosGPU.vue */

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.benefit-item {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 2px solid #c8e6c9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(90, 125, 106, 0.15);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.benefit-item h4 {
  color: #2e4f3b;
  margin: 0.5rem 0;
}

.benefit-item p {
  margin: 0;
  color: #555;
  font-size: 0.95rem;
}

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

.badge.recommended {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #7d5e00;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
}

.badge.gaming {
  background: #f8bbd0;
  color: #c2185b;
}

.badge.pro {
  background: #bbdefb;
  color: #1565c0;
}

.badge.expert {
  background: #ffe0b2;
  color: #e65100;
}

.distro-tagline {
  font-size: 1.05rem;
  color: #666;
  font-style: italic;
  margin-bottom: 1.5rem;
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

.install-tip {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  color: #0d47a1;
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

.warning-box {
  background: #fff3e0;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #ff9800;
}

.warning-box p {
  margin: 0;
  color: #5d4037;
}

.software-category {
  margin: 2rem 0;
}

.software-category h3 {
  color: #2e4f3b;
  margin-bottom: 1rem;
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.software-item {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 1.25rem;
  border-radius: 8px;
  border-left: 4px solid #7dab8a;
}

.software-item h4 {
  color: #2e4f3b;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.software-item p {
  margin: 0.5rem 0 0.75rem 0;
  color: #555;
  font-size: 0.9rem;
}

.status {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status.native {
  background: #c8e6c9;
  color: #2e7d32;
}

.status.pro {
  background: #bbdefb;
  color: #1565c0;
}

.status.mature {
  background: #f0f4c3;
  color: #827717;
}

.optimization-section {
  margin: 1.5rem 0;
  background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #5a7d6a;
}

.optimization-section h3 {
  color: #2e4f3b;
  margin-top: 0;
}

.code-block {
  background: #263238;
  color: #aed581;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  margin: 1rem 0;
}

.code-block code {
  background: none;
  color: #aed581;
  padding: 0;
  display: block;
}

.code-block p {
  margin: 0.5rem 0;
  color: #cfd8dc;
}

.usecase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.usecase-card {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #c2185b;
}

.usecase-card h4 {
  color: #880e4f;
  margin: 0 0 0.75rem 0;
}

.usecase-card p {
  margin: 0;
  color: #5d1049;
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
  .benefit-grid {
    grid-template-columns: 1fr;
  }
  
  .distro-card {
    padding: 1.5rem;
  }
  
  .software-grid {
    grid-template-columns: 1fr;
  }
  
  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>
