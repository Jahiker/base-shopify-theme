const path = require('path');

module.exports = {
  entry: './assets/main.js',
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'assets'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};