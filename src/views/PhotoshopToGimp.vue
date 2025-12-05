<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { visitPage, completePage } from '../stores/progress.js'

const router = useRouter()

onMounted(() => {
  visitPage('photoshop-gimp')
})

function markAsRead() {
  completePage('photoshop-gimp')
  router.push('/')
}
</script>

<template>
  <div class="page">
    <article class="content">
      <div class="header">
        <div class="header-icon">🎨</div>
        <h1>Photoshop → GIMP</h1>
        <p class="subtitle">L'alternative libre pour la retouche d'images</p>
      </div>

      <section class="section">
        <h2>🎯 Pourquoi GIMP ?</h2>
        <p>
          Adobe Photoshop est l'outil de référence pour la retouche d'images, mais son prix élevé et son modèle
          d'abonnement le rendent inaccessible pour beaucoup. GIMP (GNU Image Manipulation Program) est une
          alternative gratuite et open source qui offre des fonctionnalités professionnelles.
        </p>
      </section>

      <section class="section">
        <h2>💰 Économies Substantielles</h2>
        <div class="savings-box">
          <div class="cost-comparison">
            <div class="cost-item expensive">
              <div class="software-name">Photoshop CC</div>
              <div class="cost-amount">~24€/mois</div>
              <div class="cost-annual">≈ 288€/an</div>
            </div>
            <div class="vs-separator">VS</div>
            <div class="cost-item free">
              <div class="software-name">GIMP</div>
              <div class="cost-amount">0€</div>
              <div class="cost-saved">Économisez 288€/an !</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>⚡ Fonctionnalités de GIMP</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🖌️</div>
            <h3>Outils Professionnels</h3>
            <p>Calques, masques, sélections avancées, filtres</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎭</div>
            <h3>Retouche Avancée</h3>
            <p>Correction des couleurs, clonage, transformation</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📐</div>
            <h3>Formats Multiples</h3>
            <p>PSD, PNG, JPEG, SVG, GIF, TIFF, et plus</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔌</div>
            <h3>Extensions</h3>
            <p>Plugins et scripts pour étendre les capacités</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌈</div>
            <h3>Gestion des Couleurs</h3>
            <p>Support CMJN, profils ICC, 16-bit</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✏️</div>
            <h3>Dessin & Peinture</h3>
            <p>Brosses personnalisables, tablette graphique</p>
          </div>
        </div>
      </section>

      <section class="section comparison">
        <h2>📊 GIMP vs Photoshop</h2>
        <div class="comparison-table">
          <div class="comparison-row header-row">
            <div class="comparison-cell">Fonctionnalité</div>
            <div class="comparison-cell">GIMP</div>
            <div class="comparison-cell">Photoshop</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Prix</div>
            <div class="comparison-cell check">Gratuit</div>
            <div class="comparison-cell cross">288€/an</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Open Source</div>
            <div class="comparison-cell check">✓</div>
            <div class="comparison-cell cross">✗</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Multi-plateforme</div>
            <div class="comparison-cell check">✓</div>
            <div class="comparison-cell check">✓</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Calques & Masques</div>
            <div class="comparison-cell check">✓</div>
            <div class="comparison-cell check">✓</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Communauté Active</div>
            <div class="comparison-cell check">✓</div>
            <div class="comparison-cell check">✓</div>
          </div>
        </div>
      </section>

      <section class="section tips">
        <h2>💡 Conseils pour Débuter</h2>
        <div class="tips-list">
          <div class="tip-item">
            <span class="tip-number">1</span>
            <div class="tip-content">
              <strong>Tutoriels Gratuits</strong>
              <p>De nombreux tutoriels vidéo et écrits sont disponibles gratuitement en ligne</p>
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-number">2</span>
            <div class="tip-content">
              <strong>Raccourcis Clavier</strong>
              <p>Apprenez les raccourcis similaires à Photoshop pour une transition facile</p>
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-number">3</span>
            <div class="tip-content">
              <strong>Plugins Utiles</strong>
              <p>Installez des extensions comme G'MIC pour des filtres avancés</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section call-to-action">
        <h3>🚀 Prêt à passer à GIMP ?</h3>
        <p>
          GIMP est utilisé par des millions de designers, photographes et artistes dans le monde entier.
          Téléchargez-le gratuitement sur <strong>gimp.org</strong>
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
  border-bottom: 3px solid #ff6b9d;
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
  border: 2px solid #ff6b6b;
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
  box-shadow: 0 15px 35px rgba(255, 107, 157, 0.2);
  border-color: #ff6b9d;
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

.comparison {
  background: linear-gradient(135deg, #f0f7f3 0%, #e8f5eb 100%);
  padding: 2rem;
  border-radius: 16px;
}

.comparison-table {
  margin-top: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: white;
  border-bottom: 1px solid #e0e0e0;
}

.comparison-row.header-row {
  background: linear-gradient(135deg, #5a7d6a 0%, #3d6b4f 100%);
}

.comparison-row.header-row .comparison-cell {
  color: white;
  font-weight: 700;
}

.comparison-cell {
  padding: 1rem;
  text-align: center;
  color: #555;
}

.comparison-cell.check {
  color: #2e7d32;
  font-weight: 600;
}

.comparison-cell.cross {
  color: #c62828;
  font-weight: 600;
}

.tips {
  background: linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%);
  padding: 2rem;
  border-radius: 16px;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border-left: 4px solid #ff6b9d;
}

.tip-item:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.15);
}

.tip-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff85ab 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
}

.tip-content strong {
  display: block;
  color: #2e4f3b;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.tip-content p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.call-to-action {
  background: linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #ff6b9d;
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
