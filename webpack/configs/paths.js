
import path from 'path';

const sourceName = 'src';
const distName = 'dist';
const jsEntrytName = 'index.tsx';
const jsOutputName = 'app.js';
const cssOutputName = 'styles.css';
const postcssPath = './webpack/configs/postcss.config.js';

export default {
  sourceName: sourceName,
  distName: distName,
  jsEntrytName: jsEntrytName,
  jsOutputName: jsOutputName,
  cssOutputName: cssOutputName, 
  sourcePath: path.resolve(__dirname, `../../${sourceName}`),
  distPath: path.resolve(__dirname, `../../${distName}`),
  jsEntrytPath: `${path.resolve(__dirname, `../../${sourceName}`)}/${jsEntrytName}`,
  postcssPath: postcssPath
}