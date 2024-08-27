<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Exercise1 from './views/Exercise1.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer__links">
      <nav class="flex flex-row gap-8 mx-auto">
        <RouterLink to="/">Exercise 1</RouterLink>
        <RouterLink to="/exercise2">Exercise 2</RouterLink>
      </nav>
    </div>
  </footer>
</template>
