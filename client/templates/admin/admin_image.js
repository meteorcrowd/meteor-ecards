Template.adminImage.helpers({
    image: function () {
        return ecardImages.find(this._id).fetch();
    }
});
