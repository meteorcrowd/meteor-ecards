if (Meteor.isClient) {
    Meteor.startup(function () {
        'use strict';
        Uploader.finished = function (index, file) {
            Images.insert({name: file.name});
        };
    });
}