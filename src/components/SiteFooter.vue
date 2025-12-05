<script setup>
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <p>🌳 NIRD - Numérique Responsable 🌳</p>
      <p class="footer-tagline">Pour un avenir numérique plus responsable</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 2rem;
  text-align: center;
  color: #5a7d6a;
  font-size: 0.9rem;
  border-top: 2px solid rgba(90, 125, 106, 0.2);
  margin-top: auto;
  background: linear-gradient(180deg, transparent 0%, rgba(168, 196, 180, 0.05) 100%);
  position: relative;
  overflow: hidden;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(125, 171, 138, 0.1) 50%, 
    transparent 100%);
  animation: slide-shimmer 3s infinite;
  pointer-events: none;
}

@keyframes slide-shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.footer-content {
  position: relative;
  z-index: 1;
}

.site-footer p {
  margin: 0.25rem 0;
  transition: all 0.3s ease;
}

.site-footer:hover p {
  color: #3d6b4f;
  animation: float-gentle 3s ease-in-out infinite;
}

.footer-tagline {
  font-size: 0.8rem;
  font-style: italic;
  opacity: 0.8;
  margin-top: 0.5rem;
}
</style>

