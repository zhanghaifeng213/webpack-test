const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack")

// webpack plugin可以在webpack运行到某个时刻的时候，帮你做一些事情

	// presets: [['@babel/preset-env',{
	// 	useBuiltIns: 'usage',
	// 	"targets": {
	// 		"edge": "17",
	// 		"firefox": "60",
	// 		"chrome": "67",
	// 		"safari": "11.1"
	// 	},
	// }]]


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
		},
		hot: true,
		hotOnly: true
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
			test: /\.css$/,
			use: ['style-loader', 'css-loader', 'postcss-loader']
		},
		{
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
			}
		}
	]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		// publicPath: "http:cdn.com",
		filename: '[name]_[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/"
	}
}