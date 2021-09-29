const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '/client/index.js'),
  devServer: {
    static: '/build',
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '/api': 'http://localhost: 3000'
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use : {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
};