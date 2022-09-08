module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
