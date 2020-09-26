const path = require('path');
const WebpackQRCodePlugin = require('webpack-dev-server-qr-code');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            sourceMap: true,
        })],
    },
    plugins: [
        new WebpackQRCodePlugin(),
        new HtmlWebpackPlugin({
            title: 'Schoolar Tool',
            filename: 'index.html',
            template: 'public/index.html'
        })
    ]
};