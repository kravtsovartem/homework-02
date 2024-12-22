const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.config.common.js'), {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
			new TerserPlugin()
		],
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					chunks: 'all',
					name: 'vendor',
					test: /node_modules/
				}
			}
		},
	},
  plugins: [
    new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
			reportFilename: 'report.html'
		})
  ]
})