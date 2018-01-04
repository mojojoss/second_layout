const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, './main'),
	entry: {
		app: './main.js'
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js',
		publicPath: '/public'
	},
	devServer: {
		contentBase: path.resolve(__dirname, './main')
	},

	module: {
		rules: [
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
				//					use: [
				//                    'style-loader',
				//                    'css-loader'
				//                ]
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
            },

			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
								}
					}		
        			]
				},


			]

	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery'
		}),
		new ExtractTextPlugin('styles.css')
	]
};
