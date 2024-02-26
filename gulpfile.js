const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src(['styles/*.scss', 'styles/*.scss.liquid'])
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(function(path) {
            // This checks if the file being processed is a .scss.liquid file
            if (path.extname === '.liquid') {
                // Assuming you want Shopify to process Liquid in CSS
                // If you don't have Shopify specific Liquid code, consider outputting as .css
                path.basename += '.css';
                // If no Liquid processing is needed, uncomment the next line and comment out `path.basename += '.css';`
                // path.extname = '.css';
            } else {
                path.extname = '.css';
            }
        }))
        .pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
    gulp.watch(['styles/**/*.scss', 'styles/**/*.scss.liquid'], gulp.series('sass'));
});
