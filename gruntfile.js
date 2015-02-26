'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            styles: {
                files: [
                    'assets/styles/**/*.less',
                ],
                tasks: ['styles'],
            },
            main: {
                files: [
                    'assets/scripts/**/*.js',
                ],
                tasks: ['uglify:main', 'jshint',  'jscs',],
            },
            bower_components: {
                files: [
                    'bower_components/**/*'
                ],
                tasks: ['all'],
            },
            python: {
                files: [
                    'bikeanjo.py',
                ],
                tasks: ['flake8',],
            },
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                compress: true,
            },
            vendor: {
                files: {
                    'static/js/vendor.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js',
                    ],
                },
            },
            main: {
                files: {
                    'static/js/main.js': [
                        'assets/scripts/**/*.js',
                    ],
                },
            },
        },
        less: {
            options: {
                compress: true,
                sourceMap: true,
                outputSourceFiles: true,
            },
            app: {
                options: {
                    sourceMapFilename: 'main.css.map',
                },
                files: {
                    'static/css/main.css': 'assets/styles/*.less',
                },
            },
        },
        rename: {
            csssourcemap: {
                src: 'main.css.map',
                dest: 'static/css/',
            },
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: false, cwd: 'assets/fonts/', src: ['**'], dest: 'static/fonts/', filter: 'isFile',},
                    {expand: true, flatten: false, cwd: 'assets/imgs/', src: ['*'], dest: 'static/imgs/', filter: 'isFile',},
                ],
            },
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                globals: {
                    jQuery: true,
                },
                force: true,
            },
            all: [
                'assets/scripts/**/*.js',
            ],
        },
        jscs: {
            src: 'assets/scripts/**/*.js',
            options: {
                requireCurlyBraces: ['if', ],
                force: true,
                disallowMixedSpacesAndTabs: true,
            },
        },
        flake8: {
            options: {
                force: true,
                errorsOnly: true,
                maxLineLength: 250,
            },
            src: ['landing.py', ],
        },
        browserSync: {
            options: {
                watchTask: true, // < VERY important
            },
            app: {
                bsFiles: {
                    src : [
                        'static/css/*.css',
                        'static/js/*.js',
                        'templates/*.html',
                    ]
                },
            },
        },
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-rename');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-flake8');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('styles', ['less', 'rename',]);
    grunt.registerTask('all', ['uglify', 'jshint', 'jscs', 'flake8', 'styles', 'copy'])
    grunt.registerTask('default', ['all', 'browserSync', 'watch',]);
};
