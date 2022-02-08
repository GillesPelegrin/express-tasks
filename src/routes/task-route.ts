import * as express from 'express';
import TaskDTO from '../dto/task-dto';
import {saveTask} from '../controllers/task-controller';
let router = express.Router();

router.get('/tasks', function (req: express.Request, res: express.Response) {
    res.send('Send back all taskts');
})

router.post('/tasks', function (req: express.Request, res: express.Response) {
    saveTask(req.body as TaskDTO);
    res.send('Created new tasks');
})

router.put('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Updated task with id: ' + req.params.taskId);
})

router.delete('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Deleted task with id: ' + req.params.taskId);
})

export default router;
