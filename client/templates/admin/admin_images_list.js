Template.adminImagesList.helpers({
    images: function () {
        images = ecardImages.find().fetch();
        return images;
    }
});
Template.adminImagesList.events({
    'click .delete': function (event) {
        ecardImages.remove(this._id);
    }
});
