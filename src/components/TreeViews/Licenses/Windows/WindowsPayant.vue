<template>
  <div class="windows-payant-page">
        <!-- Décoration de fond végétale -->
    
    <div class="container">
      
      <!-- HEADER -->
      <header>
        <h1>💸 La Taxe Windows</h1>
        <p class="subtitle">"Pourquoi payer un loyer pour utiliser son propre ordinateur ?"</p>
      </header>

      <!-- LE COÛT CACHÉ -->
      <section class="card">
        <h2>🧾 L'Addition Salée</h2>
        <p>On pense souvent que Windows est "gratuit" car il est préinstallé. C'est faux. Le prix de la licence est inclus dans le prix du PC (c'est la "Taxe Microsoft").</p>
        <p>Mais pour une école, l'addition ne s'arrête pas là :</p>
        
        <div class="invoice-box">
          <ul class="invoice-list">
            <li>
              <span>Licence Windows Education</span>
              <span class="price">Payant</span>
            </li>
            <li>
              <span>Abonnement Microsoft 365 (Office)</span>
              <span class="price">Récurrent</span>
            </li>
            <li>
              <span>Antivirus (souvent nécessaire)</span>
              <span class="price">Payant</span>
            </li>
            <li class="total">
              <span>TOTAL (par an et par PC)</span>
              <span class="price">💰💰💰</span>
            </li>
          </ul>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; text-align: center; color: var(--text-muted);">
          *Multipliez cela par 500 ordinateurs dans un lycée, et vous verrez le budget partir en fumée.*
        </p>
      </section>

      <!-- LA BOMBE A RETARDEMENT (Fin de support) -->
      <section>
        <h2>💣 La Bombe d'Octobre 2025</h2>
        <div class="card warning-card">
          <h3>⚠️ Fin du support Windows 10</h3>
          <p>C'est l'argument ultime du projet NIRD. En octobre 2025, Microsoft arrête les mises à jour de sécurité pour Windows 10.</p>
          <p><strong>La conséquence ?</strong> Microsoft veut vous forcer à passer à Windows 11.</p>
          <p><strong>Le problème ?</strong> Windows 11 exige des processeurs très récents (TPM 2.0). Des millions de PC parfaitement fonctionnels vont devenir "obsolètes" du jour au lendemain et devront être jetés.</p>
          <div class="highlight-text">
            C'est un désastre écologique programmé.
          </div>
        </div>
      </section>

      <!-- L'ESPION DANS LE SALON -->
      <section>
        <h2>👁️ La Télémétrie (L'Espion)</h2>
        <div class="card">
          <p>En plus de coûter cher, Windows est un aspirateur à données.</p>
          <p>Même en désactivant les options, le système envoie régulièrement de la <strong>"Télémétrie"</strong> aux serveurs de Microsoft : quelles applications tu ouvres, combien de temps tu restes dessus, tes recherches...</p>
          <p>Dans un cadre scolaire, payer pour être espionné est un paradoxe inacceptable.</p>
        </div>
      </section>

      <!-- LA PORTE DE SORTIE -->
      <section class="next-step-section">
        <p>Il existe un monde où le système est gratuit, léger, sécurisé et ne vous espionne pas.</p>
        <div class="arrow">⬇️</div>
        <div class="solution-box">
          <p><strong>La Solution : LINUX</strong></p>
        </div>
      </section>

      <!-- ========================================= -->
      <!-- PARTIE 2 : LE QUIZ INTERACTIF (JEU)       -->
      <!-- ========================================= -->

      <div class="quiz-wrapper">
        <div class="quiz-container">
          <h2>🎮 Mission : Comprendre Windows Payant</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Mission Terminée !</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Excellent ! Tu as compris les enjeux de Windows payant.</p>
            <p v-else>⚠️ Relis les sections pour bien comprendre tous les aspects.</p>

            <div class="continue-choices">
              <p class="choices-label">Que veux-tu faire maintenant ?</p>
              
              <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center;">
                <button class="btn-next" @click="continueTo('/')">Retour au début 🌳</button>
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
  </div>
</template>

<script>
import { unlockPage, navigateToPage } from '../../../../router/progress.js'

export default {
  name: 'PageWindows',
  mounted() {
    // Débloquer cette page
    unlockPage('windows-payant')
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
          text: "Pourquoi dit-on que Windows n'est pas vraiment 'gratuit' ?",
          explanation: "Le prix de la licence Windows est inclus dans le prix du PC (la 'Taxe Microsoft').",
          options: [
            { text: "Parce que le prix de la licence est inclus dans le prix du PC", isCorrect: true },
            { text: "Parce qu'il faut payer pour les mises à jour", isCorrect: false },
            { text: "Parce qu'il est illégal de l'utiliser gratuitement", isCorrect: false }
          ]
        },
        {
          text: "Quel est le principal problème avec la fin du support de Windows 10 en octobre 2025 ?",
          explanation: "Windows 11 exige des processeurs récents (TPM 2.0), rendant obsolètes des millions de PC fonctionnels.",
          options: [
            { text: "Windows 10 va cesser de fonctionner", isCorrect: false },
            { text: "Des millions de PC fonctionnels devront être jetés", isCorrect: true },
            { text: "Il faudra acheter un nouveau disque dur", isCorrect: false }
          ]
        },
        {
          text: "Qu'est-ce que la 'Télémétrie' dans Windows ?",
          explanation: "La télémétrie envoie des données sur vos habitudes d'utilisation aux serveurs de Microsoft.",
          options: [
            { text: "L'envoi de données sur vos habitudes aux serveurs Microsoft", isCorrect: true  },
            { text: "Un système de mesure de la température du PC", isCorrect: false},
            { text: "Une fonctionnalité pour mesurer la vitesse d'Internet", isCorrect: false }
          ]
        },
        {
          text: "Quelle est l'alternative gratuite et respectueuse mentionnée dans la page ?",
          explanation: "Linux est présenté comme l'alternative gratuite, légère, sécurisée et respectueuse de la vie privée.",
          options: [
            { text: "macOS", isCorrect: false },
            { text: "Linux", isCorrect: true },
            { text: "Chrome OS", isCorrect: false }
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
      navigateToPage('windows-payant', pageId, this.$router)
    }
  }
}
</script>


<style scoped>
/* Page wrapper avec décoration de fond */
.rgpd-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5faf8 0%, #eef6f3 100%);
  position: relative;
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

/* Container principal */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  position: relative;
  z-index: 1;
}

/* En-tête */
header {
  text-align: center;
  margin-bottom: 3rem;
}

h1 {
  font-size: 2.5rem;
  color: #2e4f3b;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  color: #5a7d6a;
  margin-bottom: 0;
}

/* Sections */
section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.8rem;
  color: #2e4f3b;
  margin-bottom: 1rem;
  border-bottom: 3px solid #7dab8a;
  padding-bottom: 0.5rem;
  display: inline-block;
}

/* Cartes */
.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(46, 79, 59, 0.1);
  border-left: 4px solid #5a7d6a;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.card p {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.card p:last-child {
  margin-bottom: 0;
}

.card strong {
  color: #2e4f3b;
}

/* Listes */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card ul li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
}

.card ul li::before {
  content: "🌿";
  position: absolute;
  left: 0;
  top: 0;
}

.card ul li:last-child {
  margin-bottom: 0;
}

/* Divider */
.divider {
  border: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #e0e0e0, transparent);
  margin: 1.5rem 0;
}

/* Tableau */
.card.no-padding {
  padding: 0;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: linear-gradient(135deg, #5a7d6a, #7dab8a);
  color: white;
  padding: 1.2rem;
  text-align: left;
  font-weight: 600;
}

td {
  padding: 1rem 1.2rem;
  border-bottom: 1px solid #e8f0eb;
  color: #555;
}

tr:last-child td {
  border-bottom: none;
}

tbody tr:hover {
  background: #f5faf8;
}

/* Quiz wrapper */
.quiz-wrapper {
  margin-top: 3rem;
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