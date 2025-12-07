const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts'); // Import the plugin

const jsEntryPoints = glob.sync('./src/**/*.js').reduce((acc, file) => {
  const name = path.basename(file, path.extname(file));
  acc[name] = path.resolve(__dirname, file);
  return acc;
}, {});

const cssEntryPoints = glob.sync('./src/**/*.css').reduce((acc, file) => {
  const name = path.basename(file, path.extname(file));
  acc[name] = { import: path.resolve(__dirname, file), runtime: false };
  return acc;
}, {});

const entryPoints = { ...jsEntryPoints, ...cssEntryPoints };

module.exports = {
  context: path.resolve(__dirname), // Explicitly set context to project root
  entry: entryPoints,
  output: {
    filename: '[name].js',
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
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(), // Add the plugin here
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};