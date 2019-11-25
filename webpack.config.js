var path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const HOST = 'localhost'
const PORT = 8080;

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        port: 9000,
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: true,
        host: '127.0.0.1',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};