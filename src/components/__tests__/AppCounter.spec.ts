import { describe, expect, it, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import AppCounter from '../AppCounter.vue'
import { useCounter } from '@/composables/useCounter.ts'
import { ref } from 'vue'

const incrementMock = vi.fn()
const decrementMock = vi.fn()

const useCounterMock = {
  count: ref(0),
  increment: incrementMock,
  decrement: decrementMock,
}

vi.mock('@/composables/useCounter.ts', () => ({
  useCounter: vi.fn(),
}))

describe('AppCounter', () => {
  it.each([0, 1, 2, 3, 4, 5])('renders properly', (initialCounter: number) => {
    vi.mocked(useCounter).mockReturnValue({ ...useCounterMock, count: ref(0) })

    const wrapper = mount(AppCounter, { props: { initialCounter }})
    expect(wrapper.html()).matchSnapshot()
    expect(useCounter).toHaveBeenCalledWith(initialCounter)
  })

  it.each([0, 1, 2, 3, 4, 5])(
    'renders the text in green when the count value is less or equal than 5',
    (countValue: number) => {
      vi.mocked(useCounter).mockReturnValue({ ...useCounterMock, count: ref(countValue) })

      const wrapper = mount(AppCounter, { props: { initialCounter: 0 }})
      //const button = wrapper.find('.button-increment')
      //button.trigger('click')
      expect(wrapper.html()).matchSnapshot()
    },
  )

  it.each([6, 7, 8, 9, 10])(
    'renders the text in red when the count value is greater than 5',
    (countValue: number) => {
      vi.mocked(useCounter).mockReturnValue({ ...useCounterMock, count: ref(countValue) })

      const wrapper = mount(AppCounter, { props: { initialCounter: 0 }})
      //const button = wrapper.find('.button-increment')
      //button.trigger('click')
      expect(wrapper.html()).matchSnapshot()
    },
  )
})
