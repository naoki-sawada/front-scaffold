module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist/js',
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: ["node_modules"], 
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
	},
      },
    ],
  },
  plugins: [
  ],
};
