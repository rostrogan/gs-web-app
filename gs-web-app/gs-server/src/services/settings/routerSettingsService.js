const routePaths = require('../../consts/routePaths');
const usersRoute = require('../../routes/users');
const groupsRoute = require('../../routes/groups');
const facultiesRoute = require('../../routes/faculties');
const teachersRoute = require('../../routes/teachers');

const useRoutesOptions = (app) => {
    app.use(routePaths.ROUTE_USERS, usersRoute);
    app.use(routePaths.ROUTE_GROUPS, groupsRoute);
    app.use(routePaths.ROUTE_FACULTIES, facultiesRoute);
    app.use(routePaths.ROUTE_TEACHERS, teachersRoute);
};

module.exports = {
    useRoutesOptions
};
