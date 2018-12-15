const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    //entry-point -> output -> loaders

    //will start looking for dependencies
    entry: './src/js/index.js',
    //where to save or bundle file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]

};