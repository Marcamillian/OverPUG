import { parallel, src, dest } from 'gulp';

function build_markup(){
  return src('src/html/**/*.html')
  .pipe( dest( 'dist') );
}

function build_styles(){
  return src('src/styles/**/*.css')
  .pipe( dest('dist/css') )
}

let build_all = parallel( build_markup, build_styles );

module.exports = { build_all, build_markup, build_styles }