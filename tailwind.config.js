// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}', // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['MyCustomFont', 'sans-serif'], // Replace with your font name
      },
    },
  },
  plugins: [],
}
