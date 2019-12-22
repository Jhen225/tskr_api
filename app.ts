require('dotenv').config();
import express from 'express';
import ip from 'ip';
import morgan from 'morgan';
import apiRoutes from './routes/api.routes';
import { appLogger } from './utils/logger';

const PORT = process.env.PORT || '3000';
const app = express();

require('./common/sequelize');

// Register middleware
app.use(express.json());
app.use(morgan('dev'));

// Register API router
app.use('/api', apiRoutes);

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Successfully started application on http://${ip.address()}:${PORT}`);
    appLogger.info(`Successfully started application on http://${ip.address()}:${PORT}`);
}).on('error', () => {
    console.log(`Successfully started application on http://${ip.address()}:${PORT}`);
    appLogger.fatal(`Successfully started application on http://${ip.address()}:${PORT}`);
});
