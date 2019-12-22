import AddressModel from '../models/Address.model';
import { Request, Response } from 'express';
import { isUUID } from '../utils/validation';
import { appLogger } from '../utils/logger';
import { ErrorHandler } from '../common/errorHandler';

export const GetAddresses = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting all addresses`);
    try {
        const result = await new AddressModel().getAddresses(req.query);
        return res.json({ success: true, addresses: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetAddresses');
    }
};

export const GetAddress = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting address: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });
        const result = await new AddressModel().getAddress(req.params);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
        return res.json({ success: true, address: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetAddress');
    }
};

export const NewAddress = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Adding address: ${JSON.stringify(req.body.address)}`);
    try {
        const { address } = req.body;
        if (!address) return res.status(400).json({ success: false });
        const result = await new AddressModel().newAddress(address);
        if (result) return res.status(201).json({ success: true });
        else return res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'NewAddress');
    }
};

export const UpdateAddress = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Updating address: ${req.params.id} with data: ${JSON.stringify(req.body.address)}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const { address } = req.body;
        if (!address) return res.status(400).json({ success: false });

        const result = await new AddressModel().updateAddress(id, address);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });

        return res.json({ success: true });
    } catch (err) {
        ErrorHandler(err, res, 'UpdateAddress');
    }
};

export const DeleteAddress = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Deleting address: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });
        const result = await new AddressModel().removeAddress(id);
        if (result) res.json({ success: true });
        else res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'DeleteAddress');
    }
};
