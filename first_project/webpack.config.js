const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js",
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css|.styl$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "stylus-loader",
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    // from: path.resolve(__dirname, "src", "assets", "images"),
                    from: path.resolve(__dirname, "src/assets/images"),
                    to: "assets/images",
                },
            ],
        }),
    ],
}
