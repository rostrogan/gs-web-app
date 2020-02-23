const sgMail = require('@sendgrid/mail');
const {sendgridApiKey} = require('../utils/config');

const {emailFromAddress} = require('../utils/config');

const sendMail = (to, subject, text, from = emailFromAddress) => {
    sgMail.setApiKey(sendgridApiKey);

    const mailOptions = {
        to,
        from,
        subject,
        text
    };

    sgMail.send(mailOptions, false, (err, res) => {
        console.log('Sendgrid result:', res);
    });
};
module.exports = {
    sendMail
};