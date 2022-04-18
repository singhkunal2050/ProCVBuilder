module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:
      {
        '60/40': '60% 40%',
        'fixed': '40px 260px',
      },
      fontFamily: {
        'sora': ['"Sora"', "serif"],
      },
    },
  },
  plugins: [],
}