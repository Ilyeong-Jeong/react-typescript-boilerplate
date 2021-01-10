const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: './src/main.tsx',

  output: {                                          
    path         : path.join(__dirname, '/dist'),
    filename     : "[name]_[hash].js",
    chunkFilename: "[name]_[hash].js"
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  module: {                                          
    rules: [

      {
        test   : /\.(js|jsx)$/,                       
        exclude: /node_module/,              
        use    : {
          loader: 'babel-loader'               
        }
      },

      {
        test: /\.css$/,
        use : [
          'style-loader',
          "css-loader",
          "postcss-loader"
        ]
      }, 
      
      {
        test   : /\.scss$/,
        exclude: /node_module/, 
        use    : [
          'style-loader',
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },      
   
      {
        test   : /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use    : [
          {
            loader: 'ts-loader',
          },
        ],
      },

      {
        test  : /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit   : 8192,
              fallback: 'file-loader',
              name    : '[path][name].[ext]?v=[hash]'
            }
          }
        ]
      },

      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }

    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]

}