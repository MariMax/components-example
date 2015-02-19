'use strict';
var path = require('path');

module.exports = {
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
                test: /\.css$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 2 versions'
                ]
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            //load as data-urls
            { test: /\.png$/, loader: 'url-loader?limit=20000' },
            { test: /\.woff$/, loader: 'url-loader?limit=20000&minetype=application/font-woff' }
        ]
    }
};
