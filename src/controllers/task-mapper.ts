import TaskDTO from '../dto/task-dto';
import {Task} from '../models/task-model';


export default function TaskMapper() {
    function mapTask(task: TaskDTO): Task {
        return new Task(task.message);
    }

    function mapTaskDTO(task: Task): TaskDTO {
        return {
            message: task.message
        } as TaskDTO
    }

    return {mapTask, mapTaskDTO}
}
