module.exports = {
  context: `${__dirname}/client/`,
  entry: './index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.jsx', '.js', '.json'],
  },
};
