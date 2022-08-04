/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        incorrectpos: '#B59F3B',
        correct: '#6AAA64',
        wrongletter: '#323031',
      },
    },
  },
  plugins: [],
  safelist: ['bg-correct', 'bg-incorrectpos', 'bg-wrongletter'],
};
