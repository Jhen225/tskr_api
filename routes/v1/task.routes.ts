import { GetTasks, GetTask, NewTask, UpdateTask, DeleteTask } from '../../controllers/task.controller';
const task_router = require('express').Router();

task_router.get('/', GetTasks);
task_router.get('/:id', GetTask);
task_router.post('/', NewTask);
task_router.put('/:id', UpdateTask);
task_router.delete('/:id', DeleteTask);

module.exports = task_router;