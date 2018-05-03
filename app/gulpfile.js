"use strict";

const gulp = require("gulp");
const rimraf = require("rimraf");
const scss = require("gulp-scss");
const debug = require("gulp-debug");
const watch = require("gulp-watch");
const rigger = require("gulp-rigger");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
const cssmin = require("gulp-minify-css");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync"),
    reload = browserSync.reload;

const path = {
    build: {
        html: 'public/',
        js: 'public/js/',
        css: 'public/',
        img: 'public/img/',
        fonts: 'public/fonts/',
    },
    src: {
        html: 'component/**/*.html',
        js: 'component/main.js',
        style: 'component/style.scss',
        img: 'assets/img/*.*',
        fonts: 'assets/fonts/**/*.*',
    },
    watch: {
        html: 'component/index.html',
        js: 'component/**/*.js',
        style: 'component/**/*.scss',
        img: 'assets/img/*.*',
        fonts: 'assets/fonts/**/*.*',
    },
    clean: './public',
};

const config = {
    server: {
        baseDir: './public',
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: 'Frontend--Sponge',
};

gulp.task('html:build', () => {

    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
});

gulp.task('js:build', () => {

    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream: true }));
});

gulp.task('style:build', () => {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }))
});

gulp.task('image:build', () => {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', () => {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build',
    gulp.parallel(
        'html:build',
        'js:build',
        'style:build',
        'fonts:build',
        'image:build'));

gulp.task("watch", () => {

    gulp.watch([path.watch.html], gulp.series('html:build'));
    gulp.watch([path.watch.style], gulp.parallel("style:build"));
    gulp.watch([path.watch.js], gulp.parallel("js:build"));
    gulp.watch([path.watch.img], gulp.parallel("image:build"));
    gulp.watch([path.watch.fonts], gulp.parallel("fonts:build"));

});

gulp.task('server', () => {
    browserSync(config);
});

gulp.task('clean', (cb) => {
    rimraf(path.clean, cb);
});

gulp.task('default', gulp.series('build', gulp.parallel('server', 'watch')));