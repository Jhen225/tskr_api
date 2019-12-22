import RoleModel from '../models/Role.model';
import { Request, Response } from 'express';
import { isUUID } from '../utils/validation';
import { appLogger } from '../utils/logger';
import { ErrorHandler } from '../common/errorHandler';

export const GetRoles = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting all roles`);
    try {
        const result = await new RoleModel().getRoles(req.query);
        return res.json({ success: true, roles: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetRoles');
    }
};

export const GetRole = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting role: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });
        const result = await new RoleModel().getRole(req.params);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
        return res.json({ success: true, role: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetRole');
    }
};

export const NewRole = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Adding role: ${JSON.stringify(req.body.role)}`);
    try {
        const { role } = req.body;
        if (!role) return res.status(400).json({ success: false });
        const result = await new RoleModel().newRole(role);
        if (result) return res.status(201).json({ success: true });
        else return res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'NewRole');
    }
};

export const UpdateRole = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Updating role: ${req.params.id} with data: ${JSON.stringify(req.body.role)}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const { role } = req.body;
        if (!role) return res.status(400).json({ success: false });

        const result = await new RoleModel().updateRole(id, role);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });

        return res.json({ success: true });
    } catch (err) {
        ErrorHandler(err, res, 'UpdateRole');
    }
};

export const DeleteRole = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Deleting role: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const result = await new RoleModel().removeRole(id);
        if (result) res.json({ success: true });
        else res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'DeleteRole');
    }
};
