import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/',
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: process.env.NODE_ENV === 'production' ? [] : ['react-dev-locator'],
      },
    }),
    tsconfigPaths()
  ],
})
