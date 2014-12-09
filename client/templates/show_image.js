Template.showImage.helpers({
    selectedClass: function () {
        'use strict';
        var imageId = this._id,
            selectedImage = Session.get('selectedImageId');
        if (imageId === selectedImage) {
            return "selected";
        }
    }
});
Template.showImage.events({
    'click .image': function (event) {
        'use strict';
        Session.set('selectedImageId', this._id);
        Session.set('selectedImageName', this.name);
    }
});
