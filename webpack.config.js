const path = require('path');
const WebpackQRCodePlugin = require('webpack-dev-server-qr-code');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [{
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/
        }]
    },
    mode: 'development',
    devtool:'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        host: '0.0.0.0'
    },
    plugins: [
        new WebpackQRCodePlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'assets/admin.html'
        })
    ]
};