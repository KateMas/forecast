var path = require('path');

module.exports = {
    entry: './app/App.js',
    output: {
        path: path.resolve('./public/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets:['es2015', 'react']
                }
            }
        ]
    }
}