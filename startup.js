if (Meteor.isClient) {
    Meteor.startup(function () {
        'use strict';
        Uploader.finished = function (index, file) {
            ecardImages.insert({name: file.name});
        };
    });
}
