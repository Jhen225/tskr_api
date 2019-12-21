const uuid = require('uuid/v4');
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid()
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
      address_id: {
        type: DataTypes.UUID,
        references: {
          model: 'address',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      phonenumber: DataTypes.STRING,
      birthday: DataTypes.DATE,
      role_id: {
        type: DataTypes.UUID,
        references: {
          model: 'role',
          key: 'id'
       }
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('user');
  }
};