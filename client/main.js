FS.debug = true;
var imageStore = new FS.Store.FileSystem('images', {
    path: "~home/code/Meteor/meteor-ecards/public/images"
});
imageCollection = new FS.Collection('images', {
    stores: [imageStore]
});

imageCollection.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    download: function () {
        return true;
    }
});

if (Meteor.isClient) {
    Template.uploadForm.events({
        'click input[type="submit"]': function (event, template) {
//            var file = $('#file').get(0).files[0];
//            var fileObj = imageCollection.insert(file);
//            console.log('Upload result: ', fileObj);
            FS.Utility.eachFile(event, function(file) {
                imageCollection.insert(file, function (err, fileObj) {
                    console.log("Inserted new image");
                    //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
                });
            });
        }
    });
}
