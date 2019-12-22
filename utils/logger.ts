import fs from 'fs';
import path from 'path';
import logger from 'log4js';
const logPath = path.join(__dirname, '../logs/service.log');

if (fs.existsSync(logPath)) {
    fs.unlinkSync(logPath);
}

logger.configure({
    appenders: { service: { type: 'file', filename: logPath } },
    categories: { default: { appenders: ['service'], level: 'debug' } },
});

export const appLogger = logger.getLogger('service');
