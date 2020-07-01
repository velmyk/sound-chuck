const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    if (!isProduction) {
        dotenv.config();
    }

    const config = {
        entry: {
            app: path.join(__dirname, 'src', 'index.tsx'),
        },
        output: {
            path: path.resolve(__dirname, 'target'),
            chunkFilename: '[name].bundle.js',
            filename: '[name].js',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpg|gif|woff(2)?|ttf|eot|svg)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                outputPath: 'images',
                                limit: 8192,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
            }),
            new webpack.DefinePlugin({
                'process.env.BASE_API_URL': JSON.stringify(process.env.BASE_API_URL),
            }),
        ],

        devServer: {
            port: 9001,
            stats: {
                colors: true,
                chunks: false,
            },
            historyApiFallback: true,
            hot: true,
        },
    };

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        );
    }

    return config;
};
