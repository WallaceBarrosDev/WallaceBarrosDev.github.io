import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      fileParallelism: false,
      setupFiles: ['vitest.setup.ts'],
      globalSetup: ['vitest.global.setup.ts'],
      include: ['src/**/*.{spec,test}.{ts,vue}'],
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
