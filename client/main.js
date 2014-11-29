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
            selectedImage = Session.get('selectedImageId');
        if (imageId === selectedImage) {
            return "selected";
        }
    }
});
Template.images.events({
    'click .image': function (event) {
        'use strict';
        Session.set('selectedImageId', this.id);
        Session.set('selectedImagePath', this.path);
    }
});
Template.compose.events({
    'keyup, change form': function (event) {
        'use strict';
        Session.set(event.target.name, event.target.value);
    },
    'click .sendEmail': function (event) {
        'use strict';
        var fromName = Session.get('message_from_name'),
            fromEmail = Session.get('message_from_email'),
            toName = Session.get('message_to_name'),
            toEmail = Session.get('message_to_email'),
            subject = 'eCard from ' + fromName,
            image = Session.get('selectedImagePath'),
            message = Session.get('message');
        var htmlContext = {
            message_to_name: toName,
            message_from_name: fromName,
            message: message,
            image: image
        };
        var messageHtml = Blaze.toHTMLWithData(Template.htmlEmail, htmlContext);
        Meteor.call('sendEmail',
            toEmail,
            fromEmail,        
            subject,
            messageHtml);
    }
});

Template.compose.helpers({
    'message_to_email_options': function () {
        return {
            type: 'textarea',
            //async: true,
            position: 'top',
            value: Session.get('message_to_email'),
            onsubmit: function (value) {
                Session.set('message_to_email', value);
            }
        };
    }
});
