import * as express from 'express';
import TaskDTO from '../dto/task-dto';
import {getAllTasks, saveTask} from '../controllers/task-controller';
let router = express.Router();

router.get('/tasks', function (req: express.Request, res: express.Response) {
    res.send(getAllTasks());
})

router.post('/tasks', function (req: express.Request, res: express.Response) {
    res.send(saveTask(req.body as TaskDTO));
})

router.put('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Updated task with id: ' + req.params.taskId);
})

router.delete('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Deleted task with id: ' + req.params.taskId);
})

export default router;
