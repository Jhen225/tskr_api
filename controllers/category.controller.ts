import CategoryModel from '../models/Category.model';
import { Request, Response } from 'express';
import { isUUID } from '../utils/validation';
import { appLogger } from '../utils/logger';
import { ErrorHandler } from '../common/errorHandler';

export const GetCategories = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting all categoryes`);
    try {
        const result = await new CategoryModel().getCategories(req.query);
        return res.json({ success: true, categoryes: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetCategoryes');
    }
};

export const GetCategory = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting category: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });
        const result = await new CategoryModel().getCategory(req.params);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
        return res.json({ success: true, category: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetCategory');
    }
};

export const NewCategory = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Adding category: ${JSON.stringify(req.body.category)}`);
    try {
        const { category } = req.body;
        if (!category) return res.status(400).json({ success: false });
        const result = await new CategoryModel().newCategory(category);
        if (result) return res.status(201).json({ success: true });
        else return res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'NewCategory');
    }
};

export const UpdateCategory = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Updating category: ${req.params.id} with data: ${JSON.stringify(req.body.category)}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const { category } = req.body;
        if (!category) return res.status(400).json({ success: false });

        const result = await new CategoryModel().updateCategory(id, category);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });

        return res.json({ success: true });
    } catch (err) {
        ErrorHandler(err, res, 'UpdateCategory');
    }
};

export const DeleteCategory = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Deleting category: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });
        const result = await new CategoryModel().removeCategory(id);
        if (result) res.json({ success: true });
        else res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'DeleteCategory');
    }
};
