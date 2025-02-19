import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// @ts-ignore
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      TanStackRouterVite({ autoCodeSplitting: true, routesDirectory: './src/renderer/src/routes' }),
      react(),
      tailwindcss()
    ]
  }
})
