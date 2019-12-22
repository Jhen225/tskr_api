import Task from './interfaces/Task';
import tasks from './task';
import { appLogger } from '../utils/logger';

const { TASK_COMPLETE } = require('../common/constants').task_constants;

export default class TaskModel {
    getTasks(params): Array<object> {
        return tasks.findAll({
            where: { ...params },
        });
    }

    getTask(id: string): Array<object> {
        return tasks.findAll({
            where: { id: id },
        });
    }

    newTask(task: Task): Array<object> {
        return tasks.create({ ...task });
    }

    updateTask(id: string, task: Task): Array<object> {
        appLogger.debug(`Updating task: ${id} with data: ${task}`);
        return tasks.update(
            {
                id: id,
                completedAt: task && task.status && task.status == TASK_COMPLETE ? Date.now() : null,
                updatedAt: Date.now(),
                ...task,
            },
            {
                where: { id: id },
            },
        );
    }

    removeTask(id: string): Array<object> {
        return tasks.destroy({
            where: { id: id },
        });
    }
}
