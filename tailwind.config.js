/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts}", "./public/index.html", "./public/**/*.html"],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#15141A",
				"primary-light": "1E1C2C",
				"primary-gray": "#808080",
				"primary-red": "EC4A4A",
				"secondary-light": "#2F2C3A",
			},
		},
	},
	plugins: [],
};
