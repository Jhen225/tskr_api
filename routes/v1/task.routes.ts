import { GetTasks, GetTask, NewTask, UpdateTask, DeleteTask } from '../../controllers/task.controller';
import { Router } from 'express';
const taskRouter = Router();

taskRouter.get('/', GetTasks);
taskRouter.get('/:id', GetTask);
taskRouter.post('/', NewTask);
taskRouter.put('/:id', UpdateTask);
taskRouter.delete('/:id', DeleteTask);

export default taskRouter;
