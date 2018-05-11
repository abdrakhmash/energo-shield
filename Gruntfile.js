module.exports = function (grunt) {
    
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-csscomb");
    grunt.loadNpmTasks('grunt-autoprefixer');
    
    
    grunt.initConfig({
        
        less: {
            style: {
                files: {
                    "css/style.css": ["less/style.less"]
                }
            }
        },
        csscomb:  {
            style: {
                expand: true,
                src: ["less/style.less", "style.css"]
            }
        },
        autoprefixer: {
            options: {
              browsers: ['last 2 versions', 'ie 11', 'ie 10', 'ie 9']
            },
            dist: {
                src: 'css/style.css'
            },
        },
        watch: {
            css: {
                files: ['less/style.less', 'css/*.css'],
                tasks: ['less', 'autoprefixer'],
                options: {
                    livereload: true,
                    files: ['css/*.css']
                }
            }
        },
        
    });
};