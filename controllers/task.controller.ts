import TaskModel from '../models/Task';
const Logger = require('../utils/logger');
const serviceLogger = Logger.getLogger('service');

export const GetTasks = async (req: any, res: any) => {
    try {
        const result = await new TaskModel().getTasks(req.query);
        return res.json({ success: true, tasks: result });
      } catch (err) {
        serviceLogger.error(err);
        return res.status(500).json({ success: false });
      }
};

export const GetTask = async (req: any, res: any) => {
  try {
      const { id } = req.params;
      const result = await new TaskModel().getTask(id);
      if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
      return res.json({ success: true, task: result });
    } catch (err) {
      serviceLogger.error(err);
      return res.status(500).json({ success: false });
    }
};

export const NewTask = async (req, res) => {
    try {
      const { task } = req.body;
      console.log( task );
      const result = await new TaskModel().newTask(task);
      if (result) return res.status(201).json({ success: true });
      else return res.status(400).json({ success: false });
    } catch (err) {
      serviceLogger.error(err);
      switch(err.name) {
        case 'SequelizeValidationError':
          return res.status(400).json({ success: false, message: err.errors[0].message });
        default:
          return res.status(500).json({ success: false, error: err });
      }
    }
  };
  
  export const UpdateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { task } = req.body;
      const result = await new TaskModel().updateTask(id, task);
      if (!result || result == null || result.length == 0) return res.status(404).json({ success: false });
      
      return res.json({ success: true });
    } catch (err) {
      serviceLogger.error(err);
      return res.status(500).json({ success: false });
    }
  };

  export const DeleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await new TaskModel().removeTask(id);
      if (result) res.json({ success: true });
      else res.status(400).json({ success: false });
    } catch (err) {
      serviceLogger.error(err);
      return res.status(500).json({ success: false });
    }
  };