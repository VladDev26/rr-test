const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");




module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.join(__dirname, "assets"),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react', 'stage-2'] }
      },
      
      { 
        test: /\.css$/i, 
        use: ExtractTextPlugin.extract(['css-loader'])
      },
      
      { 
        test: /\.scss$/i, 
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles/bundle.css')
  ]
};
