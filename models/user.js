'use strict';
import uuid from 'uuid/v4';
import * as DataTypes from 'sequelize';
import sequelize from '../common/sequelize';

const user = sequelize.define(
    'user',
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: uuid,
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
        addressID: {
            field: 'address_id',
            type: DataTypes.UUID,
        },
        phonenumber: DataTypes.STRING,
        birthday: DataTypes.DATE,
        roleID: {
            field: 'role_id',
            type: DataTypes.UUID,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { freezeTableName: true },
);

user.associate = function(models) {
    // associations can be defined here
};

export default user;
