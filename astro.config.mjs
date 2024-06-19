import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import yaml from '@rollup/plugin-yaml'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import AutoImport from 'unplugin-auto-import/astro'
import Inspect from 'vite-plugin-inspect'

// https://astro.build/config
export default defineConfig({
  site: 'https://frontend-salo-ai.pages.dev',
  vite: {
    plugins: [yaml(), Inspect(), tailwindcss()]
  },
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [
    AutoImport({
      imports: ['react'],
      packagePresets: ['detect-browser-es'],
      dirs: ['src/utils/*.ts'],
      dts: './src/auto-imports.d.ts'
    }),
    react(),
    sitemap(),
    partytown(),
    mdx()
  ]
})
