<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { visitPage, completePage, unlockChildren } from '../stores/progress.js'

const router = useRouter()

onMounted(() => {
  visitPage('presentation')
})

function chooseNext(choice) {
  completePage('presentation')
  unlockChildren(['confidentialite', 'licences', 'sobriete'])
  router.push(`/page/${choice}`)
}
</script>

<template>
  <div class="page">
    <!-- Décoration de fond végétale -->
    <div class="nature-bg">
      <div class="leaf leaf-1">🍃</div>
      <div class="leaf leaf-2">🌿</div>
      <div class="leaf leaf-3">🍂</div>
      <div class="leaf leaf-4">🌱</div>
      <div class="leaf leaf-5">🍃</div>
      <div class="leaf leaf-6">🌿</div>
      <div class="leaf leaf-7">🍂</div>
      <div class="leaf leaf-8">🌱</div>
      <div class="leaf leaf-9">🍃</div>
      <div class="leaf leaf-10">🌿</div>
      <div class="leaf leaf-11">🍂</div>
      <div class="leaf leaf-12">🌱</div>
      <div class="leaf leaf-13">🍃</div>
      <div class="leaf leaf-14">🌿</div>
      <div class="leaf leaf-15">🍂</div>
    </div>
    <article class="content">
      <div class="hero">
        <div class="hero-icon">🌳</div>
        <h1>Bienvenue sur NIRD</h1>
        <p class="tagline">Explorez le numérique responsable, branche par branche</p>
      </div>

      <p class="intro">
        Le <strong>Numérique Responsable</strong> est une démarche qui vise à réduire l'empreinte
        environnementale et sociale du numérique, tout en maximisant ses bénéfices pour la société.
      </p>

      <div class="features">
        <div class="feature">
          <span class="feature-icon">🔍</span>
          <h3>Découvrez</h3>
          <p>Les enjeux du numérique et leur impact sur notre planète</p>
        </div>
        <div class="feature">
          <span class="feature-icon">💡</span>
          <h3>Apprenez</h3>
          <p>Des alternatives éthiques et des bonnes pratiques</p>
        </div>
        <div class="feature">
          <span class="feature-icon">🌱</span>
          <h3>Agissez</h3>
          <p>Adoptez des habitudes numériques plus responsables</p>
        </div>
      </div>

      <section class="section">
        <h2>🗺️ Comment ça marche ?</h2>
        <div class="how-it-works">
          <div class="step">
            <span class="step-number">1</span>
            <p>Explorez les thématiques qui vous intéressent</p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>À la fin de chaque page, choisissez votre prochaine destination</p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>Cliquez sur l'arbre 🌳 en haut à gauche pour voir votre progression</p>
          </div>
        </div>
      </section>
    </article>

    <div class="choices">
      <div class="choices-decoration">
        <span>🌿</span>
        <span>🍃</span>
        <span>🌿</span>
      </div>
      <p class="choices-label">Par où voulez-vous commencer votre exploration ?</p>
      <div class="choices-grid">
        <button class="choice-button" @click="chooseNext('confidentialite')">
          <span class="choice-icon">🔒</span>
          <span class="choice-title">Confidentialité & RGPD</span>
          <span class="choice-desc">Protéger vos données personnelles</span>
          <span class="choice-arrow">→</span>
        </button>

        <button class="choice-button choice-button--disabled" disabled>
          <span class="choice-icon">💰</span>
          <span class="choice-title">Licences coûteuses</span>
          <span class="choice-desc">Bientôt disponible</span>
          <span class="choice-soon">🌱 En croissance</span>
        </button>

        <button class="choice-button choice-button--disabled" disabled>
          <span class="choice-icon">🌱</span>
          <span class="choice-title">Sobriété & Écologie</span>
          <span class="choice-desc">Bientôt disponible</span>
          <span class="choice-soon">🌱 En croissance</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 60px);
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

/* Décoration naturelle de fond */
.nature-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.leaf {
  position: absolute;
  font-size: 2rem;
  opacity: 0.15;
  animation: float 6s ease-in-out infinite;
}

.leaf-1 { top: 10%; left: 5%; animation-delay: 0s; }
.leaf-2 { top: 30%; right: 8%; animation-delay: 1s; font-size: 2.5rem; }
.leaf-3 { top: 50%; left: 3%; animation-delay: 2s; }
.leaf-4 { top: 70%; right: 5%; animation-delay: 3s; font-size: 1.5rem; }
.leaf-5 { top: 20%; right: 15%; animation-delay: 4s; }
.leaf-6 { top: 60%; left: 10%; animation-delay: 5s; font-size: 2.2rem; }
.leaf-7 { top: 15%; left: 25%; animation-delay: 1.5s; font-size: 1.8rem; }
.leaf-8 { top: 45%; right: 20%; animation-delay: 2.5s; }
.leaf-9 { top: 75%; left: 35%; animation-delay: 3.5s; font-size: 2.1rem; }
.leaf-10 { top: 25%; left: 45%; animation-delay: 4.5s; }
.leaf-11 { top: 55%; right: 35%; animation-delay: 5.5s; font-size: 1.9rem; }
.leaf-12 { top: 80%; right: 25%; animation-delay: 0.5s; }
.leaf-13 { top: 5%; right: 30%; animation-delay: 3s; font-size: 2.3rem; }
.leaf-14 { top: 40%; left: 65%; animation-delay: 2s; }
.leaf-15 { top: 65%; right: 50%; animation-delay: 4s; font-size: 1.7rem; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
}

/* Hero section */
.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: gentle-bounce 3s ease-in-out infinite;
}

@keyframes gentle-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

h1 {
  color: #2e4f3b;
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.tagline {
  color: #5a7d6a;
  font-size: 1.2rem;
  font-style: italic;
}

h2 {
  color: #3d6b4f;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.intro {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f8f6f3;
  border-radius: 16px;
  border-left: 4px solid #5a7d6a;
  position: relative;
}

.intro::before {
  content: '🌿';
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: 1.5rem;
}

/* Features grid */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.feature {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(46, 79, 59, 0.08);
  border: 1px solid rgba(90, 125, 106, 0.1);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.feature h3 {
  color: #2e4f3b;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.feature p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* How it works */
.section {
  margin-bottom: 2rem;
}

.how-it-works {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(46, 79, 59, 0.05);
}

.step-number {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #554f4f, #585c58);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.step p {
  color: #555;
  margin: 0;
}

/* Choices section */
.choices {
  background: #f1f1f1;
  padding: 3rem 2rem;
  margin-top: 2rem;
  position: relative;
}

.choices-decoration {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.choices-label {
  text-align: center;
  font-size: 1.3rem;
  color: #2e4f3b;
  margin-bottom: 2rem;
  font-weight: 600;
}

.choices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.choice-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  background: white;
  border: 2px solid #d4e5da;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.choice-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #5a7d6a, #7dab8a);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.choice-button:hover:not(:disabled)::before {
  transform: scaleX(1);
}

.choice-button:hover:not(:disabled) {
  border-color: #5a7d6a;
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(46, 79, 59, 0.15);
}

.choice-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.choice-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.choice-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2e4f3b;
  margin-bottom: 0.5rem;
}

.choice-desc {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
}

.choice-arrow {
  font-size: 1.5rem;
  color: #5a7d6a;
  margin-top: 0.5rem;
  transition: transform 0.3s ease;
}

.choice-button:hover:not(:disabled) .choice-arrow {
  transform: translateX(5px);
}

.choice-soon {
  font-size: 0.8rem;
  color: #7dab8a;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: #e8f5e9;
  border-radius: 20px;
}
</style>

