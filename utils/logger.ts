import fs from 'fs';
import path from 'path';
import logger from 'log4js';
const serviceLogPath = path.join(__dirname, '../logs/service.log');
const errorLogPath = path.join(__dirname, '../logs/error.log');
const baseLogPath = path.join(__dirname, '../logs/');

if (fs.existsSync(serviceLogPath)) {
    fs.unlinkSync(serviceLogPath);
}

if (fs.existsSync(errorLogPath)) {
    fs.unlinkSync(errorLogPath);
}

logger.configure({
    appenders: {
        multi: { type: 'multiFile', base: baseLogPath, property: 'categoryName', extension: '.log' },
    },
    // appenders: [
    //     { error: { type: 'file', filename: errorLogPath } },
    //     { service: { type: 'file', filename: serviceLogPath } },
    // ],
    categories: { default: { appenders: ['multi'], level: 'debug' } },
});

export const appLogger = logger.getLogger('service');
export const errorLogger = logger.getLogger('error');
