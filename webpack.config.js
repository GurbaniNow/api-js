const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		filename: "index.js",
		path: __dirname,
		library: "GurbaniNow",
		libraryTarget: "umd",
	},
	module: {
		rules: [{
			test: /\.js$/,
			loaders: [ "babel-loader" ]
		}]
	}
}