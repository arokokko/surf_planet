const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require("gulp-sass");
const concat = require('gulp-concat');
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const del = require('del');
const browsersync = require("browser-sync");

const dist = "./dist";

gulp.task("copy-html", () => {
    return gulp.src("./src/*.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist + '/js'))
                .pipe(browsersync.stream());
});

gulp.task('css', () => {
  return gulp.src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/animate.css/animate.min.css'
  ])
      .pipe(concat('assets/_libs.scss'))
      .pipe(gulp.dest('./src/scss'))
      .pipe(browsersync.stream());
}); 

gulp.task("build-sass", () => {
    return gulp.src("./src/scss/**/*.scss")
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(dist + '/css'))
                .pipe(browsersync.stream());
});

gulp.task("copy-assets", () => {
    gulp.src("./src/icons/**/*.*")
        .pipe(gulp.dest(dist + "/icons"));

    gulp.src("src/fonts/**/*")
        .pipe(gulp.dest(dist + "/fonts"))

    return gulp.src("./src/img/**/*.*")
                .pipe(gulp.dest(dist + "/img"))
                .pipe(browsersync.stream());
});

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });

    gulp.watch("./src/*.html", gulp.parallel("copy-html"));
    gulp.watch("./src/icons/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/img/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/fonts/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("clean", () => {
  return del(['dist/*']);
});

gulp.task("build", gulp.parallel("copy-html", "css", "copy-assets", "build-sass", "build-js"));

gulp.task("prod", gulp.series("clean", () => {
    
    gulp.src("./src/*.html")
        .pipe(gulp.dest(dist));
    gulp.src("./src/img/**/*.*")
        .pipe(gulp.dest(dist + "/img"));
    gulp.src("./src/icons/**/*.*")
        .pipe(gulp.dest(dist + "/icons"));
    gulp.src("./src/fonts/**/*.*")
        .pipe(gulp.dest(dist + "/fonts"));

    gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: [['@babel/preset-env', {
                            debug: false,
                            corejs: 3,
                            useBuiltIns: "usage"
                        }]]
                      }
                    }
                  }
                ]
              }
        }))
        .pipe(gulp.dest(dist + '/js'));
    
    return gulp.src("./src/scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dist + '/css'));
}));

gulp.task("default", gulp.series("clean", gulp.parallel("watch", "build")));