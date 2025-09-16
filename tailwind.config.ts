import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero1":"url('/about.jpg')",
        "hero2": "url('/building.avif')",
      },
      boxShadow:{
        'custom': 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'
      },
      width:{
        '128':'40rem',
      },
    },
  },
  plugins: [],
};
export default config;
