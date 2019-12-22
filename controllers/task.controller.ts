import TaskModel from '../models/Task.model';
import { Request, Response } from 'express';
import { appLogger } from '../utils/logger';

export const GetTasks = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await new TaskModel().getTasks(req.query);
        return res.json({ success: true, tasks: result });
    } catch (err) {
        appLogger.error(err);
        return res.status(500).json({ success: false });
    }
};

export const GetTask = async (req, res): Promise<Response> => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false });

        const result = await new TaskModel().getTask(id);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
        return res.json({ success: true, task: result });
    } catch (err) {
        appLogger.error(err);
        return res.status(500).json({ success: false });
    }
};

export const NewTask = async (req, res): Promise<Response> => {
    try {
        const { task } = req.body;
        if (!task) return res.status(400).json({ success: false });
        const result = await new TaskModel().newTask(task);
        if (result) return res.status(201).json({ success: true });
        else return res.status(400).json({ success: false });
    } catch (err) {
        appLogger.error(err);
        switch (err.name) {
            case 'SequelizeValidationError':
                return res.status(400).json({ success: false, message: err.errors[0].message });
            default:
                return res.status(500).json({ success: false, error: err });
        }
    }
};

export const UpdateTask = async (req, res): Promise<Response> => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false });

        const { task } = req.body;
        if (!task) return res.status(400).json({ success: false });

        const result = await new TaskModel().updateTask(id, task);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });

        return res.json({ success: true });
    } catch (err) {
        appLogger.error(err);
        return res.status(500).json({ success: false });
    }
};

export const DeleteTask = async (req, res): Promise<Response> => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false });

        const result = await new TaskModel().removeTask(id);
        if (result) res.json({ success: true });
        else res.status(400).json({ success: false });
    } catch (err) {
        appLogger.error(err);
        return res.status(500).json({ success: false });
    }
};
