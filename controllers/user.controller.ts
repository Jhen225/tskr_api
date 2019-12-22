import UserModel from '../models/User.model';
import { Request, Response } from 'express';
import { isUUID } from '../utils/validation';
import { appLogger } from '../utils/logger';
import { ErrorHandler } from '../common/errorHandler';

export const GetUsers = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting all users`);
    try {
        const result = await new UserModel().getUsers(req.query);
        return res.json({ success: true, users: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetUsers');
    }
};

export const GetUser = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting user: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id))
            return res.status(400).json({ success: false, error: `id either missing or not valid` });

        const result = await new UserModel().getUser(id);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
        return res.json({ success: true, user: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetUser');
    }
};

export const NewUser = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Adding user: ${JSON.stringify(req.body.user)}`);
    try {
        const { user } = req.body;
        if (!user || !user.address || !user.role) return res.status(400).json({ success: false });
        const result = await new UserModel().newUser(user);
        if (result) return res.status(201).json({ success: true });
        else return res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'NewUser');
    }
};

export const UpdateUser = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Updating user: ${req.params.id} with data: ${JSON.stringify(req.body.user)}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const { user } = req.body;
        if (!user) return res.status(400).json({ success: false });

        const result = await new UserModel().updateUser(id, user);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });

        return res.json({ success: true });
    } catch (err) {
        ErrorHandler(err, res, 'UpdateUser');
    }
};

export const DeleteUser = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Deleting user: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const result = await new UserModel().removeUser(id);
        if (result) res.json({ success: true });
        else res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'DeleteUser');
    }
};
