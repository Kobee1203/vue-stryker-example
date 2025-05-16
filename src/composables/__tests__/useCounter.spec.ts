import { describe, expect, it } from 'vitest'
import { useCounter } from '@/composables/useCounter.ts'

describe('useCounter', () => {
  it('initializes to 0', () => {
    const { count } = useCounter()

    expect(count.value).toBe(0)
  })

  it('increments the value to 1', () => {
    const { count, increment } = useCounter()

    increment()

    expect(count.value).toBe(1)
  })
})
