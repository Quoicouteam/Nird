<script setup>
import { useRouter } from 'vue-router'
import { usePageUnlock } from '../../../router/usePageUnlock.js'
import { completePage } from '../../../router/progress.js'

const router = useRouter()

// Débloquer automatiquement cette page
usePageUnlock()

function markAsRead() {
  completePage('licences')
  router.push('/')
}
</script>

<template>
  <div class="page">
    <article class="content">
      <div class="header">
        <div class="header-icon">💰</div>
        <h1>Les Licences Payantes</h1>
        <p class="subtitle">Comprendre l'enjeu des logiciels propriétaires et payants</p>
      </div>

      <section class="section">
        <h2>🎯 Le Problème</h2>
        <p>
          Les licences de logiciels payants représentent un enjeu majeur dans le contexte du numérique responsable.
          Elles créent des barrières à l'accès à la technologie, augmentent les coûts pour les entreprises et les
          utilisateurs, et limitent la possibilité de contrôler et d'améliorer les outils que nous utilisons.
        </p>
      </section>

      <section class="section">
        <h2>💸 Enjeux Économiques</h2>
        <div class="issue-card">
          <h3>📊 Coûts Croissants</h3>
          <p>
            Les licences payantes génèrent des dépenses continues pour les entreprises et les particuliers.
            Ces coûts peuvent devenir prohibitifs, en particulier pour les petites structures et les pays en développement.
          </p>
        </div>
        <div class="issue-card">
          <h3>🔒 Enfermement Propriétaire</h3>
          <p>
            Une fois dépendant d'un logiciel payant, il est difficile de en changer sans perdre ses données ou
            investissements. C'est ce qu'on appelle le « lock-in » ou enfermement numériques.
          </p>
        </div>
        <div class="issue-card">
          <h3>🌍 Fracture Numérique</h3>
          <p>
            Les licences payantes accentuent les inégalités d'accès à la technologie entre les pays riches et pauvres,
            créant une fracture numérique globale.
          </p>
        </div>
      </section>

      <section class="section">
        <h2>🔧 Enjeux Techniques et Éthiques</h2>
        <div class="issue-card">
          <h3>📜 Absence de Transparence</h3>
          <p>
            Le code source des logiciels propriétaires n'est pas accessible publiquement.
            Impossible de vérifier sa sécurité, son respect de la vie privée, ou de déterminer s'il contient des backdoors.
          </p>
        </div>
        <div class="issue-card">
          <h3>❌ Pas d'Autonomie</h3>
          <p>
            Sans accès au code source, les utilisateurs ne peuvent pas personnaliser ou améliorer les logiciels selon leurs besoins.
            Ils doivent attendre que l'éditeur apporte des corrections ou des améliorations.
          </p>
        </div>
        <div class="issue-card">
          <h3>🛡️ Risques de Sécurité</h3>
          <p>
            Les vulnérabilités peuvent rester cachées longtemps. Le fabricant peut arrêter le support d'une version,
            laissant les utilisateurs exposés à des risques.
          </p>
        </div>
      </section>

      <section class="section">
        <h2>🌱 Solutions : Les Alternatives Libres</h2>
        <p>
          Face à ces enjeux, le logiciel libre et open source offre des alternatives crédibles et responsables :
        </p>
        <div class="solution-grid">
          <div class="solution-card">
            <div class="solution-icon">🔓</div>
            <h3>Accès au Code Source</h3>
            <p>Tout le monde peut examiner, modifier et améliorer le code</p>
          </div>
          <div class="solution-card">
            <div class="solution-icon">💲</div>
            <h3>Gratuit (généralement)</h3>
            <p>Pas de coûts de licence, démocratisant l'accès à la technologie</p>
          </div>
          <div class="solution-card">
            <div class="solution-icon">🤝</div>
            <h3>Communauté Active</h3>
            <p>Amélioration continue grâce aux contributions de la communauté</p>
          </div>
          <div class="solution-card">
            <div class="solution-icon">🔐</div>
            <h3>Sécurité Renforcée</h3>
            <p>De nombreux regards examinent le code, découvrant les failles rapidement</p>
          </div>
        </div>
      </section>

      <section class="section examples">
        <h2>📚 Exemples d'Alternatives Libres</h2>
        <div class="examples-grid">
          <div class="example-box">
            <strong>Bureautique</strong>
            <p>LibreOffice, Apache OpenOffice</p>
          </div>
          <div class="example-box">
            <strong>Design Graphique</strong>
            <p>GIMP, Inkscape, Krita</p>
          </div>
          <div class="example-box">
            <strong>Développement</strong>
            <p>Visual Studio Code, Blender, Audacity</p>
          </div>
          <div class="example-box">
            <strong>Systèmes d'Exploitation</strong>
            <p>Linux, Ubuntu, Fedora</p>
          </div>
        </div>
      </section>

      <section class="section call-to-action">
        <h3>💡 À Retenir</h3>
        <p>
          Choisir des logiciels libres et open source, c'est opter pour une plus grande liberté, une meilleure sécurité,
          et contribuer à un numérique plus responsable et équitable pour tous.
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #e8d4c4;
}

.header-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
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

h3 {
  color: #2e4f3b;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
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

.issue-card {
  background: linear-gradient(135deg, #fff9f5 0%, #f5f9f7 100%);
  border-left: 5px solid #c4a080;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.issue-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 100% 50%, rgba(196, 160, 128, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.issue-card:hover {
  transform: translateX(6px);
  box-shadow: 0 8px 20px rgba(196, 160, 128, 0.15);
}

.issue-card:hover::before {
  opacity: 1;
}

.issue-card h3 {
  margin-bottom: 0.5rem;
  color: #3d5a47;
}

.issue-card p {
  margin-bottom: 0;
  font-size: 0.95rem;
  color: #666;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.solution-card {
  background: linear-gradient(135deg, #e8f0eb 0%, #d4e8db 100%);
  border: 2px solid #a8c4b4;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(168, 196, 180, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

.solution-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 15px 35px rgba(90, 125, 106, 0.2);
}

.solution-card:hover::before {
  width: 300px;
  height: 300px;
}

.solution-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float-gentle 3s ease-in-out infinite;
}

.solution-card:hover .solution-icon {
  animation: pulse-grow 0.6s ease-in-out;
}

.solution-card h3 {
  color: #2e4f3b;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.solution-card p {
  font-size: 0.9rem;
  margin-bottom: 0;
}

.examples {
  background: linear-gradient(135deg, #f5f9f7 0%, #f0f6f3 100%);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #d4e8db;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.example-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.example-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(46, 79, 59, 0.12);
  border-color: #a8c4b4;
}

.example-box strong {
  color: #2e4f3b;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.example-box p {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0;
  line-height: 1.5;
}

.call-to-action {
  background: linear-gradient(135deg, #fff9f5 0%, #fffbf8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #c4a080;
  text-align: center;
}

.call-to-action h3 {
  color: #3d5a47;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.call-to-action p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0;
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
