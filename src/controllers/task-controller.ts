import TaskDTO from '../dto/task-dto';
import {taskRepository} from '../models/task-repository';
import TaskMapper from './task-mapper';
import {Task} from '../models/task-model';


async function saveTask(task: TaskDTO) {
    await taskRepository().save(TaskMapper().mapTask(task))
}

async function getAllTasks(): Promise<TaskDTO[]> {
    const tasks: Task[] = await taskRepository().getAll();
    return tasks.map((task: Task) => TaskMapper().mapTaskDTO(task))
}

export {saveTask, getAllTasks}
