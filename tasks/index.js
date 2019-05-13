import { series, parallel } from 'gulp';

import { scripts } from './webpack';
import { build_all } from './build';
import { serve as serve_task } from './serve';


export const bundle = series( scripts );
export const build = parallel( build_all );
export const serve = series( serve_task );
