import scrollbarHide from "tailwind-scrollbar-hide"
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    keyframes: {
      spinCircle: {
        '0%': { transform: 'rotate(0deg) translateX(211px) rotate(0deg)' },
        '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' },
      },
    },
    animation: {
      'spin-circle': 'spinCircle 5s linear infinite',
    },
  },
  plugins: [scrollbarHide],
}

