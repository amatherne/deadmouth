var gulp = require("gulp"),
    sass = require('gulp-sass')(require('sass')),
    replace = require("gulp-replace"),
    autoprefixer = require("gulp-autoprefixer"),
    rename = require("gulp-rename"),
    stripCssComments = require('gulp-strip-css-comments'),
    headerComment = require('gulp-header-comment'),
    moment = require('moment'),
    concat = require('gulp-concat'),
    streamqueue = require('streamqueue'),
    minify = require('gulp-minify'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    child = require('child_process'),
    gutil = require('gulp-util'),
    jekyll = require('gulp-jekyll'),
    browserSync = require('browser-sync').create(),
    siteRoot = '_site';



var mainJS = [
      // './assets/theme.js',
      './assets/vendor.js',
      './assets/main.js',
    ],
    allCSS = [
      "assets/normalize.css",
      "./assets/main.scss",
    ];

// Sass Settings
gulp.task("sass", function () {
  return (

    streamqueue({ objectMode: true },
      gulp.src(allCSS),
    )

      // create sourcemap
      .pipe(sourcemaps.init())

      // choose output style
      // .pipe(sass({ outputStyle: "nested" }).on("error", sass.logError))
      // .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
     
      // to add vendoer prefixes
      .pipe(autoprefixer())
    
      // concat files
      .pipe(concat('main.min.css'))

      // to get rid of the double quotes inside the single quotes
      .pipe(replace('"{{', "{{"))
      .pipe(replace('}}"', "}}"))
   
      // remove comments
      .pipe(stripCssComments())
     
      // write sourcemaps
      .pipe(sourcemaps.write('.',{includeContent: true}))

      // determines our output directory
      .pipe(gulp.dest("./assets/"))

  );
});
// Javascript Settings
gulp.task('scripts', function() {
  return (
    streamqueue({ objectMode: true },
      gulp.src(mainJS),
    ) 
      // create sourcemap
      .pipe(sourcemaps.init())

      // concat files
      .pipe(concat('main.min.js'))

      // minimizes and shortens all javascript
      .pipe(uglify())

      // write sourcemaps
      .pipe(sourcemaps.write('.',{includeContent: true}))

      // determines our output directory
      .pipe(gulp.dest('./assets/'))
  );
});

gulp.task("default", function () {

  gulp.watch(allCSS, gulp.series(["sass"]));
  gulp.watch(mainJS, gulp.series(['scripts'])); 

  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    // '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

});