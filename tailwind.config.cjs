/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#232a36',
				darkBackground: '#1e252f',
				text: '#d8e2ed',
				primary: '#91eed8'
			},
			screens: {
				tablet: '640px',
				laptop: '1024px',
				'big-laptop': '1340px',
				desktop: '1560px',
				ultrawide: '1900px'
			},
			fontFamily: {
				sans: ['Open Sans Medium', 'sans-serif'],
				'sans-bold': ['Open Sans Bold', 'sans-serif'],
				'sans-extra': ['Open Sans Extra Bold', 'sans-serif'],
				'sans-semi': ['Open Sans Semi Bold', 'sans-serif'],
				'sans-condensed': ['Open Sans Condensed', 'sans-serif'],
				'serif-bold': ['PT Serif Bold', 'serif'],
				sofia: ['Sofia Condensed', 'sans-serif']
			},
			flex: {
				2: '2 2 0%'
			}
		}
	},
	plugins: []
};
