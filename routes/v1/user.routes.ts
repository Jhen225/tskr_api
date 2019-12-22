import { GetUsers, GetUser, NewUser, UpdateUser, DeleteUser } from '../../controllers/user.controller';
import { Router } from 'express';
const userRouter = Router();

userRouter.get('/', GetUsers);
userRouter.get('/:id', GetUser);
userRouter.post('/', NewUser);
userRouter.put('/:id', UpdateUser);
userRouter.delete('/:id', DeleteUser);

export default userRouter;
