'use strict';
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: [
            path.join(__dirname, 'blocks')
        ]
    },
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 2 versions, safari 5, ie 8, ie 9, opera 12.1, ios 6, android 4',
                    'sass?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, './blocks'))
                ]
            },
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            },
            { test: /\.html$/, loader: 'html-loader' },
            //load as data-urls
            { test: /\.png$/, loader: 'url-loader?limit=10000' },
            { test: /\.gif$/, loader: 'url-loader?limit=10000' },
            { test: /\.woff$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.svg$/, loader: 'url-loader?limit=10000' },
            //load as files
            { test: /\.ttf$/, loader: 'file-loader' },
            { test: /\.eot$/, loader: 'file-loader' }
        ]
    }
};
