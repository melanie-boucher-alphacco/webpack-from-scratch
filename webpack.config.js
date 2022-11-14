const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, // any file that ends with .js or .jsx
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader', // babel = loader that converts js files into older js files
				},
			},
			{
				test: /\.css$/, // any .css file
				use: ['style-loader', 'css-loader'], // loads from left to right
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
};
