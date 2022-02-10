import * as express from 'express';
import TaskDTO from '../dto/task-dto';
import {TaskController} from '../controllers/task-controller';

const router = express.Router();

router.get('/tasks', async function (req: express.Request, res: express.Response) {
    const tasks: TaskDTO[] = await new TaskController().getAllTasks();
    res.send(tasks);
})

router.post('/tasks', async function (req: express.Request, res) {
    const newTask = await new TaskController().saveTask(req.body as TaskDTO)
    res.send(newTask);
})

router.put('/tasks', async function (req: express.Request, res: express.Response) {
    const updatedTask = await new TaskController().updateTask(req.body as TaskDTO);
    res.send(updatedTask);

})

router.delete('/tasks/', function (req: express.Request, res: express.Response) {
    res.send('Deleted task with id: ' + req.params.taskId);
})

export default router;
