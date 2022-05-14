import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
const site = process.env.CI_ENVIRONMENT_URL ?? 'http://localhost:3000'; // Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @ts-check
// https://astro.build/config


// https://astro.build/config
export default defineConfig({
  site: site,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: { mode: 'mdx' }
});