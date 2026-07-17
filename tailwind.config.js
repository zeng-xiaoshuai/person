/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        ivory: {
          50: "#FDFAF6",
          100: "#F8F4EE",
          200: "#F1E9DD",
        },
        rose: {
          50: "#FBF1F0",
          100: "#F3DCD9",
          200: "#E8C2BD",
          300: "#D9A29B",
          400: "#C97B7B",
          500: "#B85F60",
          600: "#9A4A4D",
        },
        gold: {
          200: "#E5CDA8",
          300: "#D2B07F",
          400: "#B8956A",
          500: "#9A7A52",
        },
        ink: {
          50: "#F4F0EA",
          100: "#E2DCD2",
          200: "#B9B0A1",
          400: "#6B6258",
          600: "#4A4138",
          800: "#2B2520",
        },
        mist: "#E8D5D0",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Manrope"', '"Noto Sans SC"', "ui-sans-serif", "system-ui"],
        serifCN: ['"Noto Serif SC"', '"Fraunces"', "serif"],
        sansCN: ['"Noto Sans SC"', '"Manrope"', "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        wider2: "0.18em",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 5.5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 3.6vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(43, 37, 32, 0.18)",
        ring: "0 0 0 1px rgba(184, 95, 96, 0.2), 0 30px 60px -30px rgba(43, 37, 32, 0.25)",
        glow: "0 0 80px 0 rgba(184, 149, 106, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.08)", opacity: "0.8" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(2%, -1.5%) rotate(1deg)" },
          "66%": { transform: "translate(-1.5%, 1.5%) rotate(-1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "soft-pulse": "soft-pulse 6s ease-in-out infinite",
        drift: "drift 28s ease-in-out infinite",
        marquee: "marquee 60s linear infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.18 0 0 0 0 0.16 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        "grain": "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.16 0 0 0 0 0.14 0 0 0 0 0.12 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>\")",
      },
    },
  },
  plugins: [],
};
