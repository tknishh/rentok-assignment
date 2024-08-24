const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Conversation extends Model {}

Conversation.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Conversation',
    }
);

module.exports = Conversation;