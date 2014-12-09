Template.compose.events({
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
        Session.set('messageSent', true);
    },
    'click .sendMoreEmail': function (event) {
        'use strict';
        Session.set('messageSent', false);
        Session.keys = {};
        console.log("send");
    }
});

Template.compose.helpers({
    'message_to_email_options': function () {
        return {
            type: 'text',
            emptyText: "Your friend's email",
            //async: true,
            position: 'top',
            value: Session.get('message_to_email'),
            onsubmit: function (value) {
                Session.set('message_to_email', value);
            }
        };
    },
    'message_from_name_options': function () {
        return {
            type: 'text',
            emptyText: 'Your name',
            //async: true,
            position: 'top',
            value: Session.get('message_from_name'),
            onsubmit: function (value) {
                Session.set('message_from_name', value);
            }
        };
    },
    'message_to_name_options': function () {
        return {
            type: 'text',
            emptyText: "Your friend's name",
            //async: true,
            position: 'top',
            value: Session.get('message_to_name'),
            onsubmit: function (value) {
                Session.set('message_to_name', value);
            }
        };
    },
    'message_options': function () {
        return {
            type: 'textarea',
            emptyText: 'Your message',
            //async: true,
            position: 'right',
            value: Session.get('message'),
            onsubmit: function (value) {
                Session.set('message', value);
            }
        };
    },
    'message_from_email_options': function () {
        return {
            type: 'text',
            emptyText: 'Your email',
            //async: true,
            position: 'top',
            value: Session.get('message_from_email'),
            onsubmit: function (value) {
                Session.set('message_from_email', value);
            }
        };
    },
    'messageSent': function () {
        return Session.get('messageSent');
    }
});
