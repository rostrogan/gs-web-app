const express = require('express');
const groupsService = require('../services/groupsService');

const router = express.Router();

router.get('/', async (request, response) => {
    const groups = await groupsService.getAllGroups();

    response.send(groups);
});

router.post('/add', async (request, response) => {
    const {groupData} = request.body || {};

    console.log(groupData);

    await groupsService.addNewGroup(groupData);
});

module.exports = router;

