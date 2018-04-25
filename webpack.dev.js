const webpack = require("webpack");
const path = require("path");
const publicPath = './dist/build/';
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
module.exports = merge(common, {
    mode:  "development",
    devtool: "eval",
    
    devServer: {
        port: 3000,
        host: 'localhost',
        //Be possible go back pressing the "back" button at chrome
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        //hotmodulereplacementeplugin
        hot: true
      },
      plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.DefinePlugin({
               'process.env.NODE_ENV': JSON.stringify('development')
             })
    ],
    
});