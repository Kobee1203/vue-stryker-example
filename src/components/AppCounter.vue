<script setup lang="ts">
import { useCounter } from '@/composables/useCounter.ts'
import { computed } from 'vue'

const props = withDefaults(defineProps<{initialCounter: number}>(), {
  initialCounter: 0,
})

const { count, decrement, increment } = useCounter(props.initialCounter)

const countClass = computed(() => (count.value > 5 ? 'text-red-500' : 'text-green-500'))
</script>

<template>
  <button class="button-decrement" @click="decrement">-</button>
  <span class="count-value" :class="countClass">{{ count }}</span>
  <button class="button-increment" @click="increment">+</button>
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
