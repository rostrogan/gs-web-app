const cors = require('cors');

const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            //callback(new Error('Not allowed by CORS'))
            callback(null, true);
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
