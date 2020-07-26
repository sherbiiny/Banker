const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  },
}