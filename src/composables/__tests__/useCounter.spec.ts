import { afterEach, beforeEach, describe, expect, it, type MockInstance, vi } from 'vitest'
import { useCounter } from '@/composables/useCounter.ts'

describe('useCounter', () => {
  let consoleDebug: MockInstance<typeof console.debug>

  beforeEach(() => {
    consoleDebug = vi.spyOn(console, 'debug')
  })

  afterEach(() => {
    consoleDebug.mockRestore()
  })

  it('initializes to 0', () => {
    const { count } = useCounter()

    expect(count.value).toBe(0)
    expect(consoleDebug).not.toHaveBeenCalled()
  })

  it('initializes to 0 when initial value is exactly 0', () => {
    const { count } = useCounter(0)

    expect(count.value).toBe(0)
    expect(consoleDebug).not.toHaveBeenCalled()
  })

  it('initializes to 5', () => {
    const { count } = useCounter(5)

    expect(count.value).toBe(5)
    expect(consoleDebug).not.toHaveBeenCalled()
  })

  it('initializes to 0 if initial value is negative', () => {
    const { count } = useCounter(-5)

    expect(count.value).toBe(0)
    expect(consoleDebug).toHaveBeenCalledWith('Initial counter is %s, setting it to 0', -5)
  })

  it('initializes to 10 if initial value is greater than 10', () => {
    const { count } = useCounter(15)

    expect(count.value).toBe(10)
    expect(consoleDebug).toHaveBeenCalledWith('Initial counter is %s, setting it to 10', 15)
  })

  it('initializes to 10 when initial value is exactly 10', () => {
    const { count } = useCounter(10)

    expect(count.value).toBe(10)
    expect(consoleDebug).not.toHaveBeenCalled()
  })

  it('increments the value from 1 to 1', () => {
    const { count, increment } = useCounter()

    for (let i = 0; i < 10; i++) {
      increment()
      expect(count.value).toBe(i + 1)
    }
  })

  it('increments the value to 10 maximum', () => {
    const { count, increment } = useCounter()

    for (let i = 0; i < 10; i++) {
      increment()
      expect(count.value).toBe(i + 1)
    }

    increment()

    expect(count.value).toBe(10)
  })

  it('decrements the value to 0 maximum', () => {
    const { count, decrement } = useCounter()

    expect(count.value).toBe(0)

    decrement()

    expect(count.value).toBe(0)
  })

  it('decrements the value from 1 to 1', () => {
    const { count, increment, decrement } = useCounter()

    for (let i = 0; i < 5; i++) {
      increment()
      expect(count.value).toBe(i + 1)
    }

    for (let i = 5; i > 0; i--) {
      decrement()
      expect(count.value).toBe(i - 1)
    }

    expect(count.value).toBe(0)

    decrement()

    expect(count.value).toBe(0)
  })
})
