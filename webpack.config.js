const webpack = require("webpack");
const path = require("path");
const publicPath = './dist/build/';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = function(){

    const config = {
        context: path.join(__dirname, "src"),
        entry: "./",
        mode:  "development",//isProduction ? "production" : "development",
        devtool: "source-map",//isProduction ? "none" : "source-map",

        output: {
            path: path.join(__dirname, publicPath),
            filename: 'bundle.js'
        },

        resolve: {
            extensions: ['.js', '.jsx']
        },

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
             //new webpack.NoErrorsPlugin(),
             //new webpack.HotModuleReplacementPlugin(),
            new ExtractTextPlugin("[name].css"),
            new HtmlWebpackPlugin({
                title: "2 - Webpack",
                hash: true,
                template: path.resolve(__dirname, "./src/index.html")
              })
         ],
    }

    return config;
};