/**
 * Copies individual files or entire directories to the build directory
 * Docs: https://github.com/webpack-contrib/copy-webpack-plugin 
 */

import CopyWebpackPlugin from 'copy-webpack-plugin';
import paths from '../configs/paths';

const foldersToCopyFrom = ['assets']
const config = foldersToCopyFrom.map(file => ({
  from: `${paths.sourcePath}/${file}`,
  to: `${paths.distPath}/${file}`
}));

export default () => 
  new CopyWebpackPlugin(config);  

