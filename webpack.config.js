module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./dist",
        filename: "index.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: "babel",
                query: {
                    presets: ["es2015"]
                },
                exclude: "./node_modules/"
            },
            {
                test: /.vue$/,
                loader: "vue"
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                loader: "file?name=/images/[name].[ext]?[hash]"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    }
}