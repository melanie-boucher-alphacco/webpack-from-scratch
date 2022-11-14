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
		],
	},
};
