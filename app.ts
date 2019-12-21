require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const ip = require('ip');
const morgan = require('morgan');
const api_routes = require('./routes/api.routes');
const app_logger_module = require('./utils/logger');
const app_logger = app_logger_module.getLogger('service');
const app = express();

require('./common/sequelize');

// Register middleware
app.use(express.json());
app.use(morgan('dev'));

// Register API router
app.use('/api', api_routes);


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Successfully started application on ${ip.address()}:${PORT}`);
    app_logger.info(`Successfully started application on ${ip.address()}:${PORT}`);
})
.on('error', () => {
    console.log(`Successfully started application on ${ip.address()}:${PORT}`);
    app_logger.fatal(`Successfully started application on ${ip.address()}:${PORT}`);
});
