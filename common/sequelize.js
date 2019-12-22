/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
import Sequelize from 'sequelize';
import { appLogger } from '../utils/logger';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

sequelize
    .authenticate()
    .then(() => {
        appLogger.info('Database connection has been established successfully.');
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        appLogger.error(`Unable to connect to the database: ${err}`);
        console.log(`Unable to connect to the database: ${err}`);
        process.exit();
    });

module.exports = sequelize;
