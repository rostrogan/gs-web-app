const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../utils/config');
const errorService = require('./errorService');

const databaseUrl = config.databaseUrl;
const mongooseOptions = { useUnifiedTopology: true };

const connect = () => mongoose.connect(databaseUrl, mongooseOptions);

const disconnect = () => mongoose.disconnect();

const findDocuments = async (schema, options = {}) => {
    const result = await schema.find(options, (err, docs) => {
        errorService.logError(err);
    });

    return result;
};

const findOneDocument = async (schema, options = {}) => {
    const result = await schema.findOne(options, (err, docs) => {
        errorService.logError(err);
    });

    return result;
};

const createDocument = async (data, callback) => {
    const result = await data.save((err) => {
        errorService.logError(err);
    });

    return result;
};

const createModel = (name, schema) => mongoose.model(name, schema);

module.exports = {
    connect,
    createDocument,
    createModel,
    disconnect,
    findDocuments,
    findOneDocument,
    Schema,
};
