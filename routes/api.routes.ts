const api_router = require('express').Router();
const v1_routes = require('./v1/v1.routes');

api_router.get('/', (req:any, res:any) => {
    res.json({ success: true, message: 'api' });
});

api_router.use('/v1', v1_routes);

module.exports = api_router;