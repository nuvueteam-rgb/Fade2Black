import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000000",
          soft: "#0a0a0a",
          card: "#111111",
        },
        red: {
          DEFAULT: "#dc2626",
          light: "#ef4444",
          glow: "#dc262680",
        },
        silver: {
          DEFAULT: "#a3a3a3",
          light: "#d4d4d4",
        },
        dark: {
          DEFAULT: "#171717",
          light: "#262626",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas-neue)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
      },
      backgroundImage: {
        "carbon-fiber":
          "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
      },
      boxShadow: {
        "red-glow": "0 0 60px 10px rgba(220, 38, 38, 0.3)",
        "red-glow-sm": "0 0 30px 5px rgba(220, 38, 38, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
