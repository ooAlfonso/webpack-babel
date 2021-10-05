const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  
  module: { 
      rules: [ 
          { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: "babel-loader" 
            } 
        ] 
    } 
};