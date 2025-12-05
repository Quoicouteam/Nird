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

    <div class="page-container">
      
      <!-- HEADER -->
      <header class="page-header">
        <h1>🌱 Sobriété Numérique et Écologie</h1>
        <p class="subtitle">Comprendre l'impact environnemental du numérique et adopter des pratiques responsables</p>
      </header>

      <!-- LE POIDS INVISIBLE -->
      <section class="page-section">
        <h2>⚖️ Le Poids Invisible du Virtuel</h2>
        <div class="content-card">
          <p>On pense souvent que le numérique est "immatériel" ou "propre". C'est faux.</p>
          <p>Internet pollue autant que l'aviation civile mondiale. Chaque email stocké, chaque vidéo streamée consomme de l'électricité dans un Data Center climatisé qui tourne 24h/24.</p>
          <div class="alert-box">
            <p>🔥 <strong>Le Chiffre Choc :</strong> Un simple email avec une pièce jointe de 1 Mo émet environ <strong>19g de CO₂</strong>. Imaginez les millions d'emails qui dorment inutilement dans nos boîtes...</p>
          </div>
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
          <h2>📋 Quiz : Évaluation des Connaissances en Sobriété Numérique</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Quiz Terminé</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Excellent ! Vous maîtrisez les principes de la sobriété numérique.</p>
            <p v-else>⚠️ Certaines notions nécessitent une révision. Nous vous recommandons de relire le contenu.</p>
            <div style="display:flex; gap:0.75rem; justify-content:center; margin-top:1rem;">
              <button class="btn-next" @click="continueTo('/')">Retour au début 🌳</button>
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
import { unlockPage, navigateToPage, completePage, grantLetter } from '../../../router/progress.js'

export default {
  name: 'PageSobriete',
  mounted() {
    // Débloquer cette page
    unlockPage('sobriete')
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
      // message when letter A is unlocked
      showUnlockMessageA: false,
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
        // accorder la lettre A pour l'easter-egg
        try { grantLetter('A') } catch (e) {}
        this.showUnlockMessageA = true
        setTimeout(() => { this.showUnlockMessageA = false }, 3000)

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
      navigateToPage('sobriete', pageId, this.$router)
    }
  },

}
</script>

<style scoped>
/* Styles spécifiques à cette page uniquement */
.alert-box {
  background: rgba(255, 159, 64, 0.1);
  border-left: 4px solid #ff9f40;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
}

.eco-list li .desc {
  font-size: 0.95rem;
  color: #666;
}
</style>