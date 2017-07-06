var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
    return gulp.src('./*.css')
        .pipe(postcss([require('precss'),
                        require('autoprefixer')(),
                        require('cssnext'),
                        require('postcss-alias')(),
                        require('postcss-circle')(),
                        require('postcss-center')(),   
                        require('postcss-position')(),
                        // require('cssnano')
                        ]))
        .pipe(gulp.dest('build/'));
});