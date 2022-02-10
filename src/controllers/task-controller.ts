import TaskDTO from '../dto/task-dto';
import TaskMapper from './task-mapper';
import TaskRepository from '../domain/tasks/taskRepository';
import Task from '../domain/tasks/task';


export class TaskController {

    private taskRepository: TaskRepository;
    private taskMapper: TaskMapper;

    constructor() {
        this.taskRepository = new TaskRepository();
        this.taskMapper = new TaskMapper();
    }

    async saveTask(task: TaskDTO) {
        await this.taskRepository.save(this.taskMapper.mapTask(task))
    }

    async getAllTasks(): Promise<TaskDTO[]> {
        const tasks: Task[] = await this.taskRepository.getAll();
        return tasks.map((task: Task) => this.taskMapper.mapTaskDTO(task))
    }

}
