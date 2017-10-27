(function () {
    'use strict';

    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const ExtractTextPlugin = require("extract-text-webpack-plugin");

    const root = `${__dirname}/src/`;
    const dist = `${root}/dist`;

    module.exports = {
        entry: `${root}/js/app.js`,
        output: {
            path: dist,
            filename: 'script.min.js'
        },
        module: {
            rules: [{
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                        publicPath: dist
                    })
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
            compress: true,
            stats: 'errors-only',
            open: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${root}/index.html`,
                hash: true
            }),
            new ExtractTextPlugin({
                filename: 'style.min.css',
                disable: false,
                allChunks: true
            })
        ]
    }
})();