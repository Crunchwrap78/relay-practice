import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  entry: ["babel-polyfill","./src/index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  module: {
    loaders:[
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'}
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: './src'
  }
}
