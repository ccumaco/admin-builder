import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// Remove the import statement for __dirname from the path module
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [react(), mkcert(), svgr(), tsconfigPaths()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})
