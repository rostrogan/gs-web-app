const express = require('express');
const groupsService = require('../services/groupsService');

const router = express.Router();

router.get('/', async (request, response) => {
    const groups = await groupsService.getAllGroups();

    response.send(groups);
});

module.exports = router;

