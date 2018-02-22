

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './client/src/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    // publicPath: '/',
    filename: 'bundle.js',
  },
  watch: true,
  devServer: {
    contentBase: './dist',
  },
};
