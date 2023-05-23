require('babel-register')

const path = require('path');

// load project config.
const webpackConfig = require('../webpack.config.js');

const config = {
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
  resolve:{
    alias:webpackConfig.resolve.alias
  }
};

module.exports = config;
