const mailService = require('./mailService');
const User = require('../models/user');
const Token = require('../models/token');

const register = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email});

        if (user) return res.status(401).json({message: 'The email address you have entered is already associated with another account.'});

        const newUser = new User({...req.body, role: 0});
        const createdUser = await newUser.save();

        sendVerificationEmail(createdUser, req, res);
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if (!user) return res.status(401).json({msg: 'The email address ' + email + ' is not associated with any account. Double-check your email address and try again.'});

        if (!user.comparePassword(password)) return res.status(401).json({message: 'Invalid email or password'});

        if (!user.isVerified) return res.status(401).json({
            type: 'not-verified',
            message: 'Your account has not been verified.'
        });

        res.status(200).json({token: user.generateJWT(), user: user});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const verifyEmail = async (req, res) => {
    if (!req.params.token) return res.status(400).json({message: 'We were unable to find a user for this token.'});

    try {
        const token = await Token.findOne({token: req.params.token});

        if (!token) return res.status(400).json({message: 'We were unable to find a valid token. Your token my have expired.'});

        User.findOne({_id: token.userId}, (err, user) => {
            if (!user) return res.status(400).json({message: 'We were unable to find a user for this token.'});

            if (user.isVerified) return res.status(400).json({message: 'This user has already been verified.'});

            user.isVerified = true;
            user.save(function (err) {
                if (err) return res.status(500).json({message: err.message});

                res.status(200).send('The account has been verified. Please log in.');
            });
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const resendToken = async (req, res) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({email});

        if (!user) return res.status(401).json({message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

        if (user.isVerified) return res.status(400).json({message: 'This account has already been verified. Please log in.'});

        sendVerificationEmail(user, req, res);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const sendVerificationEmail = (user, req, res) => {
    const {name, email} = user;
    const verificationToken = user.generateVerificationToken();

    verificationToken.save((error) => {
        if (error) return res.status(500).json({message: error.message});

        const verificationLink = `http://${req.headers.host}/api/auth/verify/${verificationToken}`;

        const mailText = `Hi, ${name}, \n
        Click here to verify account: ${verificationLink}`;

        mailService.sendMail(email, 'Verification', mailText);
    });
};

module.exports = {
    login,
    register,
    resendToken,
    verifyEmail
};
