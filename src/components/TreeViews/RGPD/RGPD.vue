<template>
  <div class="rgpd-page">
    <!-- Décoration de fond végétale -->
    <div class="nature-bg">
      <div class="leaf leaf-1">🍃</div>
      <div class="leaf leaf-2">🌿</div>
      <div class="leaf leaf-3">🍂</div>
      <div class="leaf leaf-4">🌱</div>
      <div class="leaf leaf-5">🍃</div>
      <div class="leaf leaf-6">🌿</div>
    </div>

    <div class="container">
      
      <!-- HEADER -->
      <header>
        <h1>🛡️ Le Bouclier de Données (RGPD)</h1>
        <p class="subtitle">Protège ton identité face à l'Empire Numérique</p>
      </header>

      <!-- INTRODUCTION -->
      <section class="card">
        <p>Le Règlement Général sur la Protection des Données (RGPD) est une réglementation de l'Union Européenne entrée en vigueur le <strong>25 mai 2018</strong>. C'est l'armure qui protège les citoyens contre l'exploitation abusive de leurs données personnelles.</p>
      </section>

      <!-- C'EST QUOI ? -->
      <section>
        <h2>🧐 C'est quoi ce code secret ?</h2>
        <div class="card">
          <p>Le RGPD n'est pas une punition administrative. C'est la loi qui dit que <strong>tes données t'appartiennent</strong>. Personne ne peut les voler, les vendre ou les stocker sans ton accord.</p>
          <p>Dans un établissement scolaire, le RGPD protège les données les plus sensibles : celles des mineurs (élèves), leurs notes, leurs adresses et leurs parcours scolaires.</p>
        </div>
      </section>

      <!-- POURQUOI ? -->
      <section>
        <h2>⚠️ Pourquoi avons-nous besoin de ce bouclier ?</h2>
        <div class="card">
          <p><strong>Le danger du profilage :</strong> Quand un établissement utilise des outils gratuits de Big Tech, ces entreprises aspirent des données pour créer un "double numérique" de l'élève (goûts, difficultés, opinions).</p>
          <hr class="divider">
          <p><strong>Le CLOUD Act :</strong> La plupart des géants (Microsoft, Google) sont américains. La loi US leur permet d'accéder aux données stockées, même en Europe. Le RGPD + des serveurs locaux bloquent cette porte dérobée.</p>
        </div>
      </section>

      <!-- LES 5 PILIERS -->
      <section>
        <h2>🖐️ Les 5 Piliers de la Résistance</h2>
        <div class="card">
          <ul> 
            <li><strong>La Finalité :</strong> On ne collecte pas des données "au cas où".</li>
            <li><strong>La Minimisation :</strong> On ne prend que le strict nécessaire (Sobriété).</li>
            <li><strong>La Durée de Conservation :</strong> Les données ont une date de péremption.</li>
            <li><strong>La Sécurité :</strong> Chiffrement obligatoire. Pas de clé USB qui traîne !</li>
            <li><strong>Les Droits des Personnes :</strong> Tu as le droit de demander "Qu'est-ce que vous savez sur moi ?".</li>
          </ul>
        </div>
      </section>

      <!-- TABLEAU COMPARATIF -->
      <section>
        <h2>✅ Les bons réflexes (Le Comparateur)</h2>
        <div class="card no-padding">
          <table>
            <thead>
              <tr>
                <th>❌ Pratique de l'Empire</th>
                <th>✅ Pratique Résistante (NIRD)</th>
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
          <h2>🎮 Mission : Inspecteur RGPD</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Mission Terminée !</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Bravo, tu es un véritable Gardien des Données !</p>
            <p v-else>⚠️ Tu as laissé passer quelques fuites de données. Relis le cours !</p>

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
                <button class="btn-next" @click="continueTo('presentation')">Aller à l'arbre 🌳</button>
                <button class="btn-next" @click="restartQuiz">Recommencer la mission</button>
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