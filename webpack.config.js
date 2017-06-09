const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DotenvPlugin = require('webpack-dotenv-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: {
		home: './src/game.js',
	},
	output: {
		path: __dirname + '/public/js/',
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!postcss-loader!sass-loader"
				}),
			},
			{
		        test: /\.js$/,
		        exclude: /(node_modules|bower_components)/,
		        use: {
			        loader: 'babel-loader',
			        options: {
				        presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("../css/style.css"),
	    new DotenvPlugin({
			sample: './.env.default',
			path: './.env'
	    }),
	    new BrowserSyncPlugin({
	        host: 'localhost',
	        port: 8080,
	        proxy: 'http://localhost:8080/',
	        files: ['./views/*.handlebars']
		}),
	],
	watch: true,
	devtool: 'source-map'
};