import path from 'path';
import merge from "webpack-merge";
import webPackCommon from './webpack.common';
import { devPlugins } from './plugins';

const webPackDev = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: devPlugins
}

export default merge(webPackDev, webPackCommon)
