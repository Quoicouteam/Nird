<template>
  <div class="page-wrapper">
    <!-- Décoration de fond végétale -->
    <div class="nature-bg">
      <div class="leaf leaf-1">🍃</div>
      <div class="leaf leaf-2">🌿</div>
      <div class="leaf leaf-3">🍂</div>
      <div class="leaf leaf-4">🌱</div>
      <div class="leaf leaf-5">🍃</div>
      <div class="leaf leaf-6">🌿</div>
    </div>

    <article class="page-container">
      <div class="page-header">
        <div class="header-icon">🔄</div>
        <h1>Alternatives Libres aux Logiciels Propriétaires</h1>
        <p class="subtitle">Présentation de solutions open source professionnelles et gratuites</p>
      </div>

      <section class="section">
        <h2>🎯 Le Constat</h2>
        <p>
          Les logiciels professionnels payants sont souvent considérés comme indispensables. Pourtant, pour chaque solution propriétaire coûteuse, il existe des alternatives libres et gratuites, souvent tout aussi performantes.
        </p>
      </section>

      <section class="section">
        <h2>🎬 Montage Vidéo</h2>
        <div class="alternative-card">
          <div class="soft-comparison">
            <div class="soft-item paid">
              <span class="soft-icon">💰</span>
              <h3>Adobe Premiere Pro</h3>
              <p class="price">~24€/mois (abonnement)</p>
              <p>Logiciel professionnel de référence, mais coûteux et lourd</p>
            </div>
            <div class="arrow">→</div>
            <div class="soft-item free">
              <span class="soft-icon">🆓</span>
              <h3>Kdenlive</h3>
              <p class="price">Gratuit & Open Source</p>
              <p>Puissant, complet, utilisé par des professionnels. Compatible avec tous les formats.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>📝 Suite Bureautique</h2>
        <div class="alternative-card">
          <div class="soft-comparison">
            <div class="soft-item paid">
              <span class="soft-icon">💰</span>
              <h3>Microsoft 365</h3>
              <p class="price">~70€/an (par utilisateur)</p>
              <p>Word, Excel, PowerPoint dans le cloud avec OneDrive</p>
            </div>
            <div class="arrow">→</div>
            <div class="soft-item free">
              <span class="soft-icon">🆓</span>
              <h3>LibreOffice</h3>
              <p class="price">Gratuit & Open Source</p>
              <p>Writer, Calc, Impress. Compatible avec tous les formats Office. Aucun abonnement.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>🎨 Retouche Photo</h2>
        <div class="alternative-card">
          <div class="soft-comparison">
            <div class="soft-item paid">
              <span class="soft-icon">💰</span>
              <h3>Adobe Photoshop</h3>
              <p class="price">~24€/mois (abonnement)</p>
              <p>La référence en retouche photo professionnelle</p>
            </div>
            <div class="arrow">→</div>
            <div class="soft-item free">
              <span class="soft-icon">🆓</span>
              <h3>GIMP</h3>
              <p class="price">Gratuit & Open Source</p>
              <p>Retouche photo avancée, calques, filtres, plugins. Utilisé par des millions de designers.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>🤖 Intelligence Artificielle</h2>
        <div class="alternative-card">
          <div class="soft-comparison">
            <div class="soft-item paid">
              <span class="soft-icon">💰</span>
              <h3>ChatGPT Plus</h3>
              <p class="price">~20€/mois</p>
              <p>IA conversationnelle avec modèle GPT-4</p>
            </div>
            <div class="arrow">→</div>
            <div class="soft-item free">
              <span class="soft-icon">🆓</span>
              <h3>HuggingChat</h3>
              <p class="price">Gratuit & Open Source</p>
              <p>IA open source avec plusieurs modèles disponibles. Respecte votre vie privée.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>📊 Tableau Récapitulatif</h2>
        <div class="recap-table">
          <table>
            <thead>
              <tr>
                <th>Besoin</th>
                <th>💰 Payant</th>
                <th>🆓 Gratuit</th>
                <th>💡 Économie annuelle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Montage Vidéo</td>
                <td>Premiere Pro</td>
                <td>Kdenlive</td>
                <td>~288€</td>
              </tr>
              <tr>
                <td>Bureautique</td>
                <td>Microsoft 365</td>
                <td>LibreOffice</td>
                <td>~70€</td>
              </tr>
              <tr>
                <td>Retouche Photo</td>
                <td>Photoshop</td>
                <td>GIMP</td>
                <td>~288€</td>
              </tr>
              <tr>
                <td>IA Conversationnelle</td>
                <td>ChatGPT Plus</td>
                <td>HuggingChat</td>
                <td>~240€</td>
              </tr>
              <tr class="total-row">
                <td colspan="3"><strong>TOTAL PAR AN</strong></td>
                <td><strong>~886€</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="text-align: center; margin-top: 1rem; color: #5a7d6a; font-style: italic;">
          *Pour un lycée de 500 élèves, cela représente des centaines de milliers d'euros économisés chaque année.
        </p>
      </section>

      <section class="section call-to-action">
        <h3>💡 À Retenir</h3>
        <p>
          Les logiciels libres ne sont pas des "versions pauvres". Ce sont des outils professionnels, 
          maintenus par des communautés passionnées, utilisés dans le monde entier par des entreprises, 
          des écoles et des créateurs professionnels.
        </p>
      </section>
    </article>

    <!-- ========================================= -->
    <!-- QUIZ INTERACTIF -->
    <!-- ========================================= -->

    <div class="quiz-wrapper">
      <div class="quiz-container">
        <h2>📋 Quiz : Évaluation des Connaissances sur les Alternatives Libres</h2>
        
        <!-- ÉCRAN DE FIN -->
        <div v-if="quizFinished">
          <p class="mission-status">Quiz Terminé</p>
          <div class="score-box">{{ score }} / {{ questions.length }}</div>
          <p v-if="score === questions.length">🌟 Excellent ! Vous connaissez maintenant les principales alternatives libres.</p>
          <p v-else>⚠️ Nous vous recommandons de relire les comparaisons pour mieux mémoriser les alternatives.</p>

          <div class="continue-choices">
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
</template>

<script>
import { unlockPage, navigateToPage, grantLetter } from '../../../../router/progress.js'

export default {
  name: 'PageLogicielsAlternatifs',
  mounted() {
    unlockPage('logiciels-alternatifs')
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch (e) {}
  },
  data() {
    return {
      currentQuestion: 0,
      score: 0,
      hasAnswered: false,
      selectedAnswer: null,
      isCurrentCorrect: false,
      quizFinished: false,
      // small message when letter N unlocked
      showUnlockMessageN: false,
      questions: [
        {
          text: "Quelle est l'alternative gratuite à Adobe Premiere Pro pour le montage vidéo ?",
          explanation: "Kdenlive est un logiciel de montage vidéo professionnel, gratuit et open source.",
          options: [
            { text: "Windows Movie Maker", isCorrect: false },
            { text: "Kdenlive", isCorrect: true },
            { text: "iMovie", isCorrect: false }
          ]
        },
        {
          text: "Quelle suite bureautique gratuite remplace Microsoft 365 ?",
          explanation: "LibreOffice est une suite bureautique complète, gratuite et compatible avec les formats Office.",
          options: [
            { text: "Google Docs", isCorrect: false },
            { text: "LibreOffice", isCorrect: true },
            { text: "WPS Office", isCorrect: false }
          ]
        },
        {
          text: "Quel logiciel libre peut remplacer Adobe Photoshop ?",
          explanation: "GIMP (GNU Image Manipulation Program) est l'alternative libre la plus puissante à Photoshop.",
          options: [
            { text: "GIMP", isCorrect: true },
            { text: "Paint.NET", isCorrect: false },
            { text: "Canva", isCorrect: false }
          ]
        },
        {
          text: "Quelle est l'économie annuelle approximative en utilisant toutes ces alternatives gratuites ?",
          explanation: "En utilisant Kdenlive, LibreOffice, GIMP et HuggingChat au lieu des versions payantes, on économise environ 886€ par an.",
          options: [
            { text: "~200€", isCorrect: false },
            { text: "~500€", isCorrect: false },
            { text: "~886€", isCorrect: true }
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
        // grant the 'N' letter for the easter-egg
        try { grantLetter('N') } catch (e) {}
        this.showUnlockMessageN = true
        setTimeout(() => { this.showUnlockMessageN = false }, 3000)
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
      navigateToPage('logiciels-alternatifs', pageId, this.$router)
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques pour les comparaisons de logiciels */
.alternative-card {
  background: linear-gradient(135deg, #f5f9f7 0%, #e8f5e9 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 2px solid #c8e6c9;
}

.soft-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: center;
}

@media (max-width: 768px) {
  .soft-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .arrow {
    display: none;
  }
}

.soft-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.soft-item.paid {
  border: 3px solid #e74c3c;
}

.soft-item.free {
  border: 3px solid #66bb6a;
}

.soft-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.soft-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.soft-item h3 {
  color: #2e4f3b;
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

.price {
  color: #e74c3c;
  font-weight: 700;
  font-size: 1rem;
  margin: 0.5rem 0;
}

.soft-item.free .price {
  color: #66bb6a;
}

.soft-item p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.arrow {
  font-size: 2rem;
  color: #5a7d6a;
  font-weight: bold;
}

.total-row {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  font-weight: 700;
}

.total-row td {
  color: #2e4f3b;
  font-size: 1.1rem;
}

.call-to-action {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #66bb6a;
  text-align: center;
}

.call-to-action h3 {
  color: #2e4f3b;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  margin-top: 0;
}
</style>
