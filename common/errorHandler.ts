import { appLogger, errorLogger } from '../utils/logger';
import { Response } from 'express';
export const ErrorHandler = (err, res, caller): Promise<Response> => {
    appLogger.debug(`Error picked up by error handler from ${caller}`);
    errorLogger.error(err);
    switch (err.name) {
        case 'SequelizeValidationError':
            return res.status(400).json({ success: false, message: err.errors[0].message });
        default:
            return res.status(500).json({ success: false, error: err });
    }
};
