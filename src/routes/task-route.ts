import * as express from 'express';
import {getAllTasks, saveTask} from '../controllers/task-controller';
import TaskDTO from '../dto/task-dto';

const router = express.Router();

router.get('/tasks', async function (req: express.Request, res: express.Response) {
    res.send(await getAllTasks());
})

router.post('/tasks', function (req: express.Request, res) {
    saveTask(req.body as TaskDTO).then(() => {
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
