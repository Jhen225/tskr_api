const fs = require('fs');
const path = require('path');
const logger = require('log4js');
const log_path = '/home/josh/Projects/node/tskr_api/bin/logs/service.log';

if(fs.existsSync(log_path)) {
    fs.unlinkSync(log_path);
}

logger.configure({
    appenders: { service: { type: 'file', filename: log_path } },
    categories: { default: { appenders: ['service'], level: 'info' } }
});

module.exports = logger;