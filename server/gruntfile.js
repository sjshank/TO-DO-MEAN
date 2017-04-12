module.exports = function(grunt) {
    grunt.initConfig({
        nodemon: {
            dev: {
                script: "./app/app.js"
            }
        },

        watch: {
            scripts: {
                files: ['./app/**/*.js'],
                tasks: ['nodemon']
            },
        }
    });

    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.task.registerTask("build", ["nodemon", "watch"]);
}