<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { visitPage, completePage } from '../stores/progress.js'

const route = useRoute()
const router = useRouter()

const pageId = route.path.split('/').pop()
const pageTitle = route.meta?.title || 'Page en construction'

onMounted(() => {
  visitPage(pageId)
})

function markAsRead() {
  completePage(pageId)
  router.push('/')
}
</script>

<template>
  <div class="page">
    <article class="content">
      <h1>{{ pageTitle }}</h1>

      <div class="placeholder-content">
        <div class="placeholder-icon">🚧</div>
        <p class="placeholder-text">Cette page est en cours de construction.</p>
        <p class="placeholder-subtext">Le contenu sera bientôt disponible.</p>
      </div>
    </article>

    <div class="actions">
      <button class="action-button" @click="markAsRead">
        J'ai compris, retour à l'accueil
      </button>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 60px);
  padding-top: 80px;
}

.content {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #2e4f3b;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  text-align: center;
}

.placeholder-content {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f6f3 0%, #e8f0eb 100%);
  border-radius: 20px;
  border: 2px dashed #c4d4ca;
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.placeholder-text {
  font-size: 1.3rem;
  color: #2e4f3b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.placeholder-subtext {
  color: #777;
  font-size: 1rem;
}

.actions {
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-top: 2rem;
}

.action-button {
  padding: 1rem 2rem;
  background: #5a7d6a;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: #2e4f3b;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(46, 79, 59, 0.25);
}
</style>

