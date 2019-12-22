import { GetRoles, GetRole, NewRole, UpdateRole, DeleteRole } from '../../controllers/role.controller';
import { Router } from 'express';
const roleRouter = Router();

roleRouter.get('/', GetRoles);
roleRouter.get('/:id', GetRole);
roleRouter.post('/', NewRole);
roleRouter.put('/:id', UpdateRole);
roleRouter.delete('/:id', DeleteRole);

export default roleRouter;
