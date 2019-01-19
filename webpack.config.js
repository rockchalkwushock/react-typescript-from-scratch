const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // Tells webpack to execute in development mode.
  mode: 'development',
  // Tells webpack where to start building from.
  entry: resolve(__dirname, './src/index.tsx'),
  // Tells webpack where to output the build.
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
  },
  // Tells webpack-dev-server the configuration we
  // want it to run in.
  devServer: {
    hot: true,
    open: true,
    overlay: true,
    stats: 'errors-only',
  },
  // Tells webpack what files we want it to look at
  // and what we want done to those files.
  // In our case we want babel to be executed against
  // all of our js/jsx files to transpile them to ES5.
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'app/components': resolve(__dirname, 'src/components'),
    },
    extensions: ['*', '.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
  },
  plugins: [
    // Copies our index.html file directly to build output.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
