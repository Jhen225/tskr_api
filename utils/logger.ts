import fs from 'fs';
import path from 'path';
import logger from 'log4js';
const serviceLogPath = path.join(__dirname, '../logs/service.log');
const errorLogPath = path.join(__dirname, '../logs/error.log');

if (fs.existsSync(serviceLogPath)) {
    fs.unlinkSync(serviceLogPath);
}

if (fs.existsSync(errorLogPath)) {
    fs.unlinkSync(errorLogPath);
}

logger.configure({
    appenders: { error: { type: 'file', filename: errorLogPath } },
    categories: { default: { appenders: ['error'], level: 'fatal' } },
});

logger.configure({
    appenders: { service: { type: 'file', filename: serviceLogPath } },
    categories: { default: { appenders: ['service'], level: 'debug' } },
});

export const appLogger = logger.getLogger('service');
export const errorLogger = logger.getLogger('error');
