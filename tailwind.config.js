module.exports = {
  content: [
    "./assets/**/*.js",
    "./assets/**/*.vue",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
    colors: {
      'prm': '#004D40',
      'prm-dk': '#00251A',
      'prm-lt': '#39796B',
      'scd': '#E0F2F1',
      'scd-dk': '#AEBFBE',
      'scd-lt': '#FFFFFF'
    }
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
