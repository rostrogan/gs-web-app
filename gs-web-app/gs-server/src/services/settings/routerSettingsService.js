const routePaths = require('../../consts/routePaths');
const usersRoute = require('../../routes/users');

const useRoutesOptions = (app) => {
    app.use(routePaths.ROUTE_USERS, usersRoute);
};

module.exports = {
    useRoutesOptions
};
