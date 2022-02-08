import TaskDTO from '../dto/task-dto';
import {Task} from '../models/task-model';


export default function mapTask(task: TaskDTO) {
    return new Task(task.message);
}
