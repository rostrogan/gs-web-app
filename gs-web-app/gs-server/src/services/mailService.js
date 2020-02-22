const sgMail = require('@sendgrid/mail');
const {sendgridApiKey} = require('../utils/config');

const {emailFromAddress} = require('../utils/config');

sgMail.setApiKey(sendgridApiKey);

const sendMail = (to, subject, text, from = emailFromAddress) => {
    const mailOptions = {
        to,
        from,
        subject,
        text
    };

    sgMail.send(mailOptions);
};
module.exports = {
    sendMail
};