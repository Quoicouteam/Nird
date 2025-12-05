<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { visitPage, completePage } from '../stores/progress.js'

const router = useRouter()

onMounted(() => {
  visitPage('licences')
})

function markAsRead() {
  completePage('licences')
  router.push('/')
}

function goToWindowsPayant() {
  // marquer la page comme lue puis naviguer vers la page WindowsPayant
  completePage('licences')
  router.push('/page/windows-payant')
}
</script>

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

      <section class="section windows-section">
        <h2>💻 Le Cas Particulier : Windows</h2>
        <div class="windows-content">
          <div class="windows-intro">
            <p>
              Windows est un système d'exploitation propriétaire de Microsoft, présent sur plus de 70% des ordinateurs dans le monde.
              Son modèle économique illustre parfaitement les problèmes des licences payantes à grande échelle.
            </p>
          </div>

          <div class="windows-cost">
            <h3>💰 Le Coût de Windows</h3>
            <div class="cost-breakdown">
              <div class="cost-item">
                <span class="cost-label">Windows 11 Home</span>
                <span class="cost-value">~145€</span>
              </div>
              <div class="cost-item">
                <span class="cost-label">Windows 11 Pro</span>
                <span class="cost-value">~259€</span>
              </div>
              <div class="cost-item enterprise">
                <span class="cost-label">Entreprises (licences multiples)</span>
                <span class="cost-value">Des milliers d'euros/an</span>
              </div>
            </div>
          </div>

          <div class="windows-issues">
            <h3>⚠️ Problématiques</h3>
            <div class="issues-grid">
              <div class="issue-box">
                <div class="issue-icon">🔒</div>
                <h4>Écosystème Fermé</h4>
                <p>Difficile de quitter l'écosystème Microsoft une fois installé (Office, OneDrive, etc.)</p>
              </div>
              <div class="issue-box">
                <div class="issue-icon">👁️</div>
                <h4>Télémétrie Invasive</h4>
                <p>Collecte massive de données utilisateur, difficile à désactiver complètement</p>
              </div>
              <div class="issue-box">
                <div class="issue-icon">📱</div>
                <h4>Bloatware</h4>
                <p>Applications pré-installées non désirées, publicités dans le système</p>
              </div>
              <div class="issue-box">
                <div class="issue-icon">🔄</div>
                <h4>Mises à jour Forcées</h4>
                <p>Contrôle limité sur les mises à jour, parfois problématiques</p>
              </div>
            </div>
          </div>

          <div class="windows-alternative">
            <h3>🐧 L'Alternative : GNU/Linux</h3>
            <p class="linux-brief">
              Des systèmes d'exploitation libres et gratuits comme <strong>Ubuntu</strong>, <strong>Linux Mint</strong> ou 
              <strong>Fedora</strong> offrent une alternative complète à Windows, sans coût de licence, avec un respect total 
              de votre vie privée et des performances optimales. Cette alternative sera explorée en détail dans une page dédiée.
            </p>
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

    <!-- Carte de navigation vers WindowsPayant -->
    <section class="section bottom-card-section">
      <div class="bottom-card">
        <div class="bottom-card-content">
          <h3>💻 En savoir plus : Windows Payant</h3>
          <p>Comprendre en détail les implications des versions payantes de Windows et comment s'en prémunir.</p>
        </div>
        <div class="bottom-card-actions">
          <button class="btn-next" @click="goToWindowsPayant">Aller à Windows (payant)</button>
        </div>
      </div>
    </section>

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

/* Bottom card linking to WindowsPayant */
.bottom-card-section {
  max-width: 900px;
  margin: 0 auto 2rem auto;
  padding: 0 2rem;
}
.bottom-card {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #fffaf6 0%, #f7fbf8 100%);
  border: 1px solid #e6dfd6;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.04);
}
.bottom-card-content h3 {
  margin: 0 0 0.25rem 0;
  color: #2e4f3b;
}
.bottom-card-content p {
  margin: 0;
  color: #555;
}
.bottom-card-actions .btn-next {
  padding: 10px 20px;
}

/* Décoration de fond végétale */
.nature-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.leaf {
  position: absolute;
  font-size: 3rem;
  opacity: 0.08;
  animation: float 8s ease-in-out infinite;
}

.leaf-1 { top: 5%; left: 5%; animation-delay: 0s; }
.leaf-2 { top: 15%; right: 10%; animation-delay: 2s; }
.leaf-3 { bottom: 20%; left: 15%; animation-delay: 4s; }
.leaf-4 { top: 50%; right: 5%; animation-delay: 1s; }
.leaf-5 { bottom: 10%; right: 20%; animation-delay: 3s; }
.leaf-6 { top: 30%; left: 10%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(20px) rotate(10deg); }
}

.examples {
  background: linear-gradient(135deg, #f5f9f7 0%, #f0f6f3 100%);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #d4e8db;
}

/* Section Windows */
.windows-section {
  background: linear-gradient(135deg, #e8f4fd 0%, #d4e9f7 100%);
  padding: 2.5rem;
  border-radius: 16px;
  border: 3px solid #4a90e2;
  margin: 3rem 0;
}

.windows-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.windows-intro {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4a90e2;
}

.windows-intro p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
}

.windows-cost {
  background: white;
  padding: 2rem;
  border-radius: 12px;
}

.windows-cost h3 {
  color: #2e4f3b;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  margin-top: 0;
}

.cost-breakdown {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cost-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f2f5 100%);
  border-radius: 8px;
  border-left: 4px solid #4a90e2;
  transition: all 0.3s ease;
}

.cost-item:hover {
  transform: translateX(6px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.2);
}

.cost-item.enterprise {
  background: linear-gradient(135deg, #ffe8e8 0%, #ffd6d6 100%);
  border-left-color: #e74c3c;
}

.cost-label {
  font-weight: 600;
  color: #333;
  font-size: 1rem;
}

.cost-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e74c3c;
}

.windows-issues h3 {
  color: #2e4f3b;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  margin-top: 0;
}

.issues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.issue-box {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #ffd6d6;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.issue-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(231, 76, 60, 0.15);
  border-color: #e74c3c;
}

.issue-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float-gentle 3s ease-in-out infinite;
}

.issue-box h4 {
  color: #2e4f3b;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.issue-box p {
  font-size: 0.85rem;
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.windows-alternative {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #66bb6a;
}

.windows-alternative h3 {
  color: #2e4f3b;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 0;
  text-align: center;
}

.linux-brief {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
  border-left: 4px solid #66bb6a;
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
