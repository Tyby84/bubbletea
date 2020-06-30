const path = require("path")

module.exports = {
    outputDir: path.resolve(__dirname, "docs"),
    publicPath: '/bubbletea'
  }
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }