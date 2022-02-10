import TaskDTO from '../dto/task-dto';
import Task from '../domain/tasks/task';


export default class TaskMapper {
     mapTask(task: TaskDTO): Task {
        return new Task(task.message);
    }

     mapTaskDTO(task: Task): TaskDTO {
        return {
            message: task.message
        } as TaskDTO
    }
}
