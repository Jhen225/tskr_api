const Sequelize = require('sequelize');
const logger = require('../utils/logger');
const app_logger = logger.getLogger("service");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    }
);

sequelize
  .authenticate()
  .then(() => {
    app_logger.info('Database connection has been established successfully.');
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    app_logger.error(`Unable to connect to the database: ${err}`);
    console.log(`Unable to connect to the database: ${err}`);
    process.exit();
  });

module.exports = sequelize;