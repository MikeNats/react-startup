import path from 'path';
import webPackCommon from './webpack.common';

export default {
  ...webPackCommon,
    mode: 'production',
    stats: {
      colors: false,
      hash: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true,
      children: true,
    },
    optimization: {
        minimize: true,
        minimizer: productionPlugins 
    }
}