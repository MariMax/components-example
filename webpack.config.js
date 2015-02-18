'use strict';
var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: [ path.join(__dirname, 'blocks') ]
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 2 versions',
                    'sass'
                ]
            },
            { test: /\.tpl/, loader: 'html-loader' },
            //load as data-urls
            { test: /\.png$/, loader: 'url-loader?limit=20000' },
            { test: /\.woff$/, loader: 'url-loader?limit=20000&minetype=application/font-woff' }
        ]
    }
};
