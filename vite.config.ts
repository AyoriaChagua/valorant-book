import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/valorant-book/",
  plugins: [
    react(),
    tsconfigPaths()
  ],
  define: {
    //... acá definimos las variables de entorno.. no lo olvides uu
  }
})
