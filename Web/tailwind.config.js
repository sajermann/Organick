/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				brand: {
					300: '#996DFF',
					500: '#8257e6',
				},
				dark: {
					500: '#274C5B',
					700: '#525C60',
				},
				green: {
					500: '#7EB693',
				},
				yellow: {
					500: '#EFD372 ',
				},
				pink: {
					100: '#E3F1E9',
				},
				light: {
					100: '#F9F8F8',
					200: '#E0E0E0',
					230: '#F1F1F1',
					240: '#FCFCFC',
					250: '#B8B8B8',
					300: '#EFF6F1',
					400: '#FAFAFA',
					500: '#D4D4D4',
				},
			},
			fontFamily: { Yellowtail: ['Yellowtail', 'cursive'] },
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
