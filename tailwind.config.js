module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    },
  },
  variants : {
    extend: {
      backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
    }
  },
  plugins: [],
}
