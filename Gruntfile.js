module.exports = function(grunt)
{ 
    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    // project configuration.
    grunt.initConfig(
    {
        pkg : grunt.file.readJSON('package.json'),

        files : {
            src    : 'src/**/*.js',
            spec   : 'spec/**/*.spec.js',
            helper : 'spec/helpers/**/*.helper.js',
        },

        jshint: {
            options: {
                laxcomma : true, 
                loopfunc : true,

                '-W032': true,  // https://jslinterrors.com/unnecessary-semicolon
            },
            src: [ '<%= files.spec %>', '<%= files.src %>' ],
        },

        jasmine : {
            // Your source files.
            src : [
                'src/**/*.js',
            ],
            options : {
                // Third party libraries like jQuery & generally anything loaded before source, specs, and helpers.
                vendor : [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
                    'lib/jasmine-jquery-fixtures.js',
                ],

                // Non-source, non-spec helper files.
                // In the default runner these are loaded after vendor files
                helpers : [
                    '<%= files.helper %>'
                ],

                // Your Jasmine specs.
                specs : [
                    '<%= files.spec %>'
                ],

                junit : {
                    // Path to output JUnit xml
                    path: 'output/testresults',
                },

                // The auto-generated specfile that phantomjs will use to run your tests.
                // Automatically deleted upon normal runs. Use the :build flag to generate a SpecRunner manually e.g. grunt jasmine:myTask:build
                outfile : 'index.html',

                // Prevents the auto-generated specfile used to run your tests from being automatically deleted.
                keepRunner : true
            }
        },

        watch: {
            scripts: {
                files: [
                    '<%= files.spec %>'   ,
                    '<%= files.src %>'    ,
                    '<%= files.helper %>' ,
                ],
                tasks: ['test'],
                options: {
                    spawn: false,
                },
            },
        }

    });

    // https://www.npmjs.com/package/grunt-contrib-jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // https://www.npmjs.com/package/grunt-contrib-jasmine
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // https://www.npmjs.com/package/grunt-contrib-watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 
    grunt.registerTask('test', ['jshint', 'jasmine']);
};
