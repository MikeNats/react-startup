/**
 * A Webpack plugin to optimize \ minimize CSS assets.
 * Docs: https://github.com/NMFR/optimize-css-assets-webpack-plugin
 */

import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default () => 
  new OptimizeCSSAssetsPlugin({})