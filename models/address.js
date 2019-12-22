'use strict';
import uuid from 'uuid/v4';
import * as DataTypes from 'sequelize';
import sequelize from '../common/sequelize';

const address = sequelize.define(
    'address',
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: uuid,
        },
        street: DataTypes.STRING,
        street2: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        province: DataTypes.STRING,
        postal: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { freezeTableName: true },
);

address.associate = function(models) {
    // associations can be defined here
};

export default address;
