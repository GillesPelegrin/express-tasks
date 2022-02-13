import TaskDTO from '../../dto/task-dto';
import TaskMapper from './task-mapper';
import TaskRepository from '../../domain/task/taskRepository';
import Task from '../../domain/task/task';
import taskRouter from '../../routes/task/task-router';


export class TaskController {

    private taskRepository: TaskRepository;
    private taskMapper: TaskMapper;

    constructor() {
        this.taskRepository = new TaskRepository();
        this.taskMapper = new TaskMapper();
    }

    async saveTask(task: TaskDTO): Promise<TaskDTO> {
        const newTask = await this.taskRepository.save(this.taskMapper.mapTask(task))
        return this.taskMapper.mapTaskDTO(newTask);
    }

    async getAllTasks(): Promise<TaskDTO[]> {
        const tasks: Task[] = await this.taskRepository.getAll();
        return tasks.map((task: Task) => this.taskMapper.mapTaskDTO(task))
    }

    async updateTask(task: TaskDTO): Promise<TaskDTO> {
        const updatedTask: Task = await this.taskRepository.update(this.taskMapper.mapTask(task))
        return this.taskMapper.mapTaskDTO(updatedTask);
    }

    async deleteTask(taskId: string): Promise<void> {
        const deleteSchema = await this.taskRepository.delete(taskId)
        return deleteSchema;
    }

}
