import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/valorant-book/",
  plugins: [
    react(),
    tsconfigPaths(),
    svgr()
  ],
  define: {
    //... acá definimos las variables de entorno.. no lo olvides uu
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
