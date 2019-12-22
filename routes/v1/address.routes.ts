import {
    GetAddresses,
    GetAddress,
    NewAddress,
    UpdateAddress,
    DeleteAddress,
} from '../../controllers/address.controller';
import { Router } from 'express';
const addressRouter = Router();

addressRouter.get('/', GetAddresses);
addressRouter.get('/:id', GetAddress);
addressRouter.post('/', NewAddress);
addressRouter.put('/:id', UpdateAddress);
addressRouter.delete('/:id', DeleteAddress);

export default addressRouter;
