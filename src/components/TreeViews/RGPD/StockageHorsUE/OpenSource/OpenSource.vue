<template>
  <div class="opensource-page">
    
    <!-- ========================================= -->
    <!-- PARTIE 1 : LE CONTENU PÉDAGOGIQUE (COURS) -->
    <!-- ========================================= -->

    <div class="container">
      
      <!-- HEADER -->
      <header>
        <h1>🔓 Le Code Transparent : L'Open Source</h1>
        <p class="subtitle">"Si c'est gratuit, c'est toi le produit." (Sauf si c'est Libre)</p>
      </header>

      <!-- LE PIÈGE DU GRATUIT -->
      <section class="card">
        <h2>🕵️ Le Piège de la "Boîte Noire"</h2>
        <p>La plupart des logiciels que tu utilises (Windows, TikTok, Chrome) sont des <strong>"Boîtes Noires"</strong> (Logiciels Propriétaires).</p>
        <p>Leur code de fabrication est secret. Personne ne peut vérifier ce qu'ils font vraiment.</p>
        <div class="alert-box">
          <p>⚠️ <strong>Le Business Model :</strong> Ces logiciels sont souvent gratuits parce qu'ils installent des <strong>mouchards (trackers)</strong> qui enregistrent tout ce que tu fais pour revendre ton profil aux publicitaires.</p>
        </div>
      </section>

      <!-- LA SOLUTION OPEN SOURCE -->
      <section>
        <h2>🤝 La Philosophie du "Code Ouvert"</h2>
        <div class="card">
          <p>Un logiciel <strong>Open Source (ou Libre)</strong> est comme une recette de cuisine publique : tout le monde peut voir les ingrédients (le code).</p>
          <ul>
            <li><strong>Transparence Totale :</strong> Des experts du monde entier vérifient le code. S'il y a un virus ou un espion, il est découvert et supprimé immédiatement.</li>
            <li><strong>Pas de "Lock-in" :</strong> Tu n'es pas prisonnier d'une marque. Le format des fichiers est ouvert.</li>
            <li><strong>Respect de la vie privée :</strong> Ces logiciels sont créés par des communautés passionnées, pas par des entreprises qui veulent vendre tes données.</li>
          </ul>
        </div>
      </section>

      <!-- OÙ TROUVER LES OUTILS (REMPLACE L'ARMURERIE) -->
      <section>
        <h2>🗺️ Les Quartiers Généraux (Où chercher ?)</h2>
        <div class="card">
          <p>Tu découvriras des outils précis dans les autres branches de l'Arbre. Mais pour ta culture de Résistant, voici les endroits où trouver des ressources sûres :</p>
          
          <ul class="resource-list">
            <li>
              <strong>Apps.education.fr :</strong>
              <br><span class="desc">La plateforme officielle de l'Éducation Nationale. Des outils libres, RGPD, et gratuits pour tous les profs et élèves.</span>
            </li>
            <li>
              <strong>Framasoft :</strong>
              <br><span class="desc">Une association française légendaire qui propose des alternatives à presque tous les outils Google ("Dégooglisons Internet").</span>
            </li>
            <li>
              <strong>La Forge des Communs Numériques :</strong>
              <br><span class="desc">L'atelier où les profs et développeurs construisent ensemble les outils de demain (cité dans le projet NIRD).</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ========================================= -->
      <!-- PARTIE 2 : LE QUIZ INTERACTIF (JEU)       -->
      <!-- ========================================= -->

      <div class="quiz-wrapper">
        <div class="quiz-container">
          <h2>🎮 Mission : Comprendre la Licence</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Analyse terminée !</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Excellent ! Tu as compris la philosophie du Libre.</p>
            <p v-else>⚠️ Tu confonds encore "Gratuit" et "Libre". Relis bien la partie philosophie !</p>

            <div class="continue-choices">
              <p class="choices-label">Que veux-tu faire maintenant ?</p>
              <div class="choices-grid">
              </div>

              <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center;">
                <button class="btn-next" @click="continueTo('/')">Aller à l'arbre 🌳</button>
                <button class="btn-next" @click="restartQuiz">Relancer le scan</button>
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
import { unlockPage, navigateToPage } from '../../../../../router/progress.js'

export default {
  name: 'PageOpenSource',
  mounted() {
    // Débloquer cette page
    unlockPage('open-source')
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
          text: "Que signifie l'expression 'Si c'est gratuit, c'est toi le produit' ?",
          explanation: "Les entreprises comme Google ou TikTok se paient en vendant tes données personnelles.",
          options: [
            { text:"Que le logiciel gagne de l'argent en vendant mes données", isCorrect: true  },
            { text: "Que le logiciel est nul", isCorrect: false },
            { text: "Que c'est un cadeau du gouvernement", isCorrect: false }
          ]
        },
        {
          text: "Quelle est la différence principale entre un logiciel 'Propriétaire' et 'Open Source' ?",
          explanation: "L'Open Source permet à tout le monde de lire la recette (le code) et de vérifier la sécurité.",
          options: [
            { text: "Le Propriétaire est plus joli", isCorrect: false },
            { text:"Il n'y a aucune différence", isCorrect: false },
            { text: "L'Open Source a un code accessible et vérifiable par tous", isCorrect: true  }
          ]
        },
        {
          text: "Où peut-on trouver des outils numériques sûrs pour l'école ?",
          explanation: "C'est la plateforme officielle et sécurisée de l'Éducation Nationale.",
          options: [
            { text: "Sur Softonic ou 01net", isCorrect: false },
            { text: "Sur apps.education.fr", isCorrect: true },
            { text: "En cliquant sur les pubs Instagram", isCorrect: false }
          ]
        },
        {
          text: "Qui corrige les bugs dans un logiciel Libre ?",
          explanation: "C'est la force du collectif : une communauté mondiale de passionnés et d'experts.",
          options: [
            { text: "La communauté des développeurs et utilisateurs", isCorrect: true },
            { text: "Uniquement le PDG de l'entreprise", isCorrect: false  },
            { text: "Personne, les bugs restent pour toujours", isCorrect: false }
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
          completePage('open-source')
        } catch (e) {
          // ignore
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
    },
    continueTo(pageId) {
      navigateToPage('open-source', pageId, this.$router)
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