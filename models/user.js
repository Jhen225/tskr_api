'use strict';
const uuid = require('uuid/v4');
const DataTypes = require('sequelize');
const sequelize = require('../common/sequelize');

const user = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_id: DataTypes.UUID,
    phonenumber: DataTypes.STRING,
    birthday: DataTypes.DATE,
    role_id: DataTypes.UUID,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, { freezeTableName: true });


  role.associate = function(models) {
  // associations can be defined here
};

module.exports = role;