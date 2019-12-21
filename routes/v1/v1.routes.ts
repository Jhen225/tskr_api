const v1_router = require('express').Router();
const task_routes = require('./task.routes');

v1_router.get('/', (req:any, res:any) => {
    res.json({ success: true, message: 'v1' });
});

v1_router.use('/tasks', task_routes);

module.exports = v1_router;