Template.adminImage.helpers({
    image: function () {
        console.log(this._id);
        return Images.find(this._id).fetch();
    }
});