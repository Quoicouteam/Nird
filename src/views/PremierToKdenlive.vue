<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { visitPage, completePage } from '../stores/progress.js'

const router = useRouter()

onMounted(() => {
  visitPage('premier-kdenlive')
})

function markAsRead() {
  completePage('premier-kdenlive')
  router.push('/')
}
</script>

<template>
  <div class="page">
    <article class="content">
      <div class="header">
        <div class="header-icon">🎬</div>
        <h1>Adobe Premiere Pro → Kdenlive</h1>
        <p class="subtitle">Le montage vidéo libre et professionnel</p>
      </div>

      <section class="section">
        <h2>🎯 Pourquoi Kdenlive ?</h2>
        <p>
          Adobe Premiere Pro est un logiciel de montage vidéo professionnel, mais son abonnement Creative Cloud
          est coûteux. Kdenlive est une alternative open source gratuite qui offre des fonctionnalités
          professionnelles pour le montage vidéo multi-pistes.
        </p>
      </section>

      <section class="section">
        <h2>💰 Économies Importantes</h2>
        <div class="savings-box">
          <div class="cost-comparison">
            <div class="cost-item expensive">
              <div class="software-name">Premiere Pro</div>
              <div class="cost-amount">~24€/mois</div>
              <div class="cost-annual">≈ 288€/an</div>
            </div>
            <div class="vs-separator">VS</div>
            <div class="cost-item free">
              <div class="software-name">Kdenlive</div>
              <div class="cost-amount">0€</div>
              <div class="cost-saved">100% gratuit !</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>⚡ Fonctionnalités Kdenlive</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎞️</div>
            <h3>Multi-pistes</h3>
            <p>Montage vidéo et audio sur plusieurs pistes</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✂️</div>
            <h3>Outils Précis</h3>
            <p>Découpe, trim, ripple edit, roll edit</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Effets & Transitions</h3>
            <p>Plus de 200 effets vidéo et audio</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎭</div>
            <h3>Compositing</h3>
            <p>Keyframes, masques, chroma key (fond vert)</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Proxy Clips</h3>
            <p>Montage fluide avec des fichiers lourds 4K</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎤</div>
            <h3>Mixage Audio</h3>
            <p>Contrôle complet du son, égaliseur, normalisation</p>
          </div>
        </div>
      </section>

      <section class="section formats">
        <h2>📹 Formats Supportés</h2>
        <div class="formats-content">
          <p>Kdenlive supporte une très large gamme de formats grâce à FFmpeg :</p>
          <div class="formats-grid">
            <div class="format-box">
              <strong>Vidéo</strong>
              <p>MP4, MOV, AVI, MKV, WebM, MPEG, ProRes</p>
            </div>
            <div class="format-box">
              <strong>Audio</strong>
              <p>MP3, WAV, FLAC, OGG, AAC, AC3</p>
            </div>
            <div class="format-box">
              <strong>Images</strong>
              <p>PNG, JPEG, SVG, GIF, TIFF</p>
            </div>
            <div class="format-box">
              <strong>Export</strong>
              <p>YouTube, Vimeo, formats personnalisés</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section workflow">
        <h2>🔄 Workflow Professionnel</h2>
        <div class="workflow-steps">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Import & Organisation</h3>
              <p>Gestionnaire de projets, bins, notes</p>
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Montage</h3>
              <p>Timeline multi-pistes, raccourcis clavier personnalisables</p>
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Effets & Colorimétrie</h3>
              <p>Correction des couleurs, étalonnage, filtres</p>
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Export</h3>
              <p>Préconfigurations pour web, TV, cinéma</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section community">
        <h2>🤝 Communauté Active</h2>
        <div class="community-content">
          <p>
            Kdenlive bénéficie d'une <strong>communauté dynamique</strong> qui contribue au développement,
            crée des tutoriels et partage des conseils :
          </p>
          <ul class="community-list">
            <li>Forums d'entraide actifs</li>
            <li>Tutoriels vidéo en français et anglais</li>
            <li>Documentation complète</li>
            <li>Mises à jour régulières</li>
            <li>Développement transparent sur GitLab</li>
          </ul>
        </div>
      </section>

      <section class="section tips">
        <h2>💡 Conseils pour Débuter</h2>
        <div class="tips-box">
          <div class="tip-item">
            <span class="tip-icon">🎓</span>
            <p><strong>Raccourcis clavier</strong> : Maîtrisez-les pour un montage plus rapide (I/O pour in/out, Space pour play/pause)</p>
          </div>
          <div class="tip-item">
            <span class="tip-icon">⚙️</span>
            <p><strong>Proxy clips</strong> : Activez-les pour les vidéos 4K pour un aperçu fluide pendant le montage</p>
          </div>
          <div class="tip-item">
            <span class="tip-icon">💾</span>
            <p><strong>Sauvegardez souvent</strong> : Utilisez les sauvegardes automatiques et versionnées</p>
          </div>
        </div>
      </section>

      <section class="section call-to-action">
        <h3>🚀 Prêt à monter vos vidéos ?</h3>
        <p>
          Kdenlive est disponible pour Linux, Windows et macOS. Téléchargez-le gratuitement sur
          <strong>kdenlive.org</strong>
        </p>
      </section>
    </article>

    <div class="actions">
      <button class="action-button" @click="markAsRead">
        J'ai compris, retour à l'accueil
      </button>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 60px);
  padding-top: 80px;
  background: linear-gradient(180deg, #f8f6f3 0%, #fff 50%, #f0f4f2 100%);
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #e74c3c;
}

.header-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: float-gentle 3s ease-in-out infinite;
}

h1 {
  color: #2e4f3b;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  color: #5a7d6a;
  font-size: 1.1rem;
  font-style: italic;
}

h2 {
  color: #3d6b4f;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
  font-weight: 600;
}

.section {
  margin-bottom: 2.5rem;
}

.section p {
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
}

.savings-box {
  background: linear-gradient(135deg, #fff9f5 0%, #fff5f8 100%);
  padding: 2rem;
  border-radius: 16px;
  margin-top: 1.5rem;
}

.cost-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
}

.cost-item {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.cost-item:hover {
  transform: scale(1.05);
}

.cost-item.expensive {
  background: linear-gradient(135deg, #ffe8e8 0%, #ffcccc 100%);
  border: 2px solid #e74c3c;
}

.cost-item.free {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border: 2px solid #66bb6a;
}

.software-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2e4f3b;
  margin-bottom: 1rem;
}

.cost-amount {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2e4f3b;
  margin-bottom: 0.5rem;
}

.cost-annual, .cost-saved {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

.cost-saved {
  color: #2e7d32;
  font-weight: 600;
}

.vs-separator {
  font-size: 1.5rem;
  font-weight: 700;
  color: #999;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.feature-card {
  background: linear-gradient(135deg, #ffffff 0%, #f9fdf8 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 15px 35px rgba(231, 76, 60, 0.2);
  border-color: #e74c3c;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float-gentle 3s ease-in-out infinite;
}

.feature-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #2e4f3b;
}

.feature-card p {
  font-size: 0.85rem;
  margin: 0;
  color: #666;
}

.formats {
  background: linear-gradient(135deg, #f0f7f3 0%, #e8f5eb 100%);
  padding: 2rem;
  border-radius: 16px;
}

.formats-content p {
  margin-bottom: 1.5rem;
}

.formats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.format-box {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
}

.format-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(231, 76, 60, 0.15);
  border-color: #e74c3c;
}

.format-box strong {
  color: #2e4f3b;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.format-box p {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.workflow {
  background: linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%);
  padding: 2rem;
  border-radius: 16px;
}

.workflow-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.workflow-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border-left: 4px solid #e74c3c;
}

.workflow-step:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(231, 76, 60, 0.15);
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
}

.step-content h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #2e4f3b;
}

.step-content p {
  font-size: 0.9rem;
  margin: 0;
  color: #666;
}

.community {
  background: linear-gradient(135deg, #e8f5eb 0%, #d4e8db 100%);
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #81c784;
}

.community-content p {
  margin-bottom: 1.5rem;
}

.community-list {
  list-style: none;
  padding: 0;
}

.community-list li {
  padding: 0.75rem;
  padding-left: 2rem;
  position: relative;
  background: white;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  color: #555;
  transition: all 0.3s ease;
}

.community-list li::before {
  content: '✓';
  position: absolute;
  left: 0.75rem;
  color: #66bb6a;
  font-weight: bold;
  font-size: 1.2rem;
}

.community-list li:hover {
  transform: translateX(6px);
  box-shadow: 0 4px 12px rgba(129, 199, 132, 0.2);
}

.tips {
  background: linear-gradient(135deg, #fff9e6 0%, #fff5d6 100%);
  padding: 2rem;
  border-radius: 16px;
  border-left: 5px solid #f39c12;
}

.tips-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tip-item:hover {
  transform: translateX(6px);
  box-shadow: 0 4px 12px rgba(243, 156, 18, 0.15);
}

.tip-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.tip-item p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.call-to-action {
  background: linear-gradient(135deg, #ffe8e8 0%, #ffd6d6 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #e74c3c;
  text-align: center;
}

.call-to-action h3 {
  color: #2e4f3b;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.call-to-action p {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.actions {
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
}

.action-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #5a7d6a 0%, #3d6b4f 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

.action-button:hover {
  background: linear-gradient(135deg, #3d6b4f 0%, #2e4f3b 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(46, 79, 59, 0.25);
}

.action-button:hover::before {
  width: 300px;
  height: 300px;
}

.action-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .cost-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .vs-separator {
    transform: rotate(90deg);
  }
}
</style>
