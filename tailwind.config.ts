import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F3F8F5",
          100: "#E7F1EA",
          700: "#2F6651",
          800: "#1F4D3D",
          950: "#123028"
        },
        sand: {
          50: "#FBF8F2",
          100: "#F2EBDD",
          200: "#E5D7BF"
        },
        charcoal: {
          500: "#6A736D",
          700: "#3F4742",
          800: "#2A312D",
          950: "#1B1E1C"
        },
        amber: {
          50: "#FBF6EE",
          300: "#E4C89A",
          600: "#B76E20",
          800: "#7A4A12"
        }
      },
      fontFamily: {
        serif: ["var(--font-merriweather)", "Georgia", "serif"],
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        prose: "74ch"
      }
    }
  },
  plugins: []
};

export default config;
