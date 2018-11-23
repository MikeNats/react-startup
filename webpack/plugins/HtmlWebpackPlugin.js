/**
 * Plugin that simplifies creation of HTML files to serve your bundles
 * Docs: https://github.com/jantimon/html-webpack-plugin
 */

import paths from '../configs/paths';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    template: `${paths.sourcePath}/index.html`,
    minify: true,
    inject: true, 
    hash: true,
};

export default () =>
    new HtmlWebpackPlugin(config);


