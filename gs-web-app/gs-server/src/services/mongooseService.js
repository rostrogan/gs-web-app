const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../utils/config');
const errorService = require('./errorService');

const databaseUrl = config.databaseUrl;
const mongooseOptions = {useNewUrlParser: true};

const connect = () => mongoose.connect(databaseUrl, mongooseOptions);

const disconnect = () => mongoose.disconnect();

const findDocuments = async (schema, options = {}) => {
    connect();

    const result = await schema.find(options, (err, docs) => {
        disconnect();

        errorService.logError(err);
    });

    return result;
};

const findOneDocument = async (schema, options = {}) => {
    connect();

    const result = await schema.findOne(options, (err, docs) => {
        // disconnect();

        errorService.logError(err);
    });

    return result;
};

const createModel = (name, schema) => mongoose.model(name, schema);

module.exports = {
    connect,
    createModel,
    disconnect,
    findDocuments,
    findOneDocument,
    Schema
};
