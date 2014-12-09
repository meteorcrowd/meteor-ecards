Template.adminImagesList.helpers({
    images: function () {
        images = Images.find().fetch();
        return images;
    }
});
Template.adminImagesList.events({
    'click .delete': function (event) {
        Images.remove(this._id);    
    }
});