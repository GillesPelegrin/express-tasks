import * as express from 'express';
import TaskDTO from '../../dto/task-dto';
import {TaskController} from '../../controllers/task/task-controller';
import asyncErrorWrapper from '../../infrastructure/error/async-error-wrapper';
import authentication from '../../infrastructure/auth/authentication';

const router = express.Router();

router.get('/tasks', [authentication], asyncErrorWrapper(async function (req: express.Request, res: express.Response) {
    const tasks: TaskDTO[] = await new TaskController().getAllTasks();
    res.send(tasks);
}));

router.post('/tasks', [authentication], asyncErrorWrapper(async function (req: express.Request, res) {
    const newTask = await new TaskController().saveTask(req.body as TaskDTO)
    res.send(newTask);
}));

router.put('/tasks', [authentication], asyncErrorWrapper(async function (req: express.Request, res: express.Response) {
    const updatedTask = await new TaskController().updateTask(req.body as TaskDTO);
    res.send(updatedTask);

}));

router.delete('/tasks/:taskId', [authentication], asyncErrorWrapper(async function (req: express.Request, res: express.Response) {
    await new TaskController().deleteTask(req.params.taskId);
    res.send();
}));

export default router;
