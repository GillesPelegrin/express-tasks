import * as express from 'express';
import {getAllTasks} from '../controllers/task-controller';

const router = express.Router();

router.get('/tasks', function (req: express.Request, res: express.Response) {
    res.send(getAllTasks());
})

router.post('/tasks', function (req, res) {
    console.log(req.body)
    // saveTask(req.body as TaskDTO)
    res.send();
})

router.put('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Updated task with id: ' + req.params.taskId);
})

router.delete('/tasks/:taskId', function (req: express.Request, res: express.Response) {
    res.send('Deleted task with id: ' + req.params.taskId);
})

export default router;
