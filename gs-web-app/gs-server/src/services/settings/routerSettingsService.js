const routePaths = require('../../consts/routePaths');
const applicantsRoute = require('../../routes/applicants');

const useRoutesOptions = (app) => {
    app.use(routePaths.ROUTE_APPLICANTS, applicantsRoute);
};

module.exports = {
    useRoutesOptions
};
