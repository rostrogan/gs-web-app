const expressService = require('../services/expressService');
const routePaths = require('../consts/routePaths');
const facultiesService = require('../services/facultiesService');

const router = expressService.getRouter();

router.get(routePaths.COMMON_ROOT, async (request, response) => {
    const faculties = await facultiesService.getAllFaculties();

    response.send(faculties);
});

module.exports = router;
