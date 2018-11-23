import path from 'path';
import configs from './configs/paths';
import { commonPlugins } from './plugins';
import rules from './rules';

export default {
  entry: { main: [configs.jsEntrytPath ]},
  output: {
    path: configs.distPath,
    filename: configs.jsOutputName,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules
  },
  plugins: commonPlugins
}