const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',


  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      },
    ]
  },
  
  resolve: {
    extensions: ['.ts', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },

 /* devServer: {
    historyApiFallback: true,
	proxy: [{
            context: [
                '/',
     			'/api',
                '/management',
                '/swagger-ui.html',
                '/v2/api-docs',
                '/h2-console',
                '/auth'
            ],
            target: 'http://127.0.0.1:8080',
            secure: false
        },{
            context: [
                '/websocket'
            ],
            target: 'ws://127.0.0.1:8080',
            ws: true
        }]
  }*/
};
