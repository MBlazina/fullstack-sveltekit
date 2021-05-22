import sveltePreprocess from 'svelte-preprocess';
/* import adapter from '@sveltejs/adapter-node';*/
import adapter from '@sveltejs/adapter-static'; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		/*NODE
		adapter: adapter({
			// default options are shown
			out: 'build'
		}),*/

		
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
