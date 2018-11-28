const { config } = require('./wdio.conf.js');

config.capabilities = [{
  browserName: 'chrome',
}];

config.services = ['chrome'];

exports.config = config;
