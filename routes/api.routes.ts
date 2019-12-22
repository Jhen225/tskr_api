import { Router } from 'express';
import v1Routes from './v1/v1.routes';
const apiRouter = Router();

apiRouter.get('/', (req, res) => {
    res.json({ success: true, message: 'api' });
});

apiRouter.use('/v1', v1Routes);

export default apiRouter;
