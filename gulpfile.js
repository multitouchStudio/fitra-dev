const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src(['styles/*.scss', 'styles/*.scss.liquid']).pipe(sass().on('error', sass.logError)).pipe(rename(function(path){
        if (path.basename.endsWith('.scss')) {
            path.basename = path.basename.replace('.scss', '');
            path.extname = '.css.liquid';
        } else {
            path.extname = '.css';
        }
    })).pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
    gulp.watch(['styles/**/*.scss', 'styles/**/*.scss.liquid'], gulp.series('sass'));
});
