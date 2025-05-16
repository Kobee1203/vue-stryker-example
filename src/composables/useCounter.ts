import { ref } from "vue";

export const useCounter = () => {
  const count = ref(0)

  function increment() {
    if (count.value < 10) {
      count.value++
    }
  }

  function decrement() {
    if (count.value > 0) {
      count.value--
    }
  }

  return {
    count,
    increment,
    decrement,
  }
}
