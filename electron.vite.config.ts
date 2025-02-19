import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// @ts-ignore
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin({ exclude: ['electron-debug', 'electron-store'] })],
    resolve: {
      alias: {
        '@main': resolve('src/main'),
        '@share': resolve('src/share')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@share': resolve('src/share')
      }
    },
    plugins: [
      TanStackRouterVite({ autoCodeSplitting: true, routesDirectory: './src/renderer/src/routes' }),
      react(),
      tailwindcss()
    ]
  }
})
