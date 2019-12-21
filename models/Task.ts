import Task from './interfaces/Task';
const tasks = require('./task');
const { TASK_COMPLETE } = require('../common/constants').task_constants;

export default class TaskModel {
    
    getTasks(params) {
        return tasks.findAll({
            where: { ...params }
        });
    }

    getTask(id: string) {
        return tasks.findAll({
            where: { id: id }
        });
    }

    newTask(task: Task) {
        return tasks.create({ ...task });
    }

    updateTask(id: string, task: Task) {
        return tasks.update(
            { id: id, completedAt: task.status == TASK_COMPLETE ? Date.now() : null, updatedAt: Date.now(), ...task },
            { 
                where: { id: id }
            }
        );
    }

    removeTask(id: string) { 
        return tasks.destroy({
            where: { id: id }
        });
    }
}