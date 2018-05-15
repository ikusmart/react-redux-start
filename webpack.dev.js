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
        contentBase: path.join(__dirname, publicPath),
        //hotmodulereplacementeplugin
        hot: true               
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
      },
      plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.DefinePlugin({
               'process.env.NODE_ENV': JSON.stringify('development')
             })
    ],
    
});