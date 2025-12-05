<template>
  <div class="materiel-page">
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
        <h1>🔧 L'Atelier : Réparer plutôt que Jeter</h1>
        <p class="subtitle">"Un PC lent n'est pas un PC mort. Il est juste encombré."</p>
      </header>

      <!-- INTRODUCTION : LE DIAGNOSTIC -->
      <section class="card">
        <h2>🏥 Phase 1 : Le Diagnostic (Triage)</h2>
        <p>Avant de déclarer le décès d'un ordinateur parce qu'il "rame", il faut comprendre pourquoi. Dans 90% des cas, le matériel fonctionne encore très bien, mais il est bridé.</p>
        
        <div class="alert-box">
          <p>🛑 <strong>Le piège de Windows 10/11 :</strong> Microsoft augmente sans cesse la puissance requise pour faire tourner son système. Un PC de 2018 peut sembler "obsolète" sous Windows, alors qu'il est une bête de course sous Linux.</p>
        </div>
      </section>

      <!-- LA SOLUTION MAGIQUE : LE SSD -->
      <section>
        <h2>🚀 Phase 2 : La Chirurgie (L'Upgrade SSD)</h2>
        <div class="card">
          <p>Si tu ne dois faire qu'une seule chose pour sauver un vieux PC, c'est celle-là.</p>
          <p>Les vieux ordinateurs utilisent des disques durs mécaniques (HDD) qui tournent avec une aiguille (comme un vinyle). C'est lent et fragile.</p>
          
          <div class="comparison-box">
            <h3>Le Duel : HDD vs SSD</h3>
            <ul>
              <li class="bad">
                <strong>HDD (Disque Dur Classique)</strong><br>
                🐢 Démarrage en 3 minutes.<br>
                🐢 "Gratte" quand on lance une appli.<br>
                ⚠️ Sensible aux chocs.
              </li>
              <li class="good">
                <strong>SSD (Disque Flash)</strong><br>
                ⚡ Démarrage en 15 secondes.<br>
                ⚡ Tout s'ouvre instantanément.<br>
                ✅ Silencieux et solide.
              </li>
            </ul>
            <p style="margin-top: 1rem; text-align: center;"><em>Coût de l'opération : ~20€ pour un SSD de 240Go. C'est moins cher qu'un nouveau PC !</em></p>
          </div>
        </div>
      </section>

      <!-- LA MÉMOIRE VIVE (RAM) -->
      <section>
        <h2>🧠 Phase 3 : Greffe de Cerveau (La RAM)</h2>
        <div class="card">
          <p>La RAM, c'est la mémoire à court terme de l'ordinateur (sa table de travail). Si la table est trop petite, l'ordinateur panique quand tu ouvres 3 onglets Internet.</p>
          <ul>
            <li><strong>Le minimum vital :</strong> 4 Go de RAM (c'est juste, mais ça passe sous Linux).</li>
            <li><strong>Le confort :</strong> 8 Go de RAM.</li>
          </ul>
          <p><em>Astuce : La plupart des vieux PC portables ont une trappe facile à ouvrir pour ajouter une barrette de RAM récupérée sur un autre PC HS.</em></p>
        </div>
      </section>

      <!-- L'HYGIÈNE (POUSSIÈRE) -->
      <section>
        <h2>💨 Phase 4 : L'Hygiène (La Poussière)</h2>
        <div class="card">
          <p>L'ennemi silencieux, c'est la chauffe. Un ordinateur plein de poussière ne peut pas se refroidir. Pour se protéger, le processeur ralentit volontairement.</p>
          <p><strong>L'outil du résistant :</strong> Une bombe à air sec (ou un compresseur) et un vieux pinceau. Ouvrez, soufflez les ventilateurs, et gagnez 10°C et beaucoup de silence.</p>
        </div>
      </section>

      <!-- CHECKLIST FINALE -->
      <section>
        <h2>📝 Checklist de Survie</h2>
        <div class="card checklist-card">
          <p>Avant d'installer Linux (étape suivante), vérifie ton matériel :</p>
          
          <div class="checklist-item">
            <input type="checkbox" id="c1">
            <label for="c1">J'ai sauvegardé mes données importantes sur un disque externe.</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="c2">
            <label for="c2">J'ai dépoussiéré les ventilateurs.</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="c3">
            <label for="c3">Si possible, j'ai remplacé le vieux disque dur par un SSD.</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="c4">
            <label for="c4">J'ai vérifié si je peux ajouter de la RAM (optionnel).</label>
          </div>

          <div class="next-step">
            <p>Le matériel est prêt ? Il est temps de lui donner une âme libre.</p>
            <p>👉 <strong>Prochaine étape : Installer LINUX</strong></p>
          </div>
        </div>
      </section>

      <!-- Bouton retour à l'arbre -->
      <div style="text-align: center; margin-top: 3rem; margin-bottom: 2rem;">
        <button class="btn-next" @click="continueTo('/')">Retour à l'arbre 🌳</button>
      </div>

    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'PageMateriel',
  setup() {
    const router = useRouter()
    return { router }
  },
  mounted() {
    // S'assurer d'être en haut de la page lorsque la route est chargée
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch (e) {}
  },
  methods: {
    continueTo(pageId) {
      if (this.$router && this.$router.hasRoute && this.$router.hasRoute(pageId)) {
        this.$router.push({ name: pageId })
      } else if (pageId === '/' || pageId === 'tree') {
        this.$router.push('/')
      } else {
        this.$router.push('/')
      }
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