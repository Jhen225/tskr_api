const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('address', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid
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
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('address');
  }
};