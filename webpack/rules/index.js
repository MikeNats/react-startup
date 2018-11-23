import path from 'path';
import paths from '../configs/paths';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isProd = process.env.NODE_ENV !== 'production';

export default [
  { // JavaScript ES6 with Babel loader 
    test: /\.(js|jsx)$/, 
    exclude: /node_modules/,
    loader: ['babel-loader'],
  },
  // Typescript compilation
  { test: /\.tsx?$/, 
    loader: "ts-loader" 
  },
  { 
    enforce: "pre", test: /\.js$/, 
    loader: "source-map-loader" 
  },
  {// JavaScript linting
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader','eslint-loader']
  },
  { // CSS with postCSS via loaders & extracted to file via mini CSS extract plugin
    test: /\.(sa|sc|c)ss$/,
    use: [
      { loader: isProd ? 'style-loader' : MiniCssExtractPlugin.loader},
      {
        loader: 'css-loader',
        options: {
          importLoaders: 3,
          sourceMap: isProd
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isProd,
          config: {
            ctx: { mode: isProd ? 'production' : 'development' },
            path: paths.postcssPath
          }
        }
      },
      { loader: 'resolve-url-loader' },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          includePaths: []
        }
      }
    ]
  },    
  {// Font file loader rules
    test: /\.(eot|svg|ttf|TTF|woff|woff2)$/,
    include: [new RegExp(`${paths.sourcePath}`)],
    exclude: [new RegExp(`img`), new RegExp(`image`)],
    use: {
      loader: "url-loader",
      options: {
        limit: 1,
        outputPath: "",
        pathPublic: `${paths.distName}`
      }
    }
  },
  {// Image file loader rules
    test: /\.(gif|jpg|jpe?g|svg|png)$/,
    include: [new RegExp(`${paths.sourcePath}`)],
    exclude: [new RegExp(`font`)],
    use: {
      loader: "url-loader",
      options: {
          limit: 1,
          outputPath: "",
          pathPublic: `${paths.distName}`
      }
    }
  }
]
