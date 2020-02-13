const mongooseService = require('../services/mongooseService');

const {Schema} = mongooseService;

const APPLICANT_SCHEMA = new Schema({
    name: {
        type: String,
        
    }
});
