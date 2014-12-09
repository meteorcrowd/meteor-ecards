Template.showImages.helpers({
    images: function () {
        'use strict';
        var images = ecardImages.find().fetch();
        return images;
    },
    selectedClass: function () {
        'use strict';
        var imageId = this._id,
            selectedImage = Session.get('selectedImageId');
        if (imageId === selectedImage) {
            return "selected";
        }
    }
});
Template.showImages.events({
    'click .image': function (event) {
        'use strict';
        Session.set('selectedImageId', this._id);
        Session.set('selectedImagePath', this.path);
    }
});
