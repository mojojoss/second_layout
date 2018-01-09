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
		publicPath: '/second_layout/'
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
						loader:'html-loader'
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
				use: 'file-loader?name=[name].[ext]&outputPath=images/'
						}
					
        			,
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192
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
//		,
//		new HtmlWebpackPlugin({
//            template: '../index.html',
//			filename: 'index.html'
//        })
	]
};
