// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    dir: './src/',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html', 'lcov', 'text-lcov'],
    },
  },
})
