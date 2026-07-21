// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import keystatic from '@keystatic/astro'


import cloudflare from '@astrojs/cloudflare';

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  output: 'server',
  integrations: [react(), keystatic(), markdoc()],
  adapter: cloudflare(),
  devToolbar: { enabled: false }
});