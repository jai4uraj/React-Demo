// Karma configuration
// Generated on Tue May 30 2017 17:57:36 GMT+0530 (India Standard Time)
//npm install -g karma-browserify karma-jasmine karma-chrome-launcher browserify watchify

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


      plugins: [
          'karma-browserify',
          'karma-jasmine',
          'karma-chrome-launcher'
      ],

      // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      /*First include source files here*/
        'src/FizzBuzz.js',
      /*Then include spec files here*/
        'test/FizzBuzzSpec.js'
    ],

      loader: ['babel-loader'],

      include: [
          'src',
          'test'
      ],

      exclude: ['node_modules'],

    // list of files to exclude
    /*exclude: [
    ],
*/

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    /*preprocessors: {
    },
*/

      preprocessors: {
          './**/*.js': ['browserify']
      },
      browserify: {
          debug: true,
          configure: function browserify(bundle) {
              bundle.once('prebundle', function prebundle() {
                  bundle.transform('babelify', {presets: ['es2015', 'react']});
              });
          }
      },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_DEBUG,
      logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}