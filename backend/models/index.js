const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Message = require('./Message');
const Conversation = require('./Conversation');

const models = {
    User,
    Message,
    Conversation,
};

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;