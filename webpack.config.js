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
      }
    ]
  }
}

