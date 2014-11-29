var Images = [
        {id: 1, path: "images/Erika.jpg"},
        {id: 2, path: "images/Earth.jpg"},
        {id: 3, path: "images/webmaker-logo.png"}
    ];

Template.images.helpers({
    'images': function () {
        'use strict';
        return Images;
    },
    'selectedClass': function () {
        'use strict';
        var imageId = this.id,
            selectedImage = Session.get('selectedImage');
        if (imageId === selectedImage) {
            return "selected";
        }
    }
});
Template.images.events({
    'click .image': function (event) {
        'use strict';
        console.log(this.id);
        Session.set('selectedImageId', this.id);
        Session.set('selectedImagePath', this.path);
    }
});
Template.compose.events({
    'keyup, change form': function (event) {
        'use strict';
       Session.set(event.target.name, event.target.value);
    }
});
Template.preview.helpers({
    'image': function () {
        'use strict';
        return Session.get('selectedImagePath');
    },
    'message_to': function () {
        'use strict';
        return Session.get('message_to');
    },
    'to_email': function () {
        'use strict';
        return Session.get('message_to_email');
    },
    'message_from': function () {
        'use strict';
        return Session.get('message_from');
    },
    'message': function () {
        'use strict';
        return Session.get('message');
    }
});
