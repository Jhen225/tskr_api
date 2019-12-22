'use strict';
import uuid from 'uuid/v4';
import * as DataTypes from 'sequelize';
import sequelize from '../common/sequelize';

const category = sequelize.define(
    'category',
    {
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
    },
    { freezeTableName: true },
);

category.associate = function(models) {
    // associations can be defined here
};

export default category;
