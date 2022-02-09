import TaskDTO from '../dto/task-dto';
import {taskRepository} from '../models/task-repository';
import mapTask from './task-mapper';


async function saveTask(task: TaskDTO) {
    await taskRepository().save(mapTask(task))
}

async function getAllTasks() {
    await taskRepository().getAll();
}

export {saveTask, getAllTasks}
