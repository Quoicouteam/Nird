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
        <div class="header-icon">🎮</div>
        <h1>Distro Mangeuses de Cartes Graphiques</h1>
        <p class="subtitle">Linux pour les gamers et les professionnels du graphisme</p>
      </div>

      <section class="section">
        <h2>🎯 Pourquoi une Distribution Spécialisée ?</h2>
        <p>
          Vous êtes gamer, développeur 3D, ou créatif utilisant des logiciels exigeants ? 
          Ces distributions Linux sont optimisées pour exploiter au maximum votre GPU (carte graphique).
          Elles incluent les drivers dernier cri et les outils nécessaires pour du travail professionnel graphique.
        </p>
      </section>

      <section class="section">
        <h2>🚀 Les Meilleures Distributions pour le Graphisme et le Gaming</h2>

        <div class="distro-card premium">
          <div class="distro-header">
            <div class="distro-icon">🎯</div>
            <h3>Ubuntu (avec drivers propriétaires)</h3>
            <span class="badge gpu">Meilleur choix</span>
          </div>
          <p>
            La base Linux la plus flexible pour le gaming et la création graphique. 
            Installation simplifiée des drivers NVIDIA et AMD directement depuis les paramètres.
          </p>
          <ul class="pros">
            <li>✅ Support officiel des drivers NVIDIA et AMD</li>
            <li>✅ Installation des drivers en un clic</li>
            <li>✅ Compatibilité maximale avec Steam et Proton</li>
            <li>✅ Support des derniers protocoles graphiques (Vulkan, OpenGL)</li>
            <li>✅ Communauté gaming très active</li>
          </ul>
          <p class="tip">💡 <strong>Installation des drivers :</strong> Allez dans Paramètres → Logiciels supplémentaires → Onglet Pilotes</p>
        </div>

        <div class="distro-card">
          <div class="distro-header">
            <div class="distro-icon">🐧</div>
            <h3>Fedora (Workstation Edition)</h3>
            <span class="badge workstation">Professionnel</span>
          </div>
          <p>
            Idéale pour les professionnels du graphisme et de la vidéo. 
            Très à jour avec les dernières technologies graphiques.
          </p>
          <ul class="pros">
            <li>✅ Mise à jour régulière des stacks graphiques</li>
            <li>✅ Excellent support Wayland et X11</li>
            <li>✅ Performance optimale pour Blender, Krita, GIMP</li>
            <li>✅ Infrastructure de compilation optimisée</li>
            <li>✅ Largement utilisée par les studios professionnels</li>
          </ul>
          <p class="info">ℹ️ Plus technique, mais offre une meilleure stabilité pour du travail professionnel.</p>
        </div>

        <div class="distro-card">
          <div class="distro-header">
            <div class="distro-icon">🕷️</div>
            <h3>Arch / EndeavourOS</h3>
            <span class="badge expert">Expert</span>
          </div>
          <p>
            Pour les utilisateurs expérimentés qui veulent le contrôle total. 
            Accès immédiat aux dernières versions des drivers et logiciels.
          </p>
          <ul class="pros">
            <li>✅ Rolling release = toujours la dernière version</li>
            <li>✅ Accès immédiat aux drivers GPU les plus récents</li>
            <li>✅ Performance maximale (système épuré)</li>
            <li>✅ Très flexible pour configuration personnalisée</li>
            <li>✅ Wiki communautaire excellent pour le troubleshooting</li>
          </ul>
          <p class="warning">⚠️ Nécessite de la connaissance technique. Déconseillé pour débuter.</p>
        </div>

        <div class="distro-card">
          <div class="distro-header">
            <div class="distro-icon">🎮</div>
            <h3>SteamOS / Gaming-Focused Distros</h3>
            <span class="badge gaming">Gaming</span>
          </div>
          <p>
            Optimisées spécifiquement pour le gaming. Parfait si vous voulez jouer avec Linux comme système principal.
          </p>
          <ul class="pros">
            <li>✅ Environnement optimisé pour Steam et Proton</li>
            <li>✅ Support natif des contrôleurs gaming</li>
            <li>✅ Drivers GPU installés par défaut</li>
            <li>✅ Configuration gaming prête à l'emploi</li>
          </ul>
          <p class="tip">💡 Options : Pop!_OS (System76), Drauger OS, ou utiliser Ubuntu + Steam directement</p>
        </div>
      </section>

      <section class="section">
        <h2>💾 Logiciels Graphiques sous Linux</h2>
        <div class="software-grid">
          <div class="software-item">
            <h3>🎨 GIMP</h3>
            <p>Équivalent de Photoshop. Outil de retouche et création 2D complet et gratuit.</p>
            <span class="status mature">Mature</span>
          </div>
          <div class="software-item">
            <h3>🎬 Kdenlive / DaVinci Resolve</h3>
            <p>Montage vidéo professionnel. DaVinci Resolve est aussi puissant que Premiere Pro.</p>
            <span class="status mature">Professionnel</span>
          </div>
          <div class="software-item">
            <h3>🗿 Blender</h3>
            <p>Suite 3D complète (modélisation, animation, rendu). Utilisation professionnelle mondiale.</p>
            <span class="status professional">Studio</span>
          </div>
          <div class="software-item">
            <h3>🖌️ Krita</h3>
            <p>Outil de dessin et peinture numérique. Préféré par les artistes numériques.</p>
            <span class="status mature">Artistique</span>
          </div>
          <div class="software-item">
            <h3>🌈 Inkscape</h3>
            <p>Design vectoriel. Équivalent d'Illustrator, puissant et gratuit.</p>
            <span class="status mature">Design</span>
          </div>
          <div class="software-item">
            <h3>🎵 Audacity</h3>
            <p>Édition audio. Outil complet pour l'enregistrement et le mixage audio.</p>
            <span class="status mature">Audio</span>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>🔧 Optimisation GPU sous Linux</h2>
        <div class="optimization-box">
          <h3>Installation des Drivers</h3>
          <div class="code-block">
            <p><strong>Pour NVIDIA :</strong></p>
            <code>sudo ubuntu-drivers install</code>
            <p style="margin-top: 1rem;"><strong>Pour AMD :</strong></p>
            <code>sudo apt install amdgpu-dkms</code>
          </div>
          <p style="margin-top: 1rem;">
            Les drivers open-source fonctionnent bien, mais les drivers propriétaires offrent souvent de meilleures performances.
          </p>
        </div>

        <div class="optimization-box">
          <h3>Vérification de votre GPU</h3>
          <div class="code-block">
            <code>lspci | grep -i vga</code>
            <p style="margin-top: 0.5rem;">ou</p>
            <code>nvidia-smi</code>
            <p style="margin-top: 0.5rem;">(pour NVIDIA)</p>
          </div>
        </div>

        <div class="optimization-box">
          <h3>Performance Gaming</h3>
          <p>
            🎮 <strong>Proton :</strong> Couche de compatibilité qui permet de lancer les jeux Windows sur Linux.
            Performance généralement très proche des versions natives Windows.
          </p>
          <p style="margin-top: 0.75rem;">
            📊 <strong>Résultats typiques :</strong> Jeux AAA 60+ FPS en Full HD sur GPU moderne.
          </p>
        </div>
      </section>

      <section class="section">
        <h2>📊 Comparaison : Linux vs Windows pour le Graphisme</h2>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Linux</th>
              <th>Windows</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coût</td>
              <td class="positive">Gratuit</td>
              <td class="negative">259-359€</td>
            </tr>
            <tr>
              <td>Logiciels Pro</td>
              <td class="positive">Tous gratuits (Blender, DaVinci)</td>
              <td class="negative">Coûts de licences élevés</td>
            </tr>
            <tr>
              <td>Performance GPU</td>
              <td class="positive">Excellent (drivers modernes)</td>
              <td class="neutral">Bon</td>
            </tr>
            <tr>
              <td>Stabilité</td>
              <td class="positive">Très stable (pas de ralentissements)</td>
              <td class="negative">Ralentissements courants</td>
            </tr>
            <tr>
              <td>Liberté</td>
              <td class="positive">Contrôle total du système</td>
              <td class="negative">Contrôle limité</td>
            </tr>
            <tr>
              <td>Vie Privée</td>
              <td class="positive">Respectée</td>
              <td class="negative">Télémétrie Microsoft</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="section">
        <h2>⚡ Cas d'Usage</h2>

        <div class="usecase-card">
          <h3>🎮 Gaming</h3>
          <p>
            Linux est devenu une excellente plateforme gaming. Des milliers de jeux tournent via Steam/Proton.
            Les performances sont au moins égales à Windows, avec meilleure stabilité.
          </p>
        </div>

        <div class="usecase-card">
          <h3>🎬 Production Vidéo</h3>
          <p>
            DaVinci Resolve sur Linux est aussi puissant que sur Windows. 
            Blender pour l'animation 3D est standard en studios professionnels mondiaux.
          </p>
        </div>

        <div class="usecase-card">
          <h3>🎨 Design Graphique</h3>
          <p>
            GIMP, Krita, Inkscape offrent une suite complète pour le design. 
            Beaucoup de professionnels migrent vers ces outils open-source.
          </p>
        </div>

        <div class="usecase-card">
          <h3>💻 Développement</h3>
          <p>
            Linux est l'OS standard pour le développement. 
            Outils optimisés, performances maximales, liberté totale.
          </p>
        </div>
      </section>

      <section class="section conclusion">
        <h2>🌟 Conclusion</h2>
        <p>
          Linux n'est plus l'outil « pour nerds ». C'est une plateforme mature, robuste et performante 
          pour le gaming, la création graphique et le travail professionnel. 
          Avec les bonnes distributions et les drivers à jour, vous obtiendrez performance, stabilité et liberté.
        </p>
      </section>

      <section class="section call-to-action">
        <h3>📍 Prochaines étapes</h3>
        <div class="choices-grid">
          <button class="choice-button" @click="continueTo('distro-debutants')">
            <span class="choice-icon">🐧</span>
            <span class="choice-title">Distro Débutants</span>
            <span class="choice-desc">Débuter avec Linux simplement</span>
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
  unlockPage('distro-gpu')
})

function continueTo(pageId) {
  navigateToPage('distro-gpu', pageId, router)
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

h3 {
  color: #2e4f3b;
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

.distro-card.premium {
  border-left-width: 8px;
  box-shadow: inset 0 0 20px rgba(125, 171, 138, 0.1);
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
  font-size: 1.4rem;
  margin: 0;
  flex: 1;
}

.badge {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge.gpu {
  background: #c8e6c9;
  color: #2e7d32;
}

.badge.workstation {
  background: #bbdefb;
  color: #1565c0;
}

.badge.expert {
  background: #ffe0b2;
  color: #e65100;
}

.badge.gaming {
  background: #f8bbd0;
  color: #c2185b;
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

.tip, .info, .warning {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  font-style: italic;
}

.tip {
  background: #e8f5e9;
  color: #2e4f3b;
}

.info {
  background: #e3f2fd;
  color: #0d47a1;
}

.warning {
  background: #fff3e0;
  color: #5d4037;
}

code {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  color: #d32f2f;
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
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.software-item {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #7dab8a;
}

.software-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.software-item p {
  margin: 0.5rem 0 1rem 0;
  font-size: 0.95rem;
  color: #555;
}

.status {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status.mature {
  background: #c8e6c9;
  color: #2e7d32;
}

.status.professional {
  background: #bbdefb;
  color: #1565c0;
}

.optimization-box {
  background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #5a7d6a;
}

.optimization-box h3 {
  margin-top: 0;
  color: #2e4f3b;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.comparison-table thead {
  background: #5a7d6a;
  color: white;
}

.comparison-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  color: #444;
}

.comparison-table tr:hover {
  background: #f9fafb;
}

.positive {
  color: #2e7d32;
  font-weight: 600;
}

.negative {
  color: #c62828;
  font-weight: 600;
}

.neutral {
  color: #f57f17;
  font-weight: 600;
}

.usecase-card {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #c2185b;
}

.usecase-card h3 {
  margin: 0 0 0.5rem 0;
  color: #880e4f;
}

.usecase-card p {
  margin: 0;
  color: #5d1049;
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

  .software-grid {
    grid-template-columns: 1fr;
  }

  .choices-grid {
    grid-template-columns: 1fr;
  }
}
</style>
