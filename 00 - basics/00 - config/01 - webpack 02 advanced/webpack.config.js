(function () {
    'use strict';

    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    const webpack = require('webpack');

    const root = `${__dirname}/src/`;
    const dist = `${root}/dist`;

    module.exports = {
        entry: {
            app: `${root}/js/app.js`,
            contact: `${root}/js/contact.js`
        },
        output: {
            path: dist,
            filename: '[name].min.js'
        },
        module: {
            rules: [{
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                }
            ]
        },
        devServer: {
            contentBase: dist,
            stats: 'errors-only',
            compress: true,
            open: true,
            hot: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${root}/index.html`,
                excludeChunks: ['contact'],
                hash: true
            }),
            new HtmlWebpackPlugin({
                template: `${root}/contact.html`,
                filename: 'contact.html',
                excludeChunks: ['app'],
                hash: true
            }),
            new ExtractTextPlugin({
                filename: 'style.min.css',
                disable: true,
                allChunks: true
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    }
})();