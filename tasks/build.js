import { parallel, src, dest } from 'gulp';
import sass from 'gulp-sass';


function build_markup(){
  return src('src/html/**/*.html')
  .pipe( dest( 'dist') );
}

function build_styles(){
  return src('src/styles/**/main.scss')
  .pipe( sass().on('error', sass.logError ) )
  .pipe( dest('dist/css') )
}

function build_component_images(){
  return (src('src/images/components/**/*.png'))
  .pipe( dest('dist/img'))
}

let build_all = parallel( build_markup, build_styles, build_component_images );

module.exports = { build_all, build_markup, build_styles }