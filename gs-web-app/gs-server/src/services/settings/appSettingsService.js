const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const corsSettingsService = require('./corsSettingsService');
const routerSettingsService = require('./routerSettingsService');

const setApplicationSettings = (app, express) => {
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    corsSettingsService.useCorsOptions(app);
    routerSettingsService.useRoutesOptions(app);
};

module.exports = {
    setApplicationSettings
};
