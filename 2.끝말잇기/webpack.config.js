const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry:{
        app: './client',
    },
    module:{
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'], //browserslist
                        },
                        debug: true,
                    }],
                     '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ]
            }
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug : true}),
        new RefreshWebpackPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
      },
};