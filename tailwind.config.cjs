/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        incorrectpos: '#F7FE72',
        correct: '#bada55',
        wrongletter: '#323031',
      },
    },
  },
  plugins: [],
  safelist: ['bg-correct', 'bg-incorrectpost', 'bg-wrongletter'],
};
