'use strict';
import uuid from 'uuid/v4';
import * as DataTypes from 'sequelize';
import sequelize from '../common/sequelize';

const {
    TASK_COMPLETE,
    TASK_IN_PROGRESS,
    TASK_CANCELLED,
    TASK_DROPPED,
    TASK_PENDING,
} = require('../common/constants').task_constants;

const task = sequelize.define(
    'task',
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: uuid,
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.ENUM(TASK_COMPLETE, TASK_IN_PROGRESS, TASK_CANCELLED, TASK_DROPPED, TASK_PENDING),
            defaultValue: TASK_PENDING,
        },
        completedAt: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    { freezeTableName: true },
);

task.associate = function(models) {
    // associations can be defined here
};

export default task;
