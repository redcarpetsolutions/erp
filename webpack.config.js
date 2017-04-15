const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: __dirname + "/app",
    entry: "./app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }, module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader")
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ExtractTextPlugin("styles.css"),
        new CopyWebpackPlugin([{ from: 'views', to: 'views' }])
    ]
}