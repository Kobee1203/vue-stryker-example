<script setup lang="ts">
import { useCounter } from "@/composables/useCounter.ts";
import { computed } from "vue";

const { count, decrement, increment } = useCounter();

const countClass = computed(() => count.value > 5 ? 'text-red-500' : 'text-green-500')
</script>

<template>
  <button @click="decrement">-</button>
  <span class="count-value" :class="countClass">{{ count }}</span>
  <button @click="increment">+</button>
</template>

<style scoped>
.count-value {
  margin: 0 1rem;
}

.text-red-500 {
  color: #ef4444;
}

.text-green-500 {
  color: #22c55e;
}
</style>
