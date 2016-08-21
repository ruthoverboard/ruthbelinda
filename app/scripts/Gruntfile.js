/**
 * Created by ruth on 20/08/16.
 */

grunt.initConfig({

  aws: grunt.file.readJSON( 'aws-keys.json' ),

  aws_s3: {
  options: {
    accessKeyId: '<%= aws.AWSAccessKeyId %>',
      secretAccessKey: '<%= aws.AWSSecretKey %>'
  },
  dist: {
    options: {
      bucket: 'ruthbelinda'
    },
    files: [
      {
        expand: true,
        cwd: 'dist/404.html',
        src: [ '**' ],
        dest: '/'
      }
    ]
  }
}

});

grunt.registerTask( 'deploy', 'aws_s3:dist' );
