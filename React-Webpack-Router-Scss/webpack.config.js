const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    /*options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }*/
                }]
            },

        ]
    },
    devServer: {
    contentBase: path.join(__dirname, "dist"),
        // compress: true,
        //open: true,
    port: 9000
    }
};