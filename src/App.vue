<script setup lang="ts">
import AppCounter from './components/AppCounter.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <main>
    <AppCounter :initial-counter="0" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  margin: 0 auto 2rem;
}
</style>
