const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  let port;

  if (!isProduction) {
    port = Number(process.env.FRONTEND_PORT);

    if (isNaN(port)) {
      throw new Error(`'FRONTEND_PORT' environment variable is missing`);
    }
  }

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build', isProduction ? 'prod' : 'dev'),
      filename: isProduction ? '[name].[contenthash].immutable.js' : 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'react': path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom')
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        favicon: './src/assets/liaison-favicon-20191111.immutable.png',
        inject: false
      }),
      new webpack.EnvironmentPlugin(['BACKEND_URL'])
    ],
    ...(!isProduction && {
      devtool: 'eval-cheap-module-source-map',
      devServer: {
        contentBase: './build/dev',
        port,
        historyApiFallback: true
      }
    })
  };
};
