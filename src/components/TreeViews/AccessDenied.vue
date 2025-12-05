<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Rediriger vers l'accueil après 3 secondes
  setTimeout(() => {
    router.push('/')
  }, 3000)
})
</script>

<template>
  <div class="access-denied-page">
    <div class="content">
      <div class="icon">🔒</div>
      <h1>Accès refusé</h1>
      <p class="message">
        Cette page n'est pas encore débloquée.
      </p>
      <p class="hint">
        Complétez les pages précédentes pour débloquer celle-ci.
      </p>
      <div class="redirect-info">
        Redirection vers l'accueil dans quelques instants...
      </div>
      <button class="btn-home" @click="router.push('/')">
        🏠 Retour à l'accueil
      </button>
    </div>
  </div>
</template>

<style scoped>
.access-denied-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.content {
  background: white;
  border-radius: 20px;
  padding: 3rem 2rem;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.message {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.hint {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.redirect-info {
  color: #aaa;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.btn-home {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-home:hover {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}
</style>
