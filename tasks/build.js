import { parallel, src, dest } from 'gulp';
import sass from 'gulp-sass';


function build_markup(){
  return src('src/html/**/*.html')
  .pipe( dest( 'dist') );
}

function build_styles(){
  return src('src/styles/**/*.scss')
  .pipe( sass().on('error', sass.logError ) )
  .pipe( dest('dist/css') )
}

let build_all = parallel( build_markup, build_styles );

module.exports = { build_all, build_markup, build_styles }