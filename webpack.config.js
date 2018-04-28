const webpack = require("webpack");
const path = require("path");
const publicPath = './dist/build/';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
        context: path.join(__dirname, "src"),
        entry: "./index.js",

        output: {
            path: path.join(__dirname, publicPath),
            filename: 'bundle.js'
        },

        resolve: {
            extensions: ['.js', '.jsx']
        },


        module: {
          rules: [
              {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
              },
               {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
               },
               {
                test: /\.(ttf|eot|svg|woff|png)$/,
                loader: "file-loader",
                options: {
                  name: "[path][name].[ext]?[hash]"
                }
              }
            ]
          },
           plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new ExtractTextPlugin("[name].css"),
            new HtmlWebpackPlugin({
                title: "2 - Webpack",
                hash: true,
                template: path.resolve(__dirname, "./src/index.html")
              })
         ],
};