var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/SankeyChart.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}