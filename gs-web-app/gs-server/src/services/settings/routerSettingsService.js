const routePaths = require('../../consts/routePaths');
const usersRoute = require('../../routes/users');
const registerRoute = require('../../routes/register');

const useRoutesOptions = (app) => {
    app.use(routePaths.ROUTE_USERS, usersRoute);
    app.use(routePaths.ROUTE_REGISTER, registerRoute);
};

module.exports = {
    useRoutesOptions
};
