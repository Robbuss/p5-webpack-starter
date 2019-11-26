var path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const HOST = 'localhost'
const PORT = 8080;
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
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
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};