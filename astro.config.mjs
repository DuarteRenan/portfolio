import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap"; 

export default defineConfig({
  
  site: 'https://renanduartedev.com.br', 

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['aos']
    }
  },
  
   image: {
    formats: ['webp', 'avif']
  },

  integrations: [sitemap()], 
});