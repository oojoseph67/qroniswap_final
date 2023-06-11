/** @type {import('tailwindcss').Config} **/
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Inter: ["Inter", "sans-serif"],
			},
		},
		colors: {
			primary: "#9f2dfe",
			secondary: "#3bb2f9",
			gray: {
				100: "#f9fafb",
				200: "#f2f4f7",
				300: "#eaecf0",
				400: "#d9dbe1",
				500: "#667085",
				600: "#344054",
				700: "#1d2939",
				800: "#0b0d17",
				900: "rgba(217, 217, 217, 0.3)",
				1000: "rgba(255, 255, 255, 0.5)",
			},
			white: "#fff",
			blue: "#8c30f5",
			indigo: "#6941c6",
			black: "#000",
		},
		fontSize: {
			xs: "12px",
			sm: "14px",
			base: "16px",
			lg: "18px",
			xl: "20px",
			"2xl": "24px",
			"3xl": "32px",
			"4xl": "36px",
			"5xl": "48px",
			"6xl": "60px",
		},
	},
};
