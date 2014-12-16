grunt.loadNpmTasks('grunt-contrib-qunit');
gruntConfig.qunit = {
    src: ['index.html']
};
grunt.registerTask('test', 'qunit:src');
grunt.registerTask('travis', ['lint', 'test']);
grunt.loadNpmTasks('grunt-qunit-junit');
gruntConfig.qunit_junit = {
    options: {
        dest: 'output/testresults'
    }
};
grunt.registerTask('test', ['qunit_junit', 'qunit:src']);