import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://nsis-dev.github.io',
	base: process.env.CI ? '/highlightjs/' : '/',
	outDir: 'docs',
	output: 'static',
	vite: {
		plugins: [tailwindcss()],
	},
});
