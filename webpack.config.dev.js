var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/Router.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.min.js',
    publicPath: 'http://localhost:8000/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    })
  ],
  resolve: {
    extensions: ['','.jsx', '.js']
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/},
      {test: /\.jsx$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['react-hot', 'style', 'css', 'sass']},
      {test: /\.css$/, loaders: ['react-hot', 'style', 'css']},
      //fonts
      {test: /\.svg/, loader: 'url?limit=100000'},
      {test: /\.eot/, loader: 'url?limit=100000'},
      {test: /\.ttf/, loader: 'url?limit=100000'},
      {test: /\.woff/, loader: 'url?limit=100000'},
      {test: /\.woff2/, loader: 'url?limit=100000'},
      //images
      {test: /\.jpg$/, loader: 'url?limit=10000&mimetype=image/jpg'},
      {test: /\.png$/, loader: 'url?limit=10000&mimetype=image/png'},
      {test: /\.svg$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.ico$/, loader: 'url?limit=10000&mimetype=image/ico'}
    ]
  }
};