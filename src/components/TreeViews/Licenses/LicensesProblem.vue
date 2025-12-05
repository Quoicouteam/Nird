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

    <!-- ========================================= -->
    <!-- PARTIE 2 : LE QUIZ INTERACTIF (JEU)       -->
    <!-- ========================================= -->

    <div class="quiz-wrapper">
      <div class="quiz-container">
        <h2>🎮 Mission : Comprendre les Licences</h2>
        
        <!-- ÉCRAN DE FIN -->
        <div v-if="quizFinished">
          <p class="mission-status">Mission Terminée !</p>
          <div class="score-box">{{ score }} / {{ questions.length }}</div>
          <p v-if="score === questions.length">🌟 Parfait ! Tu as compris les enjeux des licences payantes.</p>
          <p v-else>⚠️ Relis bien les sections pour comprendre tous les aspects.</p>

          <div class="continue-choices">
            <p class="choices-label">Que veux-tu faire maintenant ?</p>
            <div class="choices-grid">
              <button class="choice-button" @click="continueTo('windows-payant')">
                <span class="choice-icon">💰</span>
                <span class="choice-title">Continuer : Windows Payant</span>
                <span class="choice-desc">Explorer le cas de Windows</span>
              </button>
            </div>

            <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center;">
              <button class="btn-next" @click="continueTo('/')">Aller à l'arbre 🌳</button>
              <button class="btn-next" @click="restartQuiz">Relancer le quiz</button>
            </div>
          </div>
        </div>

        <!-- QUESTIONNAIRE -->
        <div v-else>
          <p class="question-count">Question {{ currentQuestion + 1 }} / {{ questions.length }}</p>
          <h3 class="question-text">{{ questions[currentQuestion].text }}</h3>

          <div v-for="(option, index) in questions[currentQuestion].options" :key="index">
            <button 
              class="btn-option" 
              :class="{ 
                  'correct': hasAnswered && option.isCorrect, 
                  'wrong': hasAnswered && !option.isCorrect && selectedAnswer === index 
              }"
              :disabled="hasAnswered"
              @click="selectAnswer(index, option.isCorrect)"
            >
              {{ option.text }}
            </button>
          </div>

          <p v-if="hasAnswered && isCurrentCorrect" class="feedback success">✅ Correct ! {{ questions[currentQuestion].explanation }}</p>
          <p v-if="hasAnswered && !isCurrentCorrect" class="feedback error">❌ Erreur ! {{ questions[currentQuestion].explanation }}</p>

          <button v-if="hasAnswered" class="btn-next" @click="nextQuestion">
            {{ currentQuestion < questions.length - 1 ? 'Question Suivante' : 'Voir le résultat' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { unlockPage, navigateToPage } from '../../../router/progress.js'

export default {
  name: 'PageLicences',
  mounted() {
    // Débloquer cette page
    unlockPage('licences')
    // S'assurer d'être en haut de la page lorsque la route est chargée
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch (e) {}
  },
  data() {
    return {
      // --- LOGIQUE DU QUIZ ---
      currentQuestion: 0,
      score: 0,
      hasAnswered: false,
      selectedAnswer: null,
      isCurrentCorrect: false,
      quizFinished: false,
      questions: [
        {
          text: "Quel est le principal problème des licences payantes pour les petites structures ?",
          explanation: "Les coûts récurrents peuvent devenir prohibitifs pour les petites entreprises et écoles.",
          options: [
            { text: "Elles sont trop complexes à comprendre", isCorrect: false },
            { text: "Elles génèrent des coûts prohibitifs", isCorrect: true },
            { text: "Elles sont uniquement disponibles en anglais", isCorrect: false }
          ]
        },
        {
          text: "Qu'est-ce que le 'lock-in' (enfermement propriétaire) ?",
          explanation: "Le lock-in rend difficile le changement de logiciel sans perdre ses données ou investissements.",
          options: [
            { text: "Un système de sécurité pour protéger les fichiers", isCorrect: false },
            { text: "La difficulté de changer de logiciel sans perdre ses données", isCorrect: true },
            { text: "Une fonctionnalité qui verrouille l'ordinateur", isCorrect: false }
          ]
        },
        {
          text: "Pourquoi les logiciels propriétaires posent-ils un problème de transparence ?",
          explanation: "Sans accès au code source, impossible de vérifier la sécurité ou le respect de la vie privée.",
          options: [
            { text: "Parce que leur code source n'est pas accessible publiquement", isCorrect: true },
            { text: "Parce qu'ils sont trop chers", isCorrect: false },
            { text: "Parce qu'ils sont difficiles à installer", isCorrect: false }
          ]
        },
        {
          text: "Quel est l'avantage principal des logiciels libres et open source ?",
          explanation: "L'accès au code source permet à tous d'examiner, modifier et améliorer le logiciel.",
          options: [
            { text: "Ils sont toujours plus rapides", isCorrect: false },
            { text: "Ils n'ont jamais de bugs", isCorrect: false },
            { text: "Accès au code source pour tous", isCorrect: true }
          ]
        }
      ]
    }
  },
  methods: {
    selectAnswer(index, isCorrect) {
      this.hasAnswered = true
      this.selectedAnswer = index
      this.isCurrentCorrect = isCorrect
      if (isCorrect) {
        this.score++
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
        this.hasAnswered = false
        this.selectedAnswer = null
      } else {
        this.quizFinished = true
      }
    },
    restartQuiz() {
      this.currentQuestion = 0
      this.score = 0
      this.hasAnswered = false
      this.selectedAnswer = null
      this.quizFinished = false
    },
    continueTo(pageId) {
      navigateToPage('licences', pageId, this.$router)
    }
  }
}
</script>

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

/* Quiz wrapper */
.quiz-wrapper {
  margin-top: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}

.quiz-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(46, 79, 59, 0.1);
  border: 2px solid #d4e5da;
  text-align: center;
}

.quiz-container h2 {
  display: block;
  margin-bottom: 2rem;
  color: #2e4f3b;
  border-color: #5a7d6a;
}

.question-count {
  color: #5a7d6a;
  font-weight: 600;
  margin-bottom: 1rem;
}

.question-text {
  font-size: 1.3rem;
  color: #2e4f3b;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* Boutons options */
.btn-option {
  display: block;
  width: 100%;
  padding: 1rem;
  margin: 0.75rem 0;
  background: white;
  color: #555;
  border: 2px solid #d4e5da;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-align: left;
  font-weight: 500;
}

.btn-option:hover:not(:disabled) {
  border-color: #5a7d6a;
  background: #f5faf8;
  transform: translateX(5px);
}

.btn-option.correct {
  background: rgba(125, 171, 138, 0.15);
  border-color: #7dab8a;
  color: #2e4f3b;
}

.btn-option.wrong {
  background: rgba(248, 113, 113, 0.15);
  border-color: #f87171;
  color: #c53030;
}

/* Score box */
.score-box {
  font-size: 3rem;
  font-weight: 800;
  color: #5a7d6a;
  margin: 1.5rem 0;
}

.mission-status {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2e4f3b;
}

/* Boutons */
.btn-next {
  background: linear-gradient(135deg, #5a7d6a, #7dab8a);
  color: white;
  font-weight: 600;
  padding: 12px 32px;
  border: none;
  border-radius: 20px;
  margin-top: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(90, 125, 106, 0.2);
}

.btn-next:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(90, 125, 106, 0.3);
}

/* Continuation choices (après quiz) */
.continue-choices {
  margin-top: 1.5rem;
}

.choices-label {
  text-align: center;
  font-size: 1.1rem;
  color: #2e4f3b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.choices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.choice-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background: white;
  border: 2px solid #d4e5da;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.choice-button:hover {
  transform: translateY(-6px);
  border-color: #5a7d6a;
}

.choice-icon { font-size: 1.6rem; margin-bottom: 0.5rem; }
.choice-title { font-weight: 700; color: #2e4f3b; margin-bottom: 0.25rem; }
.choice-desc { color: #666; font-size: 0.95rem; }

/* Feedback */
.feedback {
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
}

.feedback.success {
  color: #7dab8a;
}

.feedback.error {
  color: #c53030;
}
</style>
