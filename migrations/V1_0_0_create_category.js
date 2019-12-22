/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require('uuid/v4');
module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('category', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: uuid(),
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.TEXT,
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        });
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('category');
    },
};
