/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				primero: '#0b303c',
				segundo: '#124b58',
				tercero: '#1f727d',
				cuarto: '#37a7ac',
				quinto: '#5eebe2'
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}
