const path = require('path')
const webpack = require('webpack')
const WebpackQRCodePlugin = require('webpack-dev-server-qr-code')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: '0.0.0.0',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            sourceMap: true,
        })],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackQRCodePlugin()
    ]
};