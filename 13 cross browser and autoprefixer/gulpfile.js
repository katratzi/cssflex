var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

// name of function is styles
// then we take our source file, pipe it to our autoprefixer
// then pipe the output to build
// had to change anonymouse method to this (done) thingy
gulp.task("styles", (done) => {
    gulp
        .src("css/styles.css")
        .pipe(autoprefixer())
        .pipe(gulp.dest("build"));
    done();
});

// second part...create a task to watch for changes
// and when it notices one it will run the array
// of tasks...in our case just styles
// note in gulp4 need to use gulp.series
gulp.task('watch', function () {
    gulp.watch('css/styles.css', gulp.series('styles'))
});
