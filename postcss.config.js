module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars')({
      variables: function () {
        return require('./src/variables');
      }
    }),
    require('postcss-nested'),
    require('postcss-inline-media'),
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')
  ]
}
