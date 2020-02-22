const expressService = require('../services/expressService');
const routePaths = require('../consts/routePaths');

const router = expressService.getRouter();

router.get(routePaths.COMMON_ROOT, async (req, res) => {
    console.log('FACULTIES');
});

module.exports = router;