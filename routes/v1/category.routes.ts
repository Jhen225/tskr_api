import {
    GetCategories,
    GetCategory,
    NewCategory,
    UpdateCategory,
    DeleteCategory,
} from '../../controllers/category.controller';
import { Router } from 'express';
const categoryRouter = Router();

categoryRouter.get('/', GetCategories);
categoryRouter.get('/:id', GetCategory);
categoryRouter.post('/', NewCategory);
categoryRouter.put('/:id', UpdateCategory);
categoryRouter.delete('/:id', DeleteCategory);

export default categoryRouter;
