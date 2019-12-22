/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require('uuid/v4');
module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: uuid(),
            },
            firstname: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            lastname: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            addressId: {
                type: DataTypes.UUID,
                field: 'address_id',
                references: {
                    model: 'address',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            phonenumber: DataTypes.STRING,
            birthday: DataTypes.DATE,
            roleId: {
                type: DataTypes.UUID,
                field: 'role_id',
                references: {
                    model: 'role',
                    key: 'id',
                },
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        });
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('user');
    },
};
