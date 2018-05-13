const path = require('path')


module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: ['node_modules'],
        user: [{ loader: 'babel-laoder'}],
      },
      {
        test: /\/s(a|c)ss$/,
        user: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
      }
    ]
  }
}

