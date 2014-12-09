var base_dir = process.env.PWD;
var upload_dir = base_dir + '/public/images';
var temp_directory = base_dir + '/public/images/tmp';

Meteor.startup(function () {
    UploadServer.init({
        tmpDir: temp_directory,
        uploadDir: upload_dir
    });
});
