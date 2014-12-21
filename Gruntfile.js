module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          livereload: true,
          port: 3000
          //base: ''
        }
      }
    },
    qunit: {
      files: ['index.html'],
      all: {
        options: {
          urls: [
          'http://localhost:<%= connect.server.options.port %>/index.html'
          ]
        }
      }
    }
  });
  grunt.registerTask('default', ['connect:server', 'qunit']);
  grunt.registerTask('travis', ['connect:server', 'qunit']);
}
