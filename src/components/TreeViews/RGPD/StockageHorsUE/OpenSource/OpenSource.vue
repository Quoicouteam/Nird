<template>
  <div class="page-wrapper">
    
    <!-- ========================================= -->
    <!-- PARTIE 1 : LE CONTENU PÉDAGOGIQUE (COURS) -->
    <!-- ========================================= -->

    <div class="page-container">
      
      <!-- HEADER -->
      <header class="page-header">
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
            <div v-if="showUnlockMessage" class="unlock-msg">✅ Lettre S débloquée !</div>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Excellent ! Tu as compris la philosophie du Libre.</p>
            <p v-else>⚠️ Tu confonds encore "Gratuit" et "Libre". Relis bien la partie philosophie !</p>

            <div class="continue-choices">
              <p class="choices-label">Que veux-tu faire maintenant ?</p>
              <div class="choices-grid">
              </div>

            <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center;">
                <button class="btn-next" @click="continueTo('presentation')">Retour au début 🌳</button>
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
import { unlockPage, navigateToPage, completePage, grantLetter } from '../../../../../router/progress.js'

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
      // show a small message when a letter is unlocked
      showUnlockMessage: false,
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
        // Accorder la lettre S et afficher un message simple
        try {
          grantLetter('S')
        } catch (e) {}
        this.showUnlockMessage = true
        // masquer le message après quelques secondes
        setTimeout(() => { this.showUnlockMessage = false }, 3000)

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
/* Pas de styles spécifiques - tout vient de pages-common.css */
</style>