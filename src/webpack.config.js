const webpack = require('webpack');
const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  entry: {
    app: 'src/app.ts',
    vendor: 'src/vendor.ts'
  },
  
  output: {
    filename: 'main.ts'
  },
 
  rules: [
    {
      test: /\.css$/,
      loaders: 'style-loader!css-loader'
    },

    {
      test: /\.html$/,
      loader: 'html-loader'
    }
  ],

  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor']
      }),
   
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
    
};