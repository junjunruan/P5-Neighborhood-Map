module.exports = function(grunt) {
  grunt.initConfig({
    // Copy all the files from src to dist
    copy: {
      dist: {
        cwd: 'src/',
        expand: true,
        src: '**',
        dest: 'src-min/'
      }
    },
	// Inline CSS and JS
    inline: {
      dist: {
        options: {
            inlineTagAttributes: {
                js: 'data-inlined="true"',
                css: 'data-inlined="true"'
            },
            cssmin: true,
            uglify: true
        },
        src: 'src/index.html',
        dest: 'src-min/index.html'
      }
    },
    // Minify html files
    htmlmin: {
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      dist: {
          files: [
              {
                expand: true,     // Enable dynamic expansion.
                cwd: 'src-min/',      // Src matches are relative to this path.
                src: ['*.html'], // Actual pattern(s) to match.
                dest: 'src-min/',   // Destination path prefix.
               }
          ]
      }
    }
  });
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Default tasks.
  grunt.registerTask('default', ['copy', 'inline', 'htmlmin']);
};
