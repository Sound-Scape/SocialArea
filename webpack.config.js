module.exports = {
  context: `${__dirname}/client`,
  entry: './App.jsx',
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
    ],
  },
  resolve: {
    extensions: ['.wasm', '.jsx', '.js', '.json'],
  },
};
