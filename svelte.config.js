import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isCi = !!process.env.CI;
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? 'rss-reader-web-svelte';
const kitBasePath = isCi ? `/${repoName}` : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: kitBasePath
    }
	}
};

export default config;
