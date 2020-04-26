const teachersService = require('../services/teachersService');

const express = require('express');

const router = express.Router();

router.get('/', async (request, response) => {
    response.send(
        await teachersService.getAllTeachers(),
    );
});

router.post('/register', async (request, response) => {
    const {body} = request;

    response.send(
        await teachersService.registerTeacher(body),
    );
});

module.exports = router;
