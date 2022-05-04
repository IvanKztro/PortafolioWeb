import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					// These must match what is in tsconfig.json
					$lib: path.resolve('./src/lib'),
					$models: path.resolve('./src/models'),
					$stores: path.resolve('./src/stores')
				}
			}
		},

		// Override http methods in the Todo forms
		// methodOverride: {
		// 	allowed: ['PATCH', 'DELETE']
		// }
	},
	onwarn: (warning, handler) => {
		const { code, filename } = warning;

		// Ignoring some noise
		if (code === 'css-unused-selector') return;
		if (code === 'a11y-invalid-attribute') return;

		console.log('code', code);

		handler(warning);
	}
};

export default config;
