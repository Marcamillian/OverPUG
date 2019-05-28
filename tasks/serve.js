import { watch } from 'gulp';

import Browser from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import { config as webpackConfig } from './webpack';
import { build_all } from './build';

const browser = Browser.create();
const bundler = webpack(webpackConfig);

export function serve(){

  let config = {
    server: 'dist',
    open: false,
    middleware:[
      webpackDevMiddleware( bundler, {})
    ],
    single: "index.html"
  }

  browser.init( config );

  watch(['./src/**/*.html','./src/**/*.scss','./src/**/*.js' ], build_all );

}