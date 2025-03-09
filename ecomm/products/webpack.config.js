const HtmlWebpackPlugin = require('html-webpack-plugin'); // used to dynamicaly add the js files into index.html

module.exports = {
  mode: 'development',
  /* webpack dev server configuration to access the dist/main.js file and available to run on browsers */
  devServer: {
    port: 8081, // !Important: 8081 is the default port used by webpack-dev-server
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};