const path = require('path')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      title: 'React Project Template',
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `./public/fonts/Heebo`,
          to: `./public/fonts/Heebo`,
        },
        {
          from: `./public/fonts/Heebo-Black`,
          to: `./public/fonts/Heebo-Black`,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name =./public/fonts/Heebo/[name].[ext]',
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
