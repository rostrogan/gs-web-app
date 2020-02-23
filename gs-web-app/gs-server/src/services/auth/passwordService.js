const mailService = require('../mailService');
const User = require('../../models/user');

const recover = async (req, res) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({email});

        if (!user) return res.status(401).json({message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

        user.generatePasswordReset();

        user.save()
            .then(user => {
                let link = 'http://' + req.headers.host + '/api/auth/reset/' + user.resetPasswordToken;

                const text = `Hi ${user?.name} \n 
                    Please click on the following link ${link} to reset your password. \n\n 
                    If you did not request this, please ignore this email and your password will remain unchanged.\n`;

                mailService.sendMail(user?.email, 'Password change request', text);
            })
            .catch(err => res.status(500).json({message: err.message}));
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const reset = async (req, res) => {
    try {
        const {token} = req.params;

        const user = await User.findOne({resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()}});

        if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

        res.render('reset', {user});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const resetPassword = async (req, res) => {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user) => {
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

            user.password = req?.body?.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.isVerified = true;

            user.save((err) => {
                if (err) return res.status(500).json({message: err.message});

                const text = `Hi ${user.username} \n 
                    This is a confirmation that the password for your account ${user.email} has just been changed.\n`;

                mailService.sendMail(user.email, 'Your password has been changed', text);
            });
        });
};

module.exports = {
    recover,
    reset,
    resetPassword
};