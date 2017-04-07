const config = require('../../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')

const compiler = webpack(config)

const webpackMiddleware = [
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  }),
  webpackHotMiddleware(compiler, {
    log: console.log
  })
];

module.exports = webpackMiddleware
