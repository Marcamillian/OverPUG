import webpack from 'webpack';

let config = {
  mode: 'development',
  entry: './src/react/main.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
    rules:[{
      test: /\.m??js$/,
      exclude: /(mode_modules)/,
      use: {
        loader: 'babel-loader',
        options:{
          presets: [ '@babel/preset-env','@babel/preset-react']
        }
      }
    }]
  },
  devtool:"source-map"
}

function scripts(){
  return new Promise(resolve => webpack(config, (err, stats)=>{
    if( err ) console.log('Webpack', err);

    console.log( stats.toString() );
    resolve();
  }))
}

module.exports = { config, scripts }