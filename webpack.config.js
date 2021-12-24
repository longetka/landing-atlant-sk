let mode = 'development';
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
};
console.log(mode + ' mode');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: mode,
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		assetModuleFilename: "assets/[hash][ext][query]",
		clean: true
	},
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	},
	plugins: [
		// new CopyPlugin({
		// 	patterns: [
		// 		{
		// 			from: path.join(__dirname, 'src/images'),
		// 			to: path.join(__dirname, 'dist/images')
		// 		}
		// 	]
		// }),
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