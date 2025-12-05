<template>
  <div class="page-wrapper">
        <!-- Décoration de fond végétale -->
    
    <div class="page-container">
      
      <!-- HEADER -->
      <header class="page-header">
        <h1>💸 Le Coût des Licences Windows</h1>
        <p class="subtitle">Analyse des coûts liés aux licences Microsoft et leurs implications</p>
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
          <h2>📋 Quiz : Évaluation des Connaissances sur les Licences Windows</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Quiz Terminé</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Excellent ! Vous avez compris les enjeux des licences Windows.</p>
            <p v-else>⚠️ Nous vous recommandons de relire les sections pour mieux comprendre tous les aspects.</p>

            <div class="continue-choices">
              <p class="choices-label">Que veux-tu faire maintenant ?</p>
              
              <div class="choices-grid">
                <button class="choice-button" @click="continueTo('linux')">
                  <span class="choice-icon">🐧</span>
                  <span class="choice-title">Découvrir Linux</span>
                  <span class="choice-desc">La solution libre et gratuite</span>
                </button>
              </div>

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
/* Styles spécifiques pour la facture et avertissements */
.invoice-box {
  background: rgba(255, 243, 224, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.invoice-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px dashed #ddd;
}

.invoice-list li.total {
  border-top: 2px solid #2e4f3b;
  border-bottom: none;
  font-weight: 700;
  padding-top: 1rem;
  margin-top: 0.5rem;
}

.warning-card {
  border-left-color: #ff9800 !important;
  background: rgba(255, 152, 0, 0.05);
}

.highlight-text {
  background: rgba(255, 152, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
}

.next-step-section {
  text-align: center;
  margin: 2rem 0;
}

.arrow {
  font-size: 2rem;
  margin: 1rem 0;
}

.solution-box {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 1.2rem;
  color: #2e4f3b;
}
</style>