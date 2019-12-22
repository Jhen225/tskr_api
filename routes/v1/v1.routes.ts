import { Router } from 'express';
import taskRoutes from './task.routes';

const v1Router = Router();

v1Router.get('/', (req, res) => {
    res.json({ success: true, message: 'v1' });
});

v1Router.use('/tasks', taskRoutes);

export default v1Router;
