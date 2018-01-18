const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, './main'),
	entry: {
		app: './main.js'
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js',
		publicPath: ''
	},
	devServer: {
		contentBase: path.resolve(__dirname, './')
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},

			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
                    }
                ]
            },
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
            },

			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: 'file-loader'
			},
			{
				test: /\.pug$/,
				use: ['raw-loader', 'pug-html-loader']
			},




			]

	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery'
		}),
		new HtmlWebpackPlugin({
			template:'../index.pug'
		}),
		new ExtractTextPlugin('styles.css')
	]
};
