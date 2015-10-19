var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/Router.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.min.js',
    publicPath: 'http://localhost:8000/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.src', '.json', '.js', '.jsx', '.html']
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['jsx', 'babel'], exclude: /node_modules/},
      {test: /\.jsx$/, loaders: ['jsx', 'babel'], exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
      {test: /\.css$/, loaders: ['style', 'css']},
      //fonts
      {test: /\.svg/, loader: 'url?limit=100000'},
      {test: /\.eot/, loader: 'url?limit=100000'},
      {test: /\.ttf/, loader: 'url?limit=100000'},
      {test: /\.woff/, loader: 'url?limit=100000'},
      {test: /\.woff2/, loader: 'url?limit=100000'},
      //images
      {test: /\.jpg/, loader: 'url?limit=10000&mimetype=image/jpg'},
      {test: /\.png/, loader: 'url?limit=10000&mimetype=image/png'},
      {test: /\.svg/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.ico/, loader: 'url?limit=10000&mimetype=image/ico'}
    ]
  }
};