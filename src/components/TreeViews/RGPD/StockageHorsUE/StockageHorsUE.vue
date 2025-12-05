<template>
  <div class="page-wrapper">
    
    <!-- ========================================= -->
    <!-- PARTIE 1 : LE CONTENU PÉDAGOGIQUE (COURS) -->
    <!-- ========================================= -->

    <div class="page-container">
      
      <!-- HEADER -->
      <header class="page-header">
        <h1>☁️ La Forteresse Lointaine (Stockage Hors UE)</h1>
        <p class="subtitle">Le Cloud n'est pas un nuage. C'est l'ordinateur de quelqu'un d'autre.</p>
      </header>

      <!-- LE MYTHE DU NUAGE -->
      <section class="card">
        <p>Quand on te dit que tes fichiers sont "dans le Cloud", ils ne flottent pas dans le ciel. Ils sont stockés physiquement sur des disques durs, dans des hangars immenses (Data Centers) qui consomment énormément d'énergie et d'eau pour se refroidir.</p>
        <p><strong>La question cruciale est : Où se trouve ce hangar ? Et à qui appartient-il ?</strong></p>
      </section>

      <!-- LE PROBLÈME JURIDIQUE -->
      <section>
        <h2>🇺🇸 Le Piège de l'Extra-territorialité</h2>
        <div class="card">
          <p>La majorité des données scolaires (ENT, notes, dossiers) transite souvent par les "Hyperscalers" : <strong>AWS (Amazon), Azure (Microsoft) ou Google Cloud</strong>.</p>
          <p>Même si ces entreprises vous disent "Ne vous inquiétez pas, le serveur est à Paris", elles restent des entreprises américaines.</p>
          <div class="alert-box">
            <p>🚨 <strong>Le CLOUD Act (Encore lui) :</strong> Cette loi américaine oblige toute entreprise US à donner les données qu'elle stocke aux autorités américaines (FBI, NSA), même si ces données sont stockées physiquement en Europe. C'est une violation de notre souveraineté.</p>
          </div>
        </div>
      </section>

      <!-- LA SOLUTION SOUVERAINE -->
      <section>
        <h2>🇪🇺 La Souveraineté Numérique</h2>
        <div class="card">
          <p>Pour résister, le Village NIRD doit rapatrier ses ressources. C'est ce qu'on appelle la <strong>Souveraineté Numérique</strong> : être maître chez soi.</p>
          <ul>
            <li><strong>Hébergement Local :</strong> Utiliser des hébergeurs européens (OVHcloud, Scaleway, Hetzner) qui ne sont pas soumis aux lois américaines.</li>
            <li><strong>Auto-hébergement :</strong> Le stade ultime de la résistance. Installer son propre serveur dans le lycée (un simple vieux PC peut suffire pour commencer !).</li>
          </ul>
        </div>
      </section>

      <!-- COMPARATEUR -->
      <section>
        <h2>⚔️ Le Duel des Hébergeurs</h2>
        <div class="card no-padding">
          <table>
            <thead>
              <tr>
                <th>❌ Le Cloud de l'Empire (GAFAM)</th>
                <th>✅ Le Cloud Résistant (Souverain)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soumis au droit américain (Patriot Act / Cloud Act).</td>
                <td>Protégé par le droit européen (RGPD strict).</td>
              </tr>
              <tr>
                <td>Données souvent répliquées aux USA sans qu'on le sache.</td>
                <td>Garantie que les données restent en France/UE.</td>
              </tr>
              <tr>
                <td>Tarifs opaques qui augmentent quand on est captif.</td>
                <td>Tarifs transparents et soutien à l'économie locale.</td>
              </tr>
              <tr>
                <td>Risque d'espionnage industriel ou politique.</td>
                <td>Confidentialité garantie pour les services publics.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- TRANSITION VERS LA PROCHAINE PAGE -->
      <section style="margin-top: 2rem; text-align: center;">
        <p style="color: var(--text-muted); font-style: italic;">
          "C'est bien de stocker ses données en France... mais si le logiciel qu'on utilise est une 'Boîte Noire' fermée, sommes-nous vraiment en sécurité ?"<br>
          👉 <strong>Prochaine étape : L'Open Source.</strong>
        </p>
      </section>

      <!-- ========================================= -->
      <!-- PARTIE 2 : LE QUIZ INTERACTIF (JEU)       -->
      <!-- ========================================= -->

      <div class="quiz-wrapper">
        <div class="quiz-container">
          <h2>🎮 Mission : Rapatriement des Données</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Mission Terminée !</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Bravo ! Nos données sont désormais en sécurité sur le sol européen.</p>
            <p v-else>⚠️ Attention, certaines de tes données ont été interceptées à la frontière !</p>

            <div class="continue-choices">
              <p class="choices-label">Que veux-tu faire maintenant ?</p>
              <div class="choices-grid">
                <button class="choice-button" @click="continueTo('open-source')">
                  <span class="choice-icon">📦</span>
                  <span class="choice-title">Continuer : Open Source</span>
                  <span class="choice-desc">Aller à la page Open Source</span>
                </button>
              </div>

              <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center;">
                <button class="btn-next" @click="continueTo('presentation')">Retour au début 🌳</button>
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
import { unlockPage, navigateToPage } from '../../../../router/progress.js'

export default {
  name: 'PageStockage',
  mounted() {
    // Débloquer cette page
    unlockPage('stockage-hors-ue')
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
          text: "Concrètement, c'est quoi le 'Cloud' ?",
          explanation: "Ce n'est pas magique, c'est juste l'ordinateur de quelqu'un d'autre connecté à Internet.",
          options: [
            { text: "Un nuage de vapeur numérique", isCorrect: false },
            { text: "Des serveurs physiques dans des Data Centers", isCorrect: true },
            { text: "Un satellite dans l'espace", isCorrect: false }
          ]
        },
        {
          text: "Si Microsoft met un serveur à Paris, est-il protégé des espions américains ?",
          explanation: "Non ! À cause du CLOUD Act, la nationalité de l'entreprise prime sur la localisation du serveur.",
          options: [
            { text: "Oui, car il est sur le sol français", isCorrect: false },
            { text: "Ça dépend de la météo", isCorrect: false },
            { text: "Non, car l'entreprise reste américaine (CLOUD Act)", isCorrect: true  }
          ]
        },
        {
          text: "Lequel de ces acteurs est une solution 'Souveraine' (Européenne) ?",
          explanation: "OVHcloud est français (Roubaix). AWS est à Amazon (USA) et Azure à Microsoft (USA).",
          options: [
            { text: "AWS (Amazon Web Services)", isCorrect: false },
            { text: "OVHcloud", isCorrect: true },
            { text: "Microsoft Azure", isCorrect: false }
          ]
        },
        {
          text: "Quel est l'avantage principal de l'auto-hébergement ?",
          explanation: "Si le serveur est chez toi, personne d'autre n'y a accès physiquement.",
          options: [
            { text: "On contrôle physiquement ses données à 100%", isCorrect: true  },
            { text: "C'est gratuit et facile", isCorrect: false},
            { text: "Ça fait aller Internet plus vite", isCorrect: false }
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
            completePage('stockage-hors-ue')
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
    }
    ,
    continueTo(pageId) {
      navigateToPage('stockage-hors-ue', pageId, this.$router)
    }
  }
}
</script>

<style scoped>
/* Pas de styles spécifiques - tout vient de pages-common.css */
</style>