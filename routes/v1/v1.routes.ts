import { Router } from 'express';
import taskRoutes from './task.routes';
import userRoutes from './user.routes';
import roleRoutes from './role.routes';
import categoryRoutes from './category.routes';

const v1Router = Router();

v1Router.use('/tasks', taskRoutes);
v1Router.use('/users', userRoutes);
v1Router.use('/roles', roleRoutes);
v1Router.use('/categories', categoryRoutes);

export default v1Router;
