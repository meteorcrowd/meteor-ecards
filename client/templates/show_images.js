Template.showImages.helpers({
    images: function () {
        'use strict';
        var images = ecardImages.find().fetch();
        return images;
    }
});

