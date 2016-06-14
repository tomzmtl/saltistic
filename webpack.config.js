/* eslint-disable */

module.exports = {

  entry: ['./resources/js/app.js'],
  output: {
    filename: 'public/js/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
}
