var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(config.port, 'localhost', function(err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('listening on ' + config.port);
});
