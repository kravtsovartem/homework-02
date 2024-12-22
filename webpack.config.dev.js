const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.config.common.js'), {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		open: false,
		static: './public',
	}
})