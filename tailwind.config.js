/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#1d4ed8',
        'blue-deep': '#0a1240',
        'blue-glow': '#0f2594',
        offwhite: '#f6f3ec',
        ink: '#14161a',
        'ink-soft': '#55606f',
        'accent-dark': '#a9c6ff',
      },
      fontFamily: {
        display: ['General Sans', 'Outfit', 'sans-serif'],
        body: ['Switzer', 'Inter', 'sans-serif'],
        mark: ['Gochi Hand', 'cursive'],
      },
      transitionTimingFunction: {
        pop: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
