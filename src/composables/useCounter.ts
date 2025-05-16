import { ref } from 'vue'

const MIN_VALUE = 0
const MAX_VALUE = 10

export const useCounter = (initialCounter: number = MIN_VALUE) => {
  let initialValue = initialCounter

  // AStryker disable next-line EqualityOperator: The <= mutant results in an equivalent mutant
  if (initialCounter < 0) {
    console.debug('Initial counter is %s, setting it to 0', initialCounter)
    initialValue = 0
  }
  // AStryker disable next-line EqualityOperator: The >= mutant results in an equivalent mutant
  if (initialCounter > 10) {
    console.debug('Initial counter is %s, setting it to 10', initialCounter)
    initialValue = 10
  }

  const count = ref(initialValue)

  function increment() {
    if (count.value < MAX_VALUE) {
      count.value++
    }
  }

  function decrement() {
    if (count.value > MIN_VALUE) {
      count.value--
    }
  }

  return {
    count,
    increment,
    decrement,
  }
}
