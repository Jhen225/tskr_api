'use strict';
const uuid = require('uuid/v4');
const DataTypes = require('sequelize');
const sequelize = require('../common/sequelize');

const role = sequelize.define('role', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, { freezeTableName: true });


  role.associate = function(models) {
  // associations can be defined here
};

module.exports = role;