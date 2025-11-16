import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          25: "#f5f5f5",
          50: "#e5e5e5",
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#1a1a1a",
          600: "#0d0d0d",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#D4AF37",
          25: "#fef9e7",
          50: "#fef3c7",
          100: "#fde68a",
          200: "#fcd34d",
          300: "#fbbf24",
          400: "#f59e0b",
          500: "#D4AF37",
          600: "#b8860b",
          700: "#9a7209",
          800: "#7c5d07",
          900: "#5e4805",
        },
        "main-blue": "#000000",
        "secondary-gray": "#D4AF37",
        faint: "#f8f9fa",
        success: {
          500: "#12B76A",
          800: "#05603A",
        },
        error: {
          25: "#FFFAFA",
          50: "#FFF0F0",
          100: "#FEE2E1",
          200: "#FEC5C3",
          300: "#FD8B87",
          400: "#FB514B",
          500: "#F00D05",
          600: "#CD0B04",
          700: "#A50903",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9F9FB",
          100: "#EFF1F5",
          200: "#DCDFEA",
          300: "#B8BED5",
          400: "#7D89B0",
          500: "#5D6B98",
          700: "#404968",
          900: "#111322",
        },
        blue: {
          50: "#F0F9FF",
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
          700: "#FF9165",
        },
        "poder-blue": {
          50: "#F7FAFA",
          100: "#E6EFF0",
          200: "#DAE7E8",
          500: "#AECACD",
          600: "#9EB8BB",
        },
        "light-blue": {
          500: "#0BA5EC",
          800: "#065986",
        },
        pink: {
          300: "#FAA7E0",
        },
        violet: {
          300: "#C3B5FD",
        },
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      animation: {
        "bounce-vertical": "bounce-vertical 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "bounce-vertical": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
