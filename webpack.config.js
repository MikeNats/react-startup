'use strict';

require('@babel/register');

const argv = process.argv.slice(2);
const webpackConfig = () => {
  if (argv.includes('--localserver')) {
    return require('./webpack/webpack.server.js');

  } else if (argv.includes('--build:dev')) {
    return require('./webpack/webpack.dev.js');

  } else if (argv.includes('--build:prod')) {
    return require('./webpack/webpack.prod.js');
  }
}

module.exports = webpackConfig();
