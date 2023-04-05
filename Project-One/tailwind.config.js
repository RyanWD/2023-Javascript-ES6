const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.orange[500],
					...colors.orange,
				},
			},
		},
	},
};