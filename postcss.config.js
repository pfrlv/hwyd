module.exports = {
  plugins: [
    require('cssnano'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-inline-media'),
    require('postcss-simple-vars')({
        variables: function () {
            return require('./src/variables');
        },
        onVariables: function (variables) {
            console.log('CSS Variables');
        }
    }),
  ]
}
