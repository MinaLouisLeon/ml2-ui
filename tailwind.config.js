module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateRows : {
        "large-calendar" : "45px 20px"
      },
    },
    darkMode : 'media',
  },
  variants : {
    extend: {
      backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
    }
  },
  plugins: [],
}
