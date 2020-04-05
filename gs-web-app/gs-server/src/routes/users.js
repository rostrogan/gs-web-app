const expressService = require('../services/expressService');
const routePaths = require('../consts/routePaths');
const usersService = require('../services/usersService');

const express = require('express');

const router = express.Router();


router.get('/', async (req, response) => {
    const users = await usersService.getAllUsers();

    response.send(users);
});

router.post('/user', async (request, response) => {
    const {body} = request;
    const {userId} = body;

    const user = await usersService.getUserById(userId);

    response.send(user);
});

router.post('/register', async (request, response) => {
    const {body} = request;

    const newUser = await usersService.registerUser(body);

    console.log(newUser);
});

router.post('/auth', async (request, response) => {
    const {body} = request;

    const result = await usersService.auth(body);

    response.send(result);
});

module.exports = router;

