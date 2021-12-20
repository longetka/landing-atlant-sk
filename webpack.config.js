const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: "development",
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				],
			},
			{
				test: /\.pug$/i,
				loader: "pug-loader",
			},
			{
				test: /\.(png|jpg|jpeg|gif)/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/images/[name].[ext]'
						}
					}
				]
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ 
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new HtmlWebpackPlugin({
			title: 'Компания "АТЛАНТ-СК"',
			filename: 'index.html',
			template: './src/templates/index.pug'
		})
	],
	devServer: {
		hot: true,
		static: false,
	},
};