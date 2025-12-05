<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { visitPage, completePage } from '../stores/progress.js'

const router = useRouter()

onMounted(() => {
  visitPage('chatgpt-huggingchat')
})

function markAsRead() {
  completePage('chatgpt-huggingchat')
  router.push('/')
}
</script>

<template>
  <div class="page">
    <article class="content">
      <div class="header">
        <div class="header-icon">🤖</div>
        <h1>ChatGPT → HuggingChat</h1>
        <p class="subtitle">L'IA conversationnelle open source et gratuite</p>
      </div>

      <section class="section">
        <h2>🎯 Pourquoi HuggingChat ?</h2>
        <p>
          ChatGPT d'OpenAI a popularisé les assistants IA conversationnels, mais nécessite un abonnement pour
          les fonctionnalités avancées et pose des questions sur la confidentialité des données. HuggingChat,
          développé par Hugging Face, offre une alternative open source et transparente.
        </p>
      </section>

      <section class="section">
        <h2>💰 Comparaison des Coûts</h2>
        <div class="comparison-grid">
          <div class="comparison-card expensive">
            <h3>ChatGPT Plus</h3>
            <div class="price">~20$/mois</div>
            <ul>
              <li>Version gratuite limitée</li>
              <li>Abonnement pour GPT-4</li>
              <li>Accès prioritaire</li>
              <li>Modèle propriétaire fermé</li>
            </ul>
          </div>
          <div class="comparison-card free">
            <h3>HuggingChat</h3>
            <div class="price">0€</div>
            <ul>
              <li>Totalement gratuit</li>
              <li>Accès à plusieurs modèles</li>
              <li>Open source</li>
              <li>Pas de limite stricte</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>✨ Avantages de HuggingChat</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">🔓</div>
            <h3>Open Source</h3>
            <p>Code source accessible, modèles transparents</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🔒</div>
            <h3>Confidentialité</h3>
            <p>Vos conversations ne sont pas utilisées pour entraîner les modèles</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🌍</div>
            <h3>Communauté</h3>
            <p>Porté par une large communauté de chercheurs et développeurs</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🎛️</div>
            <h3>Choix de Modèles</h3>
            <p>Accès à plusieurs modèles IA différents (Llama, Mistral, etc.)</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🚀</div>
            <h3>Innovation</h3>
            <p>Utilise les dernières avancées en IA open source</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">💻</div>
            <h3>Auto-hébergement</h3>
            <p>Possibilité d'héberger vos propres modèles localement</p>
          </div>
        </div>
      </section>

      <section class="section use-cases">
        <h2>📋 Cas d'Usage</h2>
        <div class="use-case-list">
          <div class="use-case-item">
            <div class="use-case-icon">✍️</div>
            <div class="use-case-content">
              <h3>Aide à la Rédaction</h3>
              <p>Articles, emails, rapports, résumés de textes</p>
            </div>
          </div>
          <div class="use-case-item">
            <div class="use-case-icon">💡</div>
            <div class="use-case-content">
              <h3>Brainstorming</h3>
              <p>Génération d'idées créatives et solutions innovantes</p>
            </div>
          </div>
          <div class="use-case-item">
            <div class="use-case-icon">👨‍💻</div>
            <div class="use-case-content">
              <h3>Programmation</h3>
              <p>Aide au code, débogage, explications techniques</p>
            </div>
          </div>
          <div class="use-case-item">
            <div class="use-case-icon">📚</div>
            <div class="use-case-content">
              <h3>Apprentissage</h3>
              <p>Explications de concepts, tutoriels, questions-réponses</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section ethics">
        <h2>🌱 Éthique et Transparence</h2>
        <div class="ethics-content">
          <p>
            Contrairement aux modèles propriétaires, HuggingChat repose sur des principes d'<strong>IA responsable</strong> :
          </p>
          <ul class="ethics-list">
            <li>
              <span class="ethics-icon">🔍</span>
              <strong>Transparence totale</strong> : Le fonctionnement des modèles est documenté et vérifiable
            </li>
            <li>
              <span class="ethics-icon">🛡️</span>
              <strong>Contrôle utilisateur</strong> : Vous gardez le contrôle sur vos données
            </li>
            <li>
              <span class="ethics-icon">🤝</span>
              <strong>Collaboration</strong> : Développement communautaire et participatif
            </li>
            <li>
              <span class="ethics-icon">🌍</span>
              <strong>Accessibilité</strong> : Technologie accessible à tous, gratuitement
            </li>
          </ul>
        </div>
      </section>

      <section class="section warning">
        <h2>⚠️ Points à Considérer</h2>
        <div class="warning-box">
          <p>
            <strong>Performances variables</strong> : Les modèles open source peuvent être légèrement moins
            performants que GPT-4 sur certaines tâches complexes, mais la différence se réduit constamment.
          </p>
          <p>
            <strong>Évolution rapide</strong> : Le domaine de l'IA open source évolue très vite. De nouveaux
            modèles performants apparaissent régulièrement.
          </p>
        </div>
      </section>

      <section class="section call-to-action">
        <h3>🚀 Essayez HuggingChat</h3>
        <p>
          HuggingChat est accessible gratuitement sur <strong>huggingface.co/chat</strong>.
          Aucune inscription obligatoire pour commencer à l'utiliser !
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
  border-bottom: 3px solid #9b59b6;
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

.comparison-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.expensive {
  background: linear-gradient(135deg, #fff0f5 0%, #ffe8f0 100%);
  border: 2px solid #d88bb5;
}

.free {
  background: linear-gradient(135deg, #f0e6ff 0%, #e8d4ff 100%);
  border: 2px solid #9b59b6;
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
  color: #9b59b6;
  font-weight: bold;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.advantage-card {
  background: linear-gradient(135deg, #ffffff 0%, #f9fdf8 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.advantage-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 15px 35px rgba(155, 89, 182, 0.2);
  border-color: #9b59b6;
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

.use-cases {
  background: linear-gradient(135deg, #f0f7f3 0%, #e8f5eb 100%);
  padding: 2rem;
  border-radius: 16px;
}

.use-case-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.use-case-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;
  border-left: 4px solid #9b59b6;
}

.use-case-item:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(155, 89, 182, 0.15);
}

.use-case-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.use-case-content h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #2e4f3b;
}

.use-case-content p {
  font-size: 0.9rem;
  margin: 0;
  color: #666;
}

.ethics {
  background: linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%);
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #9b59b6;
}

.ethics-content p {
  margin-bottom: 1.5rem;
}

.ethics-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ethics-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.ethics-list li:hover {
  transform: translateX(6px);
  box-shadow: 0 4px 12px rgba(155, 89, 182, 0.1);
}

.ethics-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.warning {
  background: linear-gradient(135deg, #fff9e6 0%, #fff5d6 100%);
  padding: 2rem;
  border-radius: 16px;
  border-left: 5px solid #f39c12;
}

.warning-box p {
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

.warning-box p:last-child {
  margin-bottom: 0;
}

.call-to-action {
  background: linear-gradient(135deg, #f0e6ff 0%, #e8d4ff 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #9b59b6;
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
