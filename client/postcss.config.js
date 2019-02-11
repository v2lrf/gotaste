const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [tailwindcss('./client/tailwind.config.js'), require('autoprefixer')]
}
