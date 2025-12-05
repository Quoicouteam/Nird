<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { visitPage, completePage } from '../stores/progress.js'

const router = useRouter()

onMounted(() => {
  visitPage('office365-libreoffice')
})

function markAsRead() {
  completePage('office365-libreoffice')
  router.push('/')
}
</script>

<template>
  <div class="page">
    <article class="content">
      <div class="header">
        <div class="header-icon">📄</div>
        <h1>Microsoft 365 → LibreOffice</h1>
        <p class="subtitle">Passez à une suite bureautique libre et gratuite</p>
      </div>

      <section class="section">
        <h2>🎯 Pourquoi changer ?</h2>
        <p>
          Microsoft 365 (anciennement Office 365) est une suite bureautique puissante, mais elle impose un modèle
          d'abonnement coûteux et crée une dépendance à l'écosystème Microsoft. LibreOffice offre une alternative
          gratuite, libre et tout aussi performante.
        </p>
      </section>

      <section class="section">
        <h2>💰 Comparaison des Coûts</h2>
        <div class="comparison-grid">
          <div class="comparison-card expensive">
            <h3>Microsoft 365</h3>
            <div class="price">~70€/an</div>
            <ul>
              <li>Abonnement obligatoire</li>
              <li>Coût récurrent annuel</li>
              <li>Nécessite une connexion internet</li>
              <li>Données dans le cloud Microsoft</li>
            </ul>
          </div>
          <div class="comparison-card free">
            <h3>LibreOffice</h3>
            <div class="price">0€</div>
            <ul>
              <li>Totalement gratuit</li>
              <li>Aucun abonnement</li>
              <li>Fonctionne hors ligne</li>
              <li>Vos données restent locales</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>📦 Applications Équivalentes</h2>
        <div class="apps-grid">
          <div class="app-box">
            <strong>Word → Writer</strong>
            <p>Traitement de texte complet avec toutes les fonctionnalités essentielles</p>
          </div>
          <div class="app-box">
            <strong>Excel → Calc</strong>
            <p>Tableur puissant pour calculs et analyses de données</p>
          </div>
          <div class="app-box">
            <strong>PowerPoint → Impress</strong>
            <p>Création de présentations professionnelles</p>
          </div>
          <div class="app-box">
            <strong>Access → Base</strong>
            <p>Gestion de bases de données</p>
          </div>
        </div>
      </section>

      <section class="section advantages">
        <h2>✨ Avantages de LibreOffice</h2>
        <div class="advantage-grid">
          <div class="advantage-card">
            <div class="advantage-icon">🔓</div>
            <h3>Formats Ouverts</h3>
            <p>ODF (Open Document Format) garantit la pérennité de vos documents</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🌍</div>
            <h3>Multi-plateforme</h3>
            <p>Windows, macOS, Linux - fonctionne partout</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🔒</div>
            <h3>Vie Privée</h3>
            <p>Aucune collecte de données, pas de tracking</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🤝</div>
            <h3>Compatible</h3>
            <p>Ouvre et enregistre les fichiers Microsoft Office</p>
          </div>
        </div>
      </section>

      <section class="section call-to-action">
        <h3>🚀 Prêt à faire le changement ?</h3>
        <p>
          LibreOffice est une solution mature utilisée par des millions d'utilisateurs et des organisations
          gouvernementales dans le monde entier. Téléchargez-le gratuitement sur 
          <strong>libreoffice.org</strong>
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
  border-bottom: 3px solid #4a90e2;
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

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.comparison-card {
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.comparison-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.comparison-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.comparison-card:hover::before {
  opacity: 1;
}

.expensive {
  background: linear-gradient(135deg, #fff0f0 0%, #ffe8e8 100%);
  border: 2px solid #e88888;
}

.expensive::before {
  background: radial-gradient(circle at 100% 100%, rgba(232, 136, 136, 0.1) 0%, transparent 70%);
}

.free {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border: 2px solid #81c784;
}

.free::before {
  background: radial-gradient(circle at 100% 100%, rgba(129, 199, 132, 0.2) 0%, transparent 70%);
}

.comparison-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2e4f3b;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2e4f3b;
}

.comparison-card ul {
  list-style: none;
  padding: 0;
}

.comparison-card li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #666;
}

.comparison-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #5a7d6a;
  font-weight: bold;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.app-box {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.app-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(74, 144, 226, 0.15);
  border-color: #4a90e2;
}

.app-box strong {
  color: #2e4f3b;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.app-box p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.advantages {
  background: linear-gradient(135deg, #f0f7f3 0%, #e8f5eb 100%);
  padding: 2rem;
  border-radius: 16px;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.advantage-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid #c8e6c9;
}

.advantage-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 15px 35px rgba(90, 125, 106, 0.2);
}

.advantage-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float-gentle 3s ease-in-out infinite;
}

.advantage-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #2e4f3b;
}

.advantage-card p {
  font-size: 0.85rem;
  margin: 0;
  color: #666;
}

.call-to-action {
  background: linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #4a90e2;
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
</style>
