var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015','stage-3']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // the order is important. it executes in reverse order !
          'css-loader' // this will load first !
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
  })],
  devServer: {
      historyApiFallback: true
  },
  externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'http://localhost:4000'
      })
  }
}
