import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		screens: {
			xs: { min: "0px", max: "440px" },
			sm: { min: "440px", max: "768px" },
			// => @media (min-width: 640px) { ... }

			md: { min: "768px", max: "1024px" },
			// => @media (min-width: 768px) { ... }

			lg: { min: "1024px", max: "1280px" },
			// => @media (min-width: 1024px) { ... }

			xl: { min: "1280px", max: "1536px" },
			// => @media (min-width: 1280px) { ... }

			"2xl": { min: "1536px", max: "1920px" },
			// => @media (min-width: 1536px) { ... }
		},
	},
	darkMode: ["class"],
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
