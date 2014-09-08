var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

gulp.task('default', function () {
  gulp.src([
      'src/prefix.js',
      'src/GifReader.js',
      'src/LZWEncoder.js',
      'src/NeuQuant.js',
      'src/GIFEncoder.js',
      'src/suffix.js'
    ])
    .pipe(concat('GIF.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify({
      output: {
        max_line_len: 500
      }
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/'));
});

