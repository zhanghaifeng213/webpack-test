const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// webpack plugin可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	entry: {
		main: './src/index.js',
		// sub: './src/index.js'
	},
	devServer: {
		contentBase: "./dist",
		open: true,
		port: 8080,
		proxy: {
			"/api": "http://localhost:3000"
		}
	},
	module: {
		rules: [
		{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 2048
				}
			}
		},
		{
			test: /\.scss$/,
			use: ['style-loader', {
				loader: 'css-loader',
				options: {
					importLoaders: 2,
					// modules: true
				}
			}, 'sass-loader', 'postcss-loader']
		},
		{
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		},
	]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new CleanWebpackPlugin(['dist'])
	],
	output: {
		// publicPath: "http:cdn.com",
		filename: '[name]_[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/"
	}
}