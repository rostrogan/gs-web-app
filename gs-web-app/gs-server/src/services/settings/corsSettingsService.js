const cors = require('cors');

const config = require('../../utils/config');

const whitelist = config.corsWhitelist;
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    enablePreflight: true
};

const useCorsOptions = (app) => {
    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));
};

module.exports = {
    useCorsOptions
};
