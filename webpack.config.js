const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/app.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'public')
  },

  devServer: {
    port: 3000
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      process: "process/browser"
    },
    fallback: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      "fs": false,
      "path": require.resolve("path-browserify")

    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
