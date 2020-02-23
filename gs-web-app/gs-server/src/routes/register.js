const expressService = require('../services/expressService');
const routePaths = require('../consts/routePaths');
const {urlencodedParser} = require('../utils/urlencodedParser');

const authService = require('../services/auth/authService');

const {check} = require('express-validator');

const router = expressService.getRouter();

router.get(routePaths.COMMON_ROOT, async (req, res) => {
    res.send('Success');
});

router.post(routePaths.COMMON_ROOT, urlencodedParser, (req, res) => {
    authService.register(req, res);
});

module.exports = router;