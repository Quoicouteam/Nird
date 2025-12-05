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
      <article class="content-card">
        <!-- HEADER -->
        <header class="page-header">
          <div class="header-icon">🐧</div>
          <h1>Introduction à Linux</h1>
          <p class="subtitle">Le système d'exploitation libre, gratuit et respectueux de votre vie privée</p>
        </header>

        <!-- QU'EST-CE QUE LINUX ? -->
        <section class="page-section">
          <h2>🤔 Qu'est-ce que Linux ?</h2>
          <p>
            Linux est un <strong>système d'exploitation</strong> (comme Windows ou macOS), mais avec une différence fondamentale : 
            il est <strong>libre et gratuit</strong>. Créé en 1991 par Linus Torvalds, Linux est aujourd'hui utilisé partout : 
            des serveurs web aux smartphones (Android est basé sur Linux), en passant par les supercalculateurs.
          </p>
          <p>
            Contrairement à Windows, Linux respecte votre vie privée, ne vous espionne pas, 
            et vous donne le contrôle total de votre machine.
          </p>
        </section>

        <!-- POURQUOI CHOISIR LINUX ? -->
        <section class="page-section">
          <h2>✨ Pourquoi Choisir Linux ?</h2>
          
          <div class="benefit-card">
            <h3>💰 Entièrement Gratuit</h3>
            <p>
              Pas de licence à payer, pas d'abonnement caché. Linux et tous ses logiciels sont 100% gratuits. 
              Une école peut équiper 500 PC sans débourser un centime en licences.
            </p>
          </div>

          <div class="benefit-card">
            <h3>🔒 Sécurisé par Défaut</h3>
            <p>
              Linux est conçu avec la sécurité en tête. Les virus Windows ne fonctionnent pas sur Linux. 
              Pas besoin d'antivirus payant. Les mises à jour de sécurité sont rapides et transparentes.
            </p>
          </div>

          <div class="benefit-card">
            <h3>🕵️ Respect de la Vie Privée</h3>
            <p>
              Zéro télémétrie intrusive. Contrairement à Windows qui envoie vos données à Microsoft, 
              Linux ne vous espionne pas. Vous êtes maître de votre système.
            </p>
          </div>

          <div class="benefit-card">
            <h3>♻️ Écologique et Durable</h3>
            <p>
              Linux fait revivre les vieux PC. Un ordinateur de 2010 tournera parfaitement sous Linux, 
              alors que Windows 11 le déclarerait "obsolète". C'est bon pour la planète et le budget.
            </p>
          </div>

          <div class="benefit-card">
            <h3>🎨 Personnalisable à l'Infini</h3>
            <p>
              Choisissez votre interface, vos couleurs, vos logiciels. Linux s'adapte à vous, 
              pas l'inverse. Des centaines d'"environnements de bureau" sont disponibles.
            </p>
          </div>

          <div class="benefit-card">
            <h3>🌍 Communauté Mondiale</h3>
            <p>
              Des millions de développeurs et utilisateurs dans le monde entier. 
              Une documentation exhaustive, des forums actifs en français, une entraide solidaire.
            </p>
          </div>
        </section>

        <!-- COMMENT ÇA MARCHE ? -->
        <section class="page-section">
          <h2>⚙️ Comment ça Marche ?</h2>
          
          <div class="architecture-box">
            <h3>🏗️ L'Architecture de Linux</h3>
            <p>Linux est composé de plusieurs couches :</p>
            
            <div class="layer-stack">
              <div class="layer layer-1">
                <strong>👤 Utilisateur</strong>
                <p>Vous et vos applications</p>
              </div>
              <div class="layer layer-2">
                <strong>🖥️ Interface Graphique (Desktop Environment)</strong>
                <p>GNOME, KDE, Cinnamon, XFCE...</p>
              </div>
              <div class="layer layer-3">
                <strong>📦 Applications et Logiciels</strong>
                <p>Firefox, LibreOffice, GIMP, VLC...</p>
              </div>
              <div class="layer layer-4">
                <strong>🐧 Noyau Linux (Kernel)</strong>
                <p>Le cœur du système, gère le matériel</p>
              </div>
              <div class="layer layer-5">
                <strong>💾 Matériel</strong>
                <p>Processeur, RAM, disque dur, carte graphique...</p>
              </div>
            </div>
          </div>
        </section>

        <!-- LES DISTRIBUTIONS -->
        <section class="page-section">
          <h2>📦 Les Distributions Linux</h2>
          <p>
            Linux n'est pas un seul système, mais une <strong>famille de systèmes</strong> appelés "distributions" (ou "distros"). 
            Chaque distribution emballe le noyau Linux avec des logiciels différents et une philosophie propre.
          </p>
          
          <div class="distro-intro-card">
            <h3>🎯 Quelques Distributions Populaires</h3>
            <ul>
              <li><strong>Ubuntu :</strong> La plus populaire, idéale pour débuter</li>
              <li><strong>Linux Mint :</strong> Ultra-simple, interface familière pour les ex-Windows</li>
              <li><strong>Fedora :</strong> Moderne et professionnelle</li>
              <li><strong>Debian :</strong> Ultra-stable, base d'Ubuntu</li>
              <li><strong>Arch Linux :</strong> Pour les utilisateurs avancés qui veulent tout contrôler</li>
            </ul>
          </div>

          <p style="margin-top: 1.5rem; text-align: center;">
            Ne vous inquiétez pas, nous verrons en détail les meilleures distributions pour débuter !
          </p>
        </section>

        <!-- TERMINAL : MYTHE VS RÉALITÉ -->
        <section class="page-section">
          <h2>💻 Le Terminal : Mythe vs Réalité</h2>
          
          <div class="myth-reality">
            <div class="myth">
              <h3>❌ Le Mythe</h3>
              <p>"Il faut taper des commandes compliquées pour tout faire sur Linux"</p>
            </div>
            <div class="reality">
              <h3>✅ La Réalité</h3>
              <p>
                Les distributions modernes ont des interfaces graphiques complètes. 
                Vous pouvez installer des logiciels, gérer des fichiers, naviguer sur Internet, 
                tout ça sans jamais ouvrir un terminal. Le terminal est un <strong>outil puissant optionnel</strong>, 
                pas une obligation.
              </p>
            </div>
          </div>
        </section>

        <!-- LINUX VS WINDOWS -->
        <section class="page-section">
          <h2>⚖️ Linux vs Windows : Comparaison</h2>
          
          <div class="content-card no-padding">
            <table>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Linux</th>
                  <th>Windows</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Prix</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Gratuit</td>
                  <td style="color: #c62828; font-weight: 600;">259-359€ + abonnements</td>
                </tr>
                <tr>
                  <td><strong>Sécurité</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Excellente</td>
                  <td style="color: #f57f17; font-weight: 600;">Nécessite antivirus</td>
                </tr>
                <tr>
                  <td><strong>Vie privée</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Respectée</td>
                  <td style="color: #c62828; font-weight: 600;">Télémétrie Microsoft</td>
                </tr>
                <tr>
                  <td><strong>Performance</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Rapide, même sur vieux PC</td>
                  <td style="color: #c62828; font-weight: 600;">Ralentit avec le temps</td>
                </tr>
                <tr>
                  <td><strong>Mises à jour</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Rapides, non-intrusives</td>
                  <td style="color: #c62828; font-weight: 600;">Longues, forcées, redémarrages</td>
                </tr>
                <tr>
                  <td><strong>Personnalisation</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Totale</td>
                  <td style="color: #f57f17; font-weight: 600;">Limitée</td>
                </tr>
                <tr>
                  <td><strong>Logiciels</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Des milliers gratuits</td>
                  <td style="color: #f57f17; font-weight: 600;">Beaucoup payants</td>
                </tr>
                <tr>
                  <td><strong>Support matériel ancien</strong></td>
                  <td style="color: #2e7d32; font-weight: 600;">Excellent (PC de 2008+)</td>
                  <td style="color: #c62828; font-weight: 600;">Mauvais (Windows 11 = PC récents)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </article>

      <!-- QUIZ -->
      <div class="quiz-wrapper">
        <div class="quiz-container">
          <h2>📋 Quiz : Évaluation des Connaissances sur Linux</h2>
          
          <!-- ÉCRAN DE FIN -->
          <div v-if="quizFinished">
            <p class="mission-status">Quiz Terminé</p>
            <div class="score-box">{{ score }} / {{ questions.length }}</div>
            <p v-if="score === questions.length">🌟 Excellent ! Vous maîtrisez les concepts de Linux.</p>
            <p v-else>⚠️ Certaines notions nécessitent une révision. Nous vous recommandons de relire le contenu.</p>

            <div class="continue-choices">
              <p class="choices-label">Que veux-tu faire maintenant ?</p>
              <div class="choices-grid">
                <button class="choice-button" @click="continueTo('linux-distros-debutants')">
                  <span class="choice-icon">🌱</span>
                  <span class="choice-title">Distros Débutants</span>
                  <span class="choice-desc">Les meilleures distributions pour bien commencer</span>
                </button>
                <button class="choice-button" @click="continueTo('linux-distros-gpu')">
                  <span class="choice-icon">🎮</span>
                  <span class="choice-title">Distros Gaming/GPU</span>
                  <span class="choice-desc">Pour les gamers et créatifs</span>
                </button>
              </div>

              <div style="margin-top:1rem; display:flex; gap:0.75rem; justify-content:center;">
                <button class="btn-next" @click="continueTo('/')">Retour au début 🌳</button>
                <button class="btn-next" @click="restartQuiz">Refaire le quiz</button>
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

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { unlockPage } from '../../../router/progress.js'
import { navigateToPage } from '../../../router/progress.js'
import '../../../assets/pages-common.css'

const router = useRouter()

// Quiz state
const currentQuestion = ref(0)
const score = ref(0)
const hasAnswered = ref(false)
const selectedAnswer = ref(null)
const isCurrentCorrect = ref(false)
const quizFinished = ref(false)

const questions = ref([
  {
    text: "Quel est le principal avantage de Linux par rapport à Windows ?",
    explanation: "Linux est entièrement gratuit, sans licence ni abonnement, contrairement à Windows qui coûte 259-359€.",
    options: [
      { text: "Il est plus joli", isCorrect: false },
      { text: "Il est gratuit et open source", isCorrect: true },
      { text: "Il fonctionne uniquement en ligne de commande", isCorrect: false }
    ]
  },
  {
    text: "Linux respecte-t-il votre vie privée ?",
    explanation: "Oui ! Linux ne contient aucune télémétrie intrusive, contrairement à Windows qui envoie des données à Microsoft.",
    options: [
      { text: "Non, il espionne comme Windows", isCorrect: false },
      { text: "Oui, il ne contient pas de télémétrie intrusive", isCorrect: true },
      { text: "Seulement si vous payez", isCorrect: false }
    ]
  },
  {
    text: "Faut-il obligatoirement utiliser le terminal sous Linux ?",
    explanation: "Non ! Les distributions modernes ont des interfaces graphiques complètes. Le terminal est un outil optionnel.",
    options: [
      { text: "Oui, pour tout", isCorrect: false },
      { text: "Non, les interfaces graphiques modernes sont complètes", isCorrect: true },
      { text: "Uniquement le dimanche", isCorrect: false }
    ]
  },
  {
    text: "Qu'est-ce qu'une distribution Linux ?",
    explanation: "Une distribution emballe le noyau Linux avec des logiciels et une configuration spécifique, créant un système complet.",
    options: [
      { text: "Un virus informatique", isCorrect: false },
      { text: "Un type de processeur", isCorrect: false },
      { text: "Un système complet basé sur le noyau Linux", isCorrect: true }
    ]
  }
])

onMounted(() => {
  unlockPage('linux')
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  } catch (e) {}
})

function selectAnswer(index, isCorrect) {
  hasAnswered.value = true
  selectedAnswer.value = index
  isCurrentCorrect.value = isCorrect
  if (isCorrect) {
    score.value++
  }
}

function nextQuestion() {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
    hasAnswered.value = false
    selectedAnswer.value = null
  } else {
    quizFinished.value = true
  }
}

function restartQuiz() {
  currentQuestion.value = 0
  score.value = 0
  hasAnswered.value = false
  selectedAnswer.value = null
  quizFinished.value = false
}

function continueTo(pageId) {
  navigateToPage('linux', pageId, router)
}
</script>

<style scoped>
/* Styles spécifiques à Linux.vue */

.benefit-card {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  border-left: 5px solid #7dab8a;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(90, 125, 106, 0.15);
}

.benefit-card h3 {
  color: #2e4f3b;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
}

.benefit-card p {
  margin: 0;
  color: #555;
  line-height: 1.7;
}

.architecture-box {
  background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
  padding: 2rem;
  border-radius: 12px;
  margin: 1.5rem 0;
}

.architecture-box h3 {
  color: #2e4f3b;
  text-align: center;
  margin-bottom: 1.5rem;
}

.layer-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.layer {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #7dab8a;
  transition: transform 0.3s ease;
}

.layer:hover {
  transform: translateX(5px);
}

.layer strong {
  display: block;
  color: #2e4f3b;
  margin-bottom: 0.25rem;
}

.layer p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
}

.layer-1 { border-left-color: #4caf50; }
.layer-2 { border-left-color: #66bb6a; }
.layer-3 { border-left-color: #81c784; }
.layer-4 { border-left-color: #a5d6a7; }
.layer-5 { border-left-color: #c8e6c9; }

.distro-intro-card {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 5px solid #2196f3;
}

.distro-intro-card h3 {
  color: #1565c0;
  margin-top: 0;
}

.distro-intro-card ul {
  margin: 1rem 0 0 0;
  padding-left: 1.5rem;
}

.distro-intro-card li {
  margin: 0.75rem 0;
  color: #555;
}

.myth-reality {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.myth, .reality {
  padding: 1.5rem;
  border-radius: 8px;
}

.myth {
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  border-left: 5px solid #e57373;
}

.myth h3 {
  color: #c62828;
  margin-top: 0;
}

.reality {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-left: 5px solid #66bb6a;
}

.reality h3 {
  color: #2e7d32;
  margin-top: 0;
}

.myth p, .reality p {
  margin: 0.5rem 0 0 0;
  color: #555;
}

.call-to-action {
  background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f6 100%);
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.call-to-action h3 {
  color: #2e4f3b;
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  text-align: center;
}

@media (max-width: 768px) {
  .layer-stack {
    gap: 0.5rem;
  }
  
  .myth-reality {
    grid-template-columns: 1fr;
  }
}
</style>
