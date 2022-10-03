import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: path.join(__dirname, 'public'),
	build: {
		outDir: path.join(__dirname, 'dist'),
		rollupOptions: {
			input: path.resolve(__dirname, 'public', 'index.html'),
		},
	},
	base: '/platzi-travel-tailwind/',
})
