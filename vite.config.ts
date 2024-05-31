import { defineConfig } from "vite"

export default defineConfig( {
	build: {
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true,
			}
		}
	},
	server: {
		host: true,
	},
} )
