import TaskDTO from '../../../../src/dto/task-dto';
import TestClient from '../test-client';

export class TaskTestClient extends TestClient {

    constructor(index) {
        super(index);
    }

     async getAllTasks(): Promise<TaskDTO[]> {
        return this.getWithAuthentication<TaskDTO>('/tasks');
    }

     async createTask(taskDto: TaskDTO): Promise<TaskDTO> {
        return this.postWithAuthentication<TaskDTO>('/tasks', taskDto);
    }

     async updateTask(taskDto: TaskDTO): Promise<TaskDTO> {
        return this.putWithAuthentication<TaskDTO>('/tasks', taskDto);
    }

     async deleteTask(taskId: string): Promise<any> {
        return this.deleteWithAuthentication(`/tasks/${taskId}`);
    }
}
