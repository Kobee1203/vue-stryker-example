import { describe, expect, it, vi } from 'vitest'
import { createApp } from 'vue'

vi.mock('vue', () => ({
  createApp: vi.fn()
}))

const AppMock = vi.fn()
vi.mock('../App.vue', () => ({
  default: AppMock
}))

describe('main file', () => {
  it('mounts the Vue app', async () => {
    const mountMock = vi.fn()
    vi.mocked(createApp, { partial: true }).mockReturnValue({
      mount: mountMock
    })

    await import('../main')

    expect(createApp).toHaveBeenCalledWith(AppMock)
    expect(mountMock).toHaveBeenCalledWith('#app')
  })
})
