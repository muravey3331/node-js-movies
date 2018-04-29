const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: ['babel-polyfill', './client/main.js'],
    output: {
        path: path.resolve(__dirname, '/public/build/'),
        filename: 'bundle.js',
        publicPath: "build/",
    },
    devServer: {
        overlay: true,
        contentBase: "./public",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    // fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : "eval-sourcemap"; // replace false with "source-map" for source map on production
    return conf;
};