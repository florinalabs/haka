import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        haka: {
          yellow: "#FFC107",
          darkgray: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
};
export default config;
