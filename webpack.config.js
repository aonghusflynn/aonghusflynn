const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new  HtmlWebpackPlugin({
      title: 'Aonghus Flynn Web Developer',
      myPageHeader: 'I make stuff on the web',
      template: './app/index.html'
    }),
  ],
};

const productionConfig = () => commonConfig;

const developmetnConfig = () => {
  const config = {
    devServer: {

      stats: 'errors-only',

      host: process.env.HOST,
      port: process.env.PORT,
    },
  };

  return Object.assign(
      {},
      commonConfig,
      config
    );
};

module.exports = (env) => {
  return commonConfig;
  if(env === "production"){
    return productionConfig();
  }
  return developmetnConfig();
};