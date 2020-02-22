const routePaths = require('../../consts/routePaths');
const usersRoute = require('../../routes/users');

const useRoutesOptions = (app) => {
    app.use('/api/users', usersRoute);
};

module.exports = {
    useRoutesOptions
};
