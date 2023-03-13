import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: './',
	publicDir: './public',
	resolve: {
		alias: {
			assets: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			services: path.resolve(__dirname, './src/services'),
			pages: path.resolve(__dirname, './src/pages'),
			hooks: path.resolve(__dirname, './src/hooks'),
			types: path.resolve(__dirname, './src/types'),
		},
	},
	plugins: [react()],
})
