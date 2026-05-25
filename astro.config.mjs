import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import mermaid from 'astro-mermaid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mermaid(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});