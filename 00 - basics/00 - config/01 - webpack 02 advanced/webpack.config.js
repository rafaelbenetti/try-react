(function () {
    'use strict';

    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    const webpack = require('webpack');

    const root = `${__dirname}/src/`;
    const dist = `${root}/dist`;

    const isProd = process.env.NODE_ENV === 'production';
    const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
    const cssProd = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
        publicPath: dist
    });

    const cssConfig = isProd ? cssProd : cssDev;

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
                    use: cssConfig
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [
                        'file-loader?name=images/[name].[ext]',
                        'image-webpack-loader'
                    ]
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
                disable: !isProd,
                allChunks: true
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    }
})();