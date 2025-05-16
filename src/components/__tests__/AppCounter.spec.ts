import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import AppCounter from '../AppCounter.vue'

const incrementMock = vi.fn();
const decrementMock = vi.fn();

vi.mock('../useCounter', () => {
  return ({
    useCounter: () => ({
      count: 0,
      increment: incrementMock,
      decrement: decrementMock,
    }),
  });
})

describe('AppCounter', () => {
  it('renders properly', () => {
    const wrapper = mount(AppCounter)
    expect(wrapper.html()).matchSnapshot()
  })
})
