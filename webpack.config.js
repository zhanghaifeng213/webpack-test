const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// webpack plugin可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
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
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}