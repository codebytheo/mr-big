import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "softwhite": "#eaeaea",
      },
      fontFamily: {
        intermedium: ['var(--font-inter-medium)'],
        interextrabold: ['var(--font-inter-extrabold)'],
        clashGrotesk: ['var(--font-clashgrotesk-medium)'],
        qiaraTosfa: ['var(--font-qiara-tosfa)'],
      }
    },
  },
  plugins: [],
};
export default config;
