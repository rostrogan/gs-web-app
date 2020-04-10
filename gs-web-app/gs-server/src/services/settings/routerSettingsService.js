const routePaths = require('../../consts/routePaths');
const usersRoute = require('../../routes/users');
const groupsRoute = require('../../routes/groups');

const useRoutesOptions = (app) => {
    app.use(routePaths.ROUTE_USERS, usersRoute);
    app.use(routePaths.ROUTE_GROUPS, groupsRoute);
};

module.exports = {
    useRoutesOptions
};
