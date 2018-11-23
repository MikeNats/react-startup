import path from 'path';
import webpackDevConfig from './webpack.dev';

export default {
  ...webpackDevConfig,
  devServer: {
    compress: true,
    hot: true,
    inline: true,
    port: 9000,
    publicPath: '/',
    contentBase: path.resolve(__dirname)
  }
};