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
        <h1>🔧 Maintenance et Optimisation Matérielle</h1>
        <p class="subtitle">Prolonger la durée de vie du matériel informatique par des interventions appropriées</p>
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
            <input type="checkbox" id="c1" v-model="checked.c1">
            <label for="c1">J'ai sauvegardé mes données importantes sur un disque externe.</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="c2" v-model="checked.c2">
            <label for="c2">J'ai dépoussiéré les ventilateurs.</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="c3" v-model="checked.c3">
            <label for="c3">Si possible, j'ai remplacé le vieux disque dur par un SSD.</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="c4" v-model="checked.c4">
            <label for="c4">J'ai vérifié si je peux ajouter de la RAM (optionnel).</label>
          </div>

          <div class="next-step">
            <p>Le matériel est prêt ? Il est temps de lui donner une âme libre.</p>
            <p>👉 <strong>Prochaine étape : Installer LINUX</strong></p>
          </div>
        </div>
      </section>

      <!-- Bouton retour au début -->
      <div style="text-align: center; margin-top: 3rem; margin-bottom: 2rem;">
        <button v-if="allChecked" class="btn-next" @click="continueTo('/')">Retour au début 🌳</button>
        <p v-else style="color: #6b6b6b; margin:0;">Cochez toutes les cases pour débloquer le bouton.</p>
      </div>

      <!-- Boutons Linux -->
      <div v-if="allChecked" class="linux-choices">
        <p class="choices-label">Quel type de Linux t'intéresse ?</p>
        <div class="choices-grid">
          <button class="choice-button" @click="continueTo('linux-distros-debutants')">
            <span class="choice-icon">🐧</span>
            <span class="choice-title">Distro Débutants</span>
            <span class="choice-desc">Débuter avec Linux simplement</span>
          </button>
          <button class="choice-button" @click="continueTo('linux-distros-gpu')">
            <span class="choice-icon">🎮</span>
            <span class="choice-title">Distro Gaming/GPU</span>
            <span class="choice-desc">Linux pour le graphisme et jeux</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { unlockPage, navigateToPage } from '../../../router/progress.js'

export default {
  name: 'PageMateriel',
  mounted() {
    // Débloquer cette page
    unlockPage('windows')
    // S'assurer d'être en haut de la page lorsque la route est chargée
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch (e) {}
  },
  data() {
    return {
      checked: {
        c1: false,
        c2: false,
        c3: false,
        c4: false
      }
    }
  },
  computed: {
    allChecked() {
      return Object.values(this.checked).every(v => v === true)
    }
  },
  methods: {
    continueTo(pageId) {
      navigateToPage('windows', pageId, this.$router)
    }
  }
}

</script>

<style scoped>
/* Pas de styles spécifiques - tout vient de pages-common.css */
</style>