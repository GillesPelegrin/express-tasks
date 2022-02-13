import * as express from 'express';
import asyncErrorWrapper from '../../infrastructure/error/async-error-wrapper';
import {UserController} from '../../controllers/user/user-controller';
import UserDTO from '../../dto/user-d-t-o';

const router = express.Router();

router.post('/user', asyncErrorWrapper(async function (req: express.Request, res) {
    const newUser = await new UserController().saveUser(req.body as UserDTO)
    res.send(newUser);
}));

export default router;
