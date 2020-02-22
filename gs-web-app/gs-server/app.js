const express = require('express');

const applicationSettingsService = require('./src/services/settings/appSettingsService');

const app = express();

applicationSettingsService.setApplicationSettings(app, express);

module.exports = app;
