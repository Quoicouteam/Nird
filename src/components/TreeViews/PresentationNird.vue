<script setup>
import { useRouter } from 'vue-router'
import { usePageUnlock } from '../../router/usePageUnlock.js'
import { navigateToPage } from '../../router/progress.js'

const router = useRouter()

// Débloquer automatiquement cette page quand on y arrive
usePageUnlock()

function chooseNext(choice) {
  navigateToPage('presentation', choice, router)
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

        <button class="choice-button" @click="chooseNext('windows')">
            <span class="choice-icon">🪟</span>
            <span class="choice-title">Windows & OS Propriétaire</span>
            <span class="choice-desc">Comprendre les systèmes d'exploitation propriétaires</span>
            <span class="choice-arrow">→</span>
          </button>

        <button class="choice-button" @click="chooseNext('licences')">
          <span class="choice-icon">💰</span>
          <span class="choice-title">Licences Payantes</span>
          <span class="choice-desc">Les enjeux des logiciels propriétaires</span>
          <span class="choice-arrow">→</span>
        </button>

        <button class="choice-button" @click="chooseNext('sobriete')">
          <span class="choice-icon">🌱</span>
          <span class="choice-title">Sobriété & Écologie</span>
          <span class="choice-desc">Les enjeux environnementaux du numérique</span>
          <span class="choice-arrow">→</span>
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
  opacity: 0.1;
  animation: float-leaf 8s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(46, 79, 59, 0.1));
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

@keyframes float-leaf {
  0%, 100% { transform: translateY(0) translateX(0) rotate(0deg) scale(1); }
  25% { transform: translateY(-20px) translateX(5px) rotate(10deg) scale(1.05); }
  50% { transform: translateY(-30px) translateX(-5px) rotate(-5deg) scale(0.95); }
  75% { transform: translateY(-15px) translateX(8px) rotate(15deg) scale(1.02); }
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
  display: inline-block;
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
  transition: all 0.3s ease;
}

.intro:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 20px rgba(90, 125, 106, 0.15);
}

.intro::before {
  content: '🌿';
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: 1.5rem;
  animation: float-gentle 3s ease-in-out infinite;
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
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(93, 175, 125, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(46, 79, 59, 0.15);
}

.feature:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 2rem;
  display: inline-block;
  margin-bottom: 0.75rem;
  animation: float-gentle 3s ease-in-out infinite;
}

.feature:hover .feature-icon {
  animation: pulse-grow 0.6s ease-in-out;
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
  background: linear-gradient(135deg, #ffffff 0%, #f9fdf8 100%);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(46, 79, 59, 0.05);
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  position: relative;
}

.step::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #5a7d6a 0%, #7dab8a 100%);
  border-radius: 12px 0 0 12px;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.step:hover {
  transform: translateX(6px);
  box-shadow: 0 8px 20px rgba(46, 79, 59, 0.12);
}

.step:hover::before {
  transform: scaleY(1);
}

.step-number {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #5a7d6a, #7dab8a);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(90, 125, 106, 0.25);
}

.step:hover .step-number {
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 6px 16px rgba(90, 125, 106, 0.35);
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
  max-width: 1500px;
  margin: 0 auto;
}

.choice-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f9fdf8 100%);
  border: 2px solid #d4e5da;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
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
  background: linear-gradient(90deg, #5a7d6a, #7dab8a, #5a7d6a);
  background-size: 200% 100%;
  transform: scaleX(0);
  transition: transform 0.4s ease;
  animation: shimmer 2s infinite;
}

.choice-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(93, 175, 125, 0.15);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.choice-button:hover:not(:disabled)::before {
  transform: scaleX(1);
}

.choice-button:hover:not(:disabled)::after {
  width: 300px;
  height: 300px;
}

.choice-button:hover:not(:disabled) {
  border-color: #5a7d6a;
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(46, 79, 59, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  background: linear-gradient(135deg, #ffffff 0%, #f0f7f3 100%);
}

.choice-button:active:not(:disabled) {
  transform: translateY(-4px) scale(1);
}

.choice-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.choice-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: float-gentle 3s ease-in-out infinite;
}

.choice-button:hover:not(:disabled) .choice-icon {
  animation: pulse-grow 0.6s ease-in-out;
}

.choice-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2e4f3b;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.choice-button:hover:not(:disabled) .choice-title {
  color: #3d6b4f;
  animation: glow 2s ease-in-out infinite;
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
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0.7;
}

.choice-button:hover:not(:disabled) .choice-arrow {
  transform: translateX(8px) rotate(15deg);
  opacity: 1;
  color: #3d6b4f;
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

