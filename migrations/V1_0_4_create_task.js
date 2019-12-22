/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require('uuid/v4');
const {
    TASK_COMPLETE,
    TASK_IN_PROGRESS,
    TASK_CANCELLED,
    TASK_DROPPED,
    TASK_PENDING,
} = require('../common/constants.ts').task_constants;
module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('task', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: uuid(),
            },
            description: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            category_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'category',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            creator_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            assignee_id: {
                type: DataTypes.UUID,
                references: {
                    model: 'user',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            status: {
                type: DataTypes.ENUM(TASK_COMPLETE, TASK_IN_PROGRESS, TASK_CANCELLED, TASK_DROPPED, TASK_PENDING),
            },
            completedAt: DataTypes.DATE,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        });
    },
    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('task');
    },
};
