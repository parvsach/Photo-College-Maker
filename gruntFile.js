module.exports = function (grunt) {
    
    grunt.initConfig({
        
        concat: {
            js: {
                files: {
                    'Dest/bundle.js': ['Scripts/jquery-ui.js',
                    'Scripts/owl.carousel.js'
					]
                }
            }
        },
        uglify: {
            bundle: {
                files: { 'Dest/bundle.min.js': 'Dest/bundle.js' }
            }
        },
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'Dest/styles.min.css': [
                        'Styles/bootstrap.css',
                        'Styles/styles.css',
                        'Styles/owl.carousel.css',
                        'Styles/owl.theme.css',
                        'Styles/thumbnail-slider.css',
                        'Styles/jquery-ui.css']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['concat:js', 'uglify:bundle', 'cssmin']);

};