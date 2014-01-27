module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Join the files
    includereplace: {
      dist: {
        src: 'src/index.html',
        dest: 'dist/index.html'
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-include-replace');

  // Tasks
  grunt.registerTask('default', ['includereplace']);

};