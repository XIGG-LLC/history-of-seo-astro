import { defineConfig } from 'astro/config';

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
// https://astro.build/config
export default defineConfig({
	buildOptions: {
		site: 'https://www.thehistoryofseo.com'
	},
	devOptions: {
		trailingSlash: 'always'
	}
});
