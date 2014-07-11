module.exports = function(grunt)
{ 
  // project configuration.
  grunt.initConfig(
  {
    pkg: grunt.file.readJSON('package.json'),
    
    jasmine : {
      // Your source files.
      src : [
        'src/*.js'
      ],
      options : {
        // Third party libraries like jQuery & generally anything loaded before source, specs, and helpers.
        vendor : [
          
        ],

        // Non-source, non-spec helper files.
        // In the default runner these are loaded after vendor files
        helpers : [
          'spec/helpers/*.js'
        ],

        // Your Jasmine specs.
        specs : [
          'spec/*.js'
        ],

        junit : {
          // Path to output JUnit xml
          path: 'output/testresults'
        }
      }
    }  
  });
  
  // https://www.npmjs.org/package/grunt-contrib-jasmine
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', [ 'jasmine' ]);
};
