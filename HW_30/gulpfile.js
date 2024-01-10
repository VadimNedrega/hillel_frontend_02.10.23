// ********** Strict mode **********
"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const watch = require("gulp-watch");
const minifyHTML = require("gulp-minify-html");

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8088,
        reloadOnChange: true
    });
    done();
}

function watchFiles() {
    watch("images/*", gulp.series(images));
    watch("*.html", minifyHtml);
    gulp.watch("./**/*.*").on("change", browserSync.reload);
}

function images() {
    return gulp.src("images/*")
        .pipe(newer("dist/images"))
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"))
        .pipe(browserSync.stream());
}

function minifyHtml() {
    return gulp.src("*.html")
        .pipe(minifyHTML())
        .pipe(gulp.dest("dist/html"))
        .pipe(browserSync.stream());
}

function copyHtml() {
    return gulp.src("*.html")
        .pipe(gulp.dest("dist/html"));
}

gulp.task("default", gulp.series(copyHtml, sync, gulp.parallel(watchFiles, images)));