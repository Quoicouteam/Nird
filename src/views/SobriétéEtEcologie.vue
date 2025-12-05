<template>
  <div class="sobriete-page">
    <!-- Décoration de fond végétale -->
    <div class="nature-bg">
      <div class="leaf leaf-1">🍃</div>
      <div class="leaf leaf-2">🌿</div>
      <div class="leaf leaf-3">🍂</div>
      <div class="leaf leaf-4">🌱</div>
      <div class="leaf leaf-5">🍃</div>
      <div class="leaf leaf-6">🌿</div>
    </div>
    
    <!-- ========================================= -->
    <!-- PARTIE 1 : LE CONTENU PÉDAGOGIQUE (COURS) -->
    <!-- ========================================= -->

    <div class="container">
      
      <!-- HEADER -->
      <header>
        <h1>🌱 La Sobriété Numérique</h1>
        <p class="subtitle">"Le meilleur déchet est celui qu'on ne produit pas... même numériquement."</p>
      </header>

      <!-- LE POIDS INVISIBLE -->
      <section class="card">
        <h2>⚖️ Le Poids Invisible du Virtuel</h2>
        <p>On pense souvent que le numérique est "immatériel" ou "propre". C'est faux.</p>
        <p>Internet pollue autant que l'aviation civile mondiale. Chaque email stocké, chaque vidéo streamée consomme de l'électricité dans un Data Center climatisé qui tourne 24h/24.</p>
        <div class="alert-box">
          <p>🔥 <strong>Le Chiffre Choc :</strong> Un simple email avec une pièce jointe de 1 Mo émet environ <strong>19g de CO₂</strong>. Imaginez les millions d'emails qui dorment inutilement dans nos boîtes...</p>
        </div>
      </section>

      <!-- MISSION NETTOYAGE -->
      <section>
        <h2>🧹 Mission : Grand Nettoyage</h2>
        <div class="card">
          <p>Pour alléger ton sac à dos numérique et sauver des arbres, voici les cibles prioritaires :</p>
          <ul class="eco-list">
            <li>
              <strong>Vider sa boîte mail :</strong>
              <br><span class="desc">Supprime les vieux messages, les spams et désabonne-toi des newsletters que tu ne lis jamais (utilise des outils comme <em>Cleanfox</em> ou fais-le à la main).</span>
            </li>
            <li>
              <strong>Arrêter les pièces jointes lourdes :</strong>
              <br><span class="desc">Au lieu d'envoyer un fichier de 10 Mo à 30 personnes (300 Mo stockés !), envoie un <strong>lien de téléchargement</strong> (via FileSender ou Nextcloud) qui expire après 7 jours.</span>
            </li>
            <li>
              <strong>La vidéo en basse résolution :</strong>
              <br><span class="desc">As-tu vraiment besoin de regarder un tuto YouTube en 4K sur ton téléphone ? Passe en 720p ou 480p pour diviser ta consommation par 4.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- L'ÉNERGIE FANTÔME (ÉCRANS) -->
      <section>
        <h2>🧛 Chasser l'Énergie Fantôme</h2>
        <div class="card">
          <p>Ton matériel consomme même quand tu ne l'utilises pas.</p>
          <ul>
            <li><strong>Le mode "Veille" est un piège :</strong> Un ordinateur en veille continue de consommer. Éteins-le vraiment le soir.</li>
            <li><strong>La luminosité de l'écran :</strong> Baisser la luminosité de 100% à 70% économise jusqu'à 20% de batterie (et d'énergie).</li>
            <li><strong>Le Dark Mode (Mode Sombre) :</strong> Sur les écrans OLED (smartphones modernes), le noir éteint les pixels. C'est bon pour la planète et pour tes yeux !</li>
          </ul>
        </div>
      </section>

      <!-- ========================================= -->
      <!-- PARTIE 2 : LE QUIZ INTERACTIF (JEU)       -->
      <!-- ========================================= -->

      <div class="quiz-wrapper">
        <div class="quiz-container">
          <h2>🎮 Mission : Éco-Gestes</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Bilan Carbone Terminé !</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Bravo ! Tu es un véritable Éco-Résistant.</p>
            <p v-else>⚠️ Ton empreinte carbone est encore trop élevée. Relis les conseils !</p>
            <div style="display:flex; gap:0.75rem; justify-content:center; margin-top:1rem;">
              <button class="btn-next" @click="continueTo('/')">Aller à l'arbre 🌳</button>
              <button class="btn-next" @click="restartQuiz">Refaire le bilan</button>
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
import { completePage, unlockChildren } from '../stores/progress.js'

export default {
  name: 'PageSobriete',
  mounted() {
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
          text: "Pourquoi est-il mieux d'envoyer un lien plutôt qu'une pièce jointe ?",
          explanation: "La pièce jointe est dupliquée chez chaque destinataire, ce qui multiplie le stockage inutile.",
          options: [
            { text: "C'est plus joli", isCorrect: false },
            { text: "Les liens sont magiques", isCorrect: false},
            { text: "Ça évite de stocker le fichier en plusieurs exemplaires", isCorrect: true  }
          ]
        },
        {
          text: "Quelle action permet d'économiser de l'énergie sur un écran OLED ?",
          explanation: "Sur l'OLED, le noir = pixel éteint = 0 consommation.",
          options: [
            { text: "Mettre un fond d'écran blanc", isCorrect: false },
            { text: "Activer le Mode Sombre (Dark Mode)", isCorrect: true },
            { text: "Nettoyer l'écran avec un chiffon", isCorrect: false }
          ]
        },
        {
          text: "Un email stocké dans ta boîte de réception consomme-t-il de l'énergie ?",
          explanation: "Oui ! Il est stocké sur un disque dur dans un Data Center qui doit être alimenté et refroidi 24h/24.",
          options: [
            { text: "Non, une fois reçu il ne bouge plus", isCorrect: false },
            { text: "Seulement s'il contient des smileys", isCorrect: false  },
            { text: "Oui, tant qu'il n'est pas supprimé, il consomme", isCorrect: true }
          ]
        },
        {
          text: "Que faire de son ordinateur le soir ?",
          explanation: "La veille consomme toujours un peu d'électricité. L'extinction complète est la seule solution zéro conso.",
          options: [
            { text: "L'éteindre complètement", isCorrect: true },
            { text: "Le mettre en veille", isCorrect: false },
            { text: "Le laisser allumé pour les mises à jour", isCorrect: false }
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
        // marque la page comme complétée
        try {
          completePage('sobriete')
        } catch (e) { /* ignore */ }
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
      // marque comme complétée et navigue
      try {
        completePage('sobriete')
      } catch (e) {}

      if (this.$router && this.$router.hasRoute && this.$router.hasRoute(pageId)) {
        this.$router.push({ name: pageId })
      } else if (pageId === '/' || pageId === 'tree') {
        this.$router.push('/')
      } else {
        this.$router.push('/')
      }
    }
  },

}
</script>

<style scoped>
/* Page wrapper avec décoration de fond */
.sobriete-page {
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