/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#111b21'
			},
			borderRadius: {
				sm: '8px'
			}
		}
	},
	plugins: []
};
