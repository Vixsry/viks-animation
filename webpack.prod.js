const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'viks.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ViksAnimation',
    libraryTarget: 'umd',
    clean: true // Membersihkan folder dist sebelum build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6+ ke ES5
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Ekstrak CSS ke file terpisah
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // Minifikasi JavaScript
        terserOptions: {
          compress: {
            drop_console: true, // Menghapus console.log untuk produksi
          },
        },
      }),
      new CssMinimizerPlugin(), // Minifikasi CSS
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'viks.min.css', // Output file CSS
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss'], // Resolve otomatis file dengan ekstensi ini
  },
};
