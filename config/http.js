/**
* HTTP Server Settings
* (sails.config.http)
*
* Configuration for the underlying HTTP server in Sails.
* Only applies to HTTP requests (not WebSockets)
*
* For more information on configuration, check out:
* http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
*/

var webpack = require('webpack');
var config = require('../webpack.config.dev.js');

var compiler = webpack(config);


module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Express middleware to use for every Sails request. To add custom          *
  * middleware to the mix, add a function to the middleware config object and *
  * add its key to the "order" array. The $custom key is reserved for         *
  * backwards-compatibility with Sails v0.9.x apps that use the               *
  * `customMiddleware` config option.                                         *
  *                                                                           *
  ****************************************************************************/

  middleware: {
    webpackDev: require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: '/dist/'
    }),
    webpackHot: require('webpack-hot-middleware')(compiler),
    order: [
      'webpackDev',
      'webpackHot',
      'router'
    ]
  },

  /***************************************************************************
  *                                                                          *
  * The number of seconds to cache flat files on disk being served by        *
  * Express static middleware (by default, these files are in `.tmp/public`) *
  *                                                                          *
  * The HTTP static cache is only active in a 'production' environment,      *
  * since that's the only time Express will cache flat-files.                *
  *                                                                          *
  ***************************************************************************/

  // cache: 31557600000
};
