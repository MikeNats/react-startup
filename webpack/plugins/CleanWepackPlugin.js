/**
 * A webpack plugin to remove/clean your build folder(s) before building
 * Docs: https://github.com/johnagan/clean-webpack-plugin
 */

import path from 'path';
import paths from '../configs/paths';
import CleanWebpackPlugIn from 'clean-webpack-plugin';

const pathsToClean = [paths.distName];
const config = { 
  root: path.resolve('./'),
  verbose: true, 
  beforeEmit: false 
}

export default () =>
  new CleanWebpackPlugIn(pathsToClean, config)