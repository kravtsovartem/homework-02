const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
	module: {
		rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      }
		]
	}
})