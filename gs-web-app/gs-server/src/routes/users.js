const expressService = require('../services/expressService');
const routePaths = require('../consts/routePaths');
const usersService = require('../services/usersService');

const express = require('express');

const router = express.Router();


router.get('/', async (req, res) => {
    const users = await usersService.getAllUsers();

    res.send(users);
});

router.post('/register', async (req, res) => {
    const newUser = await usersService.registerUser(req.body);

    console.log(newUser);
});

module.exports = router;

