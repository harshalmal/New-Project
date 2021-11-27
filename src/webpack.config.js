const webpack = require('webpack');
const path = require ('path');

module.exports = {

  entry: {
    'app': './src/main.ts'
  },

  output: {
    filename: 'main.js'
  },

  rules: 
    {
      test: /\.css$/,
      loaders: 'style-loader!css-loader'
    },

  plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]  
    
};