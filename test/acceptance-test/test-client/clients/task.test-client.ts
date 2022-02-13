import TaskDTO from '../../../../src/dto/task-dto';
import TestClient from '../test-client';

export class TaskTestClient extends TestClient {

    static async getAllTasks(): Promise<TaskDTO[]> {
        return this.getWithAuthentication<TaskDTO>('/tasks');
    }

    static async createTask(taskDto: TaskDTO): Promise<TaskDTO> {
        return this.postWithAuthentication<TaskDTO>('/tasks', taskDto);
    }

    static async updateTask(taskDto: TaskDTO): Promise<TaskDTO> {
        return this.putWithAuthentication<TaskDTO>('/tasks', taskDto);
    }

    static async deleteTask(taskId: string): Promise<any> {
        return this.deleteWithAuthentication(`/tasks/${taskId}`);
    }
}
