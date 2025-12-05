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
        <div class="header-icon">💰</div>
        <h1>Les Enjeux des Licences Logicielles</h1>
        <p class="subtitle">Analyse économique et technique des licences propriétaires</p>
      </div>

      <section class="section">
        <h2>🎯 Le Constat</h2>
        <p>
          Les licences de logiciels payants représentent un enjeu majeur dans le contexte du numérique responsable.
          Elles créent des barrières à l'accès à la technologie, augmentent les coûts pour les entreprises et les
          utilisateurs, et limitent la possibilité de contrôler et d'améliorer les outils que nous utilisons.
        </p>
      </section>

      <section class="section">
        <h2>💸 Enjeux Économiques</h2>
        <div class="issue-card">
          <h3>📊 Coûts Récurrents</h3>
          <p>
            Les licences payantes génèrent des dépenses continues pour les entreprises et les particuliers.
            Ces coûts peuvent devenir prohibitifs, en particulier pour les petites structures et les pays en développement.
          </p>
          <div class="cost-example">
            <p><strong>Exemple concret :</strong></p>
            <ul>
              <li>Microsoft 365 : ~70€/an par utilisateur</li>
              <li>Adobe Creative Cloud : ~60€/mois (~720€/an)</li>
              <li>Windows Pro : ~259€ (licence unique)</li>
              <li>Pour une petite entreprise de 10 personnes : plusieurs milliers d'euros par an</li>
            </ul>
          </div>
        </div>
        <div class="issue-card">
          <h3>🔒 Enfermement Propriétaire (Lock-in)</h3>
          <p>
            Une fois dépendant d'un logiciel payant, il est difficile d'en changer sans perdre ses données ou
            investissements. C'est ce qu'on appelle le « lock-in » ou enfermement numérique.
          </p>
          <p style="margin-top: 0.75rem;">
            <strong>Conséquence :</strong> Les entreprises sont "piégées" et doivent continuer à payer, même si le prix augmente.
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
        <h2>🌱 La Solution : Les Alternatives Libres</h2>
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
              <button class="choice-button" @click="continueTo('logiciels-alternatifs')">
                <span class="choice-icon">🔄</span>
                <span class="choice-title">Logiciels Alternatifs</span>
                <span class="choice-desc">Découvrir les alternatives gratuites</span>
              </button>
              <button class="choice-button" @click="continueTo('windows-payant')">
                <span class="choice-icon">💰</span>
                <span class="choice-title">Windows Payant</span>
                <span class="choice-desc">Explorer le cas de Windows</span>
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
/* Styles spécifiques pour les cartes d'enjeux et solutions */
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

.issue-card:hover {
  transform: translateX(6px);
  box-shadow: 0 8px 20px rgba(196, 160, 128, 0.15);
}

.solution-card {
  background: linear-gradient(135deg, #e8f0eb 0%, #d4e8db 100%);
  border: 2px solid #a8c4b4;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.solution-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 15px 35px rgba(90, 125, 106, 0.2);
}

.solution-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
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

.cost-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e74c3c;
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
</style>
