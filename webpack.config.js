const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/app.js'
    },
    module : {
        rules : [ {
            test: /.js/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HTMLWebpackPlugin( {
            filename: 'index.html',
            title: 'Welcome to my page!',
            mainDiv: 'welcome-message',
            template: 'src/index.html'

        })
    ]
};