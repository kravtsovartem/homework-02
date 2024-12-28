const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.config.common.js'), {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		open: false,
		static: './public',
	},
	module: {
		rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
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
      },
		]
	}
})