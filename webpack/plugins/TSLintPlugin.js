/**
 * Typescript-lint plugin 
 * Docs: https://github.com/jrparish/tslint-webpack-plugin
 */

import TSLintPlugin from 'tslint-webpack-plugin';

export default () =>
  new TSLintPlugin({
      files: ['./src/**/*.ts']
  })
  