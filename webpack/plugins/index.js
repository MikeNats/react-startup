import cleanWepackPlugin from './CleanWepackPlugin';
import copyWebpackPlugin from './CopyWebpackPlugin';
import htmlWebpackPlugin from './HtmlWebpackPlugin';
import miniCssExtractPlugin from './MiniCssExtractPlugin';
import OptimizeCSSAssetsPlugin from './OptimizeCSSAssetsPlugin';
import TerserPlugin from './TerserPlugin';
import SassLintPlugin from './SassLintPlugin';
import TSLintPlugin from './TSLintPlugin';
import HotModuleReplacementPlugin from './HotModuleReplacementPlugin';

export const commonPlugins = [
  copyWebpackPlugin(),
  htmlWebpackPlugin(),
  miniCssExtractPlugin(),
  cleanWepackPlugin(),
  SassLintPlugin(),
  TSLintPlugin(),
]

export const devPlugins = [
  HotModuleReplacementPlugin()
]

export const productionPlugins = [
  TerserPlugin(),
  OptimizeCSSAssetsPlugin()
]