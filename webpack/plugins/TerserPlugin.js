/**
 * This plugin is used to minify your JavaScript.
 * Docs: https://github.com/webpack-contrib/terser-webpack-plugin
 */

import TerserPlugin from 'terser-webpack-plugin';

const config = {
  cache: true,
  parallel: true,
  terserOptions: {
  parse: {
      ecma: 8
  },
  warnings: false,
  compress: {
    ecma: 5,
    warnings: false,
    sequences: false,
    dead_code: false,
    comparisons: false,
    conditionals: false,
    booleans: false,
    unused: false,
    if_return: false,
    join_vars: false,
    drop_console: false
  },
  mangle: {
      safari10: false
  },
  output: {
      ecma: 5,
      comments: false,
      beautify: false,
      ascii_only: true
  },
  toplevel: false,
  nameCache: null,
  ie8: false,
  keep_classnames: undefined,
  keep_fnames: false,
  safari10: false
  },
  sourceMap: false
};

export default () => new TerserPlugin(config);