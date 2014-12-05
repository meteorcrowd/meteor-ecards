var base_dir = process.env.PWD;
console.log(base_dir);
var upload_dir = base_dir + '/public/images';
var temp_directory = base_dir + '/public/images/tmp';
Meteor.startup(function () {
    UploadServer.init({
        tmpDir: temp_directory,
        uploadDir: upload_dir,
        getDirectory: function(file, formData) {
            return formData.contentType;
        },
        finished: function(file, folder, formFields) {
            console.log('Write to database: ' + folder + '/' + file);
        }
    })
});
