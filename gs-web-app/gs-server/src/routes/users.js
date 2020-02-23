const expressService = require('../services/expressService');
const routePaths = require('../consts/routePaths');
const usersService = require('../services/usersService');

const router = expressService.getRouter();

router.get(routePaths.ROUTE_USERS, async (req, res) => {
    const users = await usersService.getAllUsers();

    res.send(users);
});

module.exports = router;

