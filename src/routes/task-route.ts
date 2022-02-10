import * as express from 'express';
import TaskDTO from '../dto/task-dto';
import {TaskController} from '../controllers/task-controller';

const router = express.Router();

router.get('/tasks', async function (req: express.Request, res: express.Response) {
    res.send(await new TaskController().getAllTasks());
})

router.post('/tasks', function (req: express.Request, res) {
    new TaskController().saveTask(req.body as TaskDTO).then(() => {
        res.send("Task saved");
    })
})

router.put('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Updated task with id: ' + req.params.taskId);
})

router.delete('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Deleted task with id: ' + req.params.taskId);
})

export default router;
