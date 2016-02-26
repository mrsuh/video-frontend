module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //copy all to dist
        copy: {
            main: {
                files: [
                    {
                        cwd: 'web',
                        src: '**/*',
                        dest: 'dist/',
                        expand: true
                    }
                ]
            }
        },

        clean: {
            //remove old build
            before: {
                src: ['dist']
            },
            //cleanup
            after: {
                src: [
                    'dist/node_modules',
                    'dist/js',
                    'dist/config',
                    'dist/style',
                    'dist/package.json'
                ]
            }
        },

        //revision files
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            libs: {
                src: 'dist/libs.min.js'
            },
            app: {
                src: 'dist/app.min.js'
            },
            css: {
                src: 'dist/main.min.css'
            }
        },

        //start task generator
        useminPrepare: {
            html: 'dist/index.html'
        },
        //start generated tasks
        usemin: {
            root: 'dist',
            html: ['dist/index.html']
        }
    });

    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', [
        'clean:before',
        'copy',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'filerev',
        'usemin',
        'clean:after'
    ]);
};