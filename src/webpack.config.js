var webpack = require('webpack');

module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  },

  module: {
    rules: 
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
     
  },

  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
