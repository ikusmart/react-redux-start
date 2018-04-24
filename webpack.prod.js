const webpack = require("webpack");
const path = require("path");
const publicPath = './dist/build/';
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.js');
module.exports = merge(common, {
    mode:  "production",
    devtool: "none",
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
    ]
});