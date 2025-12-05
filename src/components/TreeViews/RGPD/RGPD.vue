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

    <div class="page-container">
      
      <!-- HEADER -->
      <header class="page-header">
        <h1>🛡️ Protection des Données (RGPD)</h1>
        <p class="subtitle">Comprendre et appliquer le règlement européen sur la protection des données</p>
      </header>

      <!-- INTRODUCTION -->
      <section class="page-section">
        <div class="content-card">
        <p>Le Règlement Général sur la Protection des Données (RGPD) est une réglementation de l'Union Européenne entrée en vigueur le <strong>25 mai 2018</strong>. Il constitue un cadre juridique visant à protéger les citoyens européens contre l'exploitation abusive de leurs données personnelles.</p>
        </div>
      </section>

      <!-- C'EST QUOI ? -->
      <section class="page-section">
        <h2>🧐 Qu'est-ce que le RGPD ?</h2>
        <div class="content-card">
          <p>Le RGPD est un texte de loi établissant que <strong>les données personnelles appartiennent aux individus</strong>. Aucune organisation ne peut les collecter, les exploiter ou les transmettre sans consentement explicite et éclairé.</p>
          <p>Dans un établissement scolaire, le RGPD protège particulièrement les données sensibles : informations sur les mineurs, résultats scolaires, coordonnées personnelles et parcours éducatifs.</p>
        </div>
      </section>

      <!-- POURQUOI ? -->
      <section>
        <h2>⚠️ Pourquoi cette protection est-elle nécessaire ?</h2>
        <div class="card">
          <p><strong>Les risques du profilage :</strong> L'utilisation d'outils numériques gratuits fournis par de grandes entreprises technologiques peut entraîner la collecte systématique de données permettant l'établissement de profils comportementaux détaillés des utilisateurs (centres d'intérêt, difficultés, opinions).</p>
          <hr class="divider">
          <p><strong>Le CLOUD Act :</strong> De nombreuses grandes entreprises technologiques (Microsoft, Google) sont soumises au droit américain. Le CLOUD Act autorise les autorités américaines à accéder aux données stockées par ces entreprises, y compris celles hébergées en Europe. Le RGPD associé à un hébergement local permet de limiter cette exposition.</p>
        </div>
      </section>

      <!-- LES 5 PILIERS -->
      <section>
        <h2>🖐️ Les 5 Principes Fondamentaux</h2>
        <div class="card">
          <ul> 
            <li><strong>La Finalité :</strong> Les données ne peuvent être collectées que pour des objectifs précis et légitimes.</li>
            <li><strong>La Minimisation :</strong> Seules les données strictement nécessaires peuvent être collectées.</li>
            <li><strong>La Durée de Conservation :</strong> Les données doivent être supprimées après une période définie.</li>
            <li><strong>La Sécurité :</strong> Des mesures techniques appropriées (chiffrement, contrôle d'accès) doivent protéger les données.</li>
            <li><strong>Les Droits des Personnes :</strong> Chacun dispose du droit d'accès, de rectification et de suppression de ses données personnelles.</li>
          </ul>
        </div>
      </section>

      <!-- TABLEAU COMPARATIF -->
      <section>
        <h2>✅ Bonnes Pratiques et Alternatives</h2>
        <div class="card no-padding">
          <table>
            <thead>
              <tr>
                <th>❌ Pratiques Non Conformes</th>
                <th>✅ Alternatives Conformes au RGPD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Groupe WhatsApp / Facebook</td>
                <td>Signal ou Messagerie ENT</td>
              </tr>
              <tr>
                <td>Google Drive / Dropbox</td>
                <td>Nextcloud / Serveur du Lycée</td>
              </tr>
              <tr>
                <td>WeTransfer</td>
                <td>FileSender (Éducation Nationale)</td>
              </tr>
              <tr>
                <td>Photos sans floutage</td>
                <td>Autorisation ou Floutage (Droit à l'image)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ========================================= -->
      <!-- PARTIE 2 : LE QUIZ INTERACTIF (JEU)       -->
      <!-- ========================================= -->

      <div class="quiz-wrapper">
        <div class="quiz-container">
          <h2>📋 Quiz : Évaluation des Connaissances RGPD</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Quiz Terminé</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Excellent ! Vous maîtrisez les principes du RGPD.</p>
            <p v-else>⚠️ Certaines notions nécessitent une révision. Nous vous recommandons de relire le contenu.</p>

            <div class="continue-choices">
              <p class="choices-label">Que veux-tu faire maintenant ?</p>
              <div class="choices-grid">
                <button class="choice-button" @click="continueTo('stockage-hors-ue')">
                  <span class="choice-icon">🔒</span>
                  <span class="choice-title">Continuer : Stockage des données hors UE</span>
                  <span class="choice-desc">Revoir ou approfondir le stockage hors UE</span>
                </button>
              </div>

              <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center;">
                <button class="btn-primary" @click="continueTo('presentation')">Retour au début 🌳</button>
                <button class="btn-primary" @click="restartQuiz">Recommencer la mission</button>
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

            <button v-if="hasAnswered" class="btn-primary" @click="nextQuestion">
              {{ currentQuestion < questions.length - 1 ? 'Question Suivante' : 'Voir le résultat' }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { unlockPage, navigateToPage } from '../../../router/progress.js'

export default {
  name: 'PageRGPD',
  mounted() {
    // Débloquer cette page
    unlockPage('confidentialite')
    // S'assurer d'être en haut de la page lorsque la route est chargée
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch (e) {}
  },
  data() {
    return {
      // --- DONNÉES DU QUIZ ---
      currentQuestion: 0,
      score: 0,
      hasAnswered: false,
      selectedAnswer: null,
      isCurrentCorrect: false,
      quizFinished: false,
      questions: [
        {
          text: "Quelle loi protège les données des européens contre les GAFAM ?",
          explanation: "C'est le Règlement Général sur la Protection des Données, actif depuis 2018.",
          options: [
            { text: "Le CLOUD Act", isCorrect: false },
            { text: "Le RGPD", isCorrect: true },
            { text: "La Loi de Murphy", isCorrect: false }
          ]
        },
        {
          text: "Votre prof veut envoyer un fichier de 2Go. Quel outil est conforme ?",
          explanation: "FileSender est l'outil sécurisé de l'Éducation Nationale. WeTransfer revend des données.",
          options: [
            { text: "WeTransfer", isCorrect: false },
            { text: "FileSender", isCorrect: true },
            { text: "Par mail en pièce jointe", isCorrect: false }
          ]
        },
        {
          text: "Pourquoi le 'Cloud Act' américain est-il un problème pour l'école ?",
          explanation: "Il permet aux espions US de lire les données stockées chez Microsoft ou Google.",
          options: [
            { text: "Il permet aux USA d'accéder à nos données", isCorrect: true },
            { text: "Il fait pleuvoir sur les serveurs", isCorrect: false },
            { text: "Il rend les ordinateurs plus lents", isCorrect: false }
          ]
        },
        {
          text: "Quelle est la règle de la 'Minimisation' ?",
          explanation: "On ne collecte que ce qui est strictement utile pour la mission.",
          options: [
            { text: "Rendre les fichiers tout petits", isCorrect: false },
            { text: "Ne collecter que les données strictement nécessaires", isCorrect: true },
            { text: "Parler le moins possible", isCorrect: false }
          ]
        }
      ]
    }
  },
  methods: {
    selectAnswer(index, isCorrect) {
      this.hasAnswered = true;
      this.selectedAnswer = index;
      this.isCurrentCorrect = isCorrect;
      if (isCorrect) {
        this.score++;
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.hasAnswered = false;
        this.selectedAnswer = null;
      } else {
        // Quiz fini : marquer la page comme complétée
        try {
          completePage('confidentialite')
        } catch (e) {
          // ignore if store not available
        }
        this.quizFinished = true;
      }
    },
    restartQuiz() {
      this.currentQuestion = 0;
      this.score = 0;
      this.hasAnswered = false;
      this.selectedAnswer = null;
      this.quizFinished = false;
    }
    ,
    continueTo(pageId) {
      // Utiliser la méthode centralisée de navigation
      navigateToPage('confidentialite', pageId, this.$router)
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques supplémentaires si nécessaire */
.content-card.no-padding {
  padding: 0;
}
</style>