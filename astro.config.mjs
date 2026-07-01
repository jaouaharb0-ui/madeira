import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://jaouaharb0-ui.github.io',
  base: '/madeira',
  vite: {
    plugins: [tailwindcss()],
  },
})
