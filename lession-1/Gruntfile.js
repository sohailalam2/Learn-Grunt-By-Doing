module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Configuration for concatinating files goes here.
        concat: {
            dist: {
                src: [
                    'js/*.js'
                ],
                dest: 'build/js/production.js',
            }
        },

        uglify: {
            build: {
                src: 'build/js/production.js',
                dest: 'build/js/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'image/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'build/image'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/compiled.css': 'css/*.scss'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'build/css/production.min.css': ['css/bootstrap.css', 'css/compiled.css']
                }
            },
            add_banner: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'build/css/production.min.css': ['build/css/production.min.css']
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'cssmin', 'watch']);

};