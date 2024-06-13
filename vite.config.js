import { sveltekit } from '@sveltejs/kit/vite'
import { ViteImageOptimizer as viteImageOptimizer } from 'vite-plugin-image-optimizer';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		viteImageOptimizer({
			exclude: /-crushed\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
			png: {
				quality: 100
			}
		}),
		viteImageOptimizer({
			test: /-crushed\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
			png: {
				quality: 1
			}
		})
	],
	server: {
		fs: {
			allow: ['.']
		}
	}
};

export default config
