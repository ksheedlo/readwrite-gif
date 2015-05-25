'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({});

  grunt.config('browserify', {
    dist: {
      src: ['./index.js'],
      dest: 'dist/GIF.js'
    }
  });

  grunt.config('clean', {
    build: ['dist/']
  });

  grunt.config('uglify', {
    dist: {
      options: {
        compress: true,
        mangle: true,
        beautify: {
          beautify: false,
          max_line_len: 500
        },
        preserveComments: 'some'
      },
      src: ['dist/GIF.js'],
      dest: 'dist/GIF.min.js'
    }
  });

  grunt.registerTask('default', [
    'clean',
    'browserify',
    'uglify'
  ]);
};
