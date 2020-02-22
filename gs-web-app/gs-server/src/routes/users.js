const expressService = require('../services/expressService');
const routePaths = require('../consts/routePaths');
const usersService = require('../services/usersService');

const express = require('express');

const router = express.Router();


router.get('/', async (req, res) => {
    const users = await usersService.getAllUsers();

    res.send(users);
});

module.exports = router;

