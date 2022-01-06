let mode = 'development';
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
};
console.log(mode + ' mode');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: mode,
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		assetModuleFilename: "assets/[name].[ext]",
		clean: true
	},
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	},
	plugins: [
		new FaviconsWebpackPlugin('./src/images/logotype.png'),
		new MiniCssExtractPlugin({ 
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css"
		}),
		new HtmlWebpackPlugin({
			title: 'Компания "АТЛАНТ-СК"',
			template: './src/templates/index.pug'
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader"
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					(mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.pug$/i,
				loader: "pug-loader",
				exclude: /(node_modules|bower_components)/,
			},
			
		],
	},
};