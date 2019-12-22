import TaskModel from '../models/Task.model';
import { Request, Response } from 'express';
import { isUUID } from '../utils/validation';
import { appLogger } from '../utils/logger';
import { ErrorHandler } from '../common/errorHandler';

export const GetTasks = async (req: Request, res: Response): Promise<Response> => {
    appLogger.debug(`Getting all tasks`);
    try {
        const result = await new TaskModel().getTasks(req.query);
        return res.json({ success: true, tasks: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetTasks');
    }
};

export const GetTask = async (req, res): Promise<Response> => {
    appLogger.debug(`Getting task: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const result = await new TaskModel().getTask(id);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
        return res.json({ success: true, task: result });
    } catch (err) {
        ErrorHandler(err, res, 'GetTask');
    }
};

export const NewTask = async (req, res): Promise<Response> => {
    appLogger.debug(`Adding task: ${JSON.stringify(req.body.task)}`);
    try {
        const { task } = req.body;
        if (!task || !task.creator || !task.assignee) return res.status(400).json({ success: false });
        const result = await new TaskModel().newTask(task);
        if (result) return res.status(201).json({ success: true });
        else return res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'NewTask');
    }
};

export const UpdateTask = async (req, res): Promise<Response> => {
    appLogger.debug(`Updating task: ${req.params.id} with data: ${JSON.stringify(req.body.task)}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const { task } = req.body;
        if (!task) return res.status(400).json({ success: false });

        const result = await new TaskModel().updateTask(id, task);
        if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });

        return res.json({ success: true });
    } catch (err) {
        ErrorHandler(err, res, 'UpdateTask');
    }
};

export const DeleteTask = async (req, res): Promise<Response> => {
    appLogger.debug(`Deleting task: ${req.params.id}`);
    try {
        const { id } = req.params;
        if (!id || !isUUID(id)) return res.status(400).json({ success: false });

        const result = await new TaskModel().removeTask(id);
        if (result) res.json({ success: true });
        else res.status(400).json({ success: false });
    } catch (err) {
        ErrorHandler(err, res, 'DeleteTask');
    }
};
