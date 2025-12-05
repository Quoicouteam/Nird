<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import SkillTreeManager from './components/SkillTree/SkillTreeManager.vue'
import LaserGame from './components/LaserGame.vue'

const showTree = ref(false)
</script>

<template>
  <div class="app-container">
    <SiteHeader @open-tree="showTree = true" />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
    <SkillTreeManager v-if="showTree" @close="showTree = false" />
    <LaserGame />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
