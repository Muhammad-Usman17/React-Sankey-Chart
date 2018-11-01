const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: './src/SankeyChart/SankeyChart.js',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [new ExtractTextPlugin('[name].css'), new ManifestPlugin()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
            'less-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use:
            'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
        }),
      },
    ],
  },
}
