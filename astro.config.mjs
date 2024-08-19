import markdoc from '@astrojs/markdoc';
import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
