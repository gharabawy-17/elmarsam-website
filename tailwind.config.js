/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d4a373',
          dark: '#b5835a',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f101a',
        },
        text: {
          DEFAULT: '#2b2d42',
          muted: '#8d99ae',
          dark: '#f8f9fa',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}