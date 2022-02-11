import index from '../../../src';
import TaskDTO from '../../../src/dto/task-dto';
import {agent as request} from "supertest";

export class TaskTestClient {

    static async getAllTasks(): Promise<TaskDTO[]> {
        const tasks = await request(index).get('/tasks')
        expect(tasks.statusCode).toBe(200);
        return tasks.body as TaskDTO[];
    }

    static async createTask(taskDto: TaskDTO): Promise<TaskDTO> {
        const createdTask = await request(index).post('/tasks').send(taskDto)
        expect(createdTask.statusCode).toBe(200);
        return createdTask.body as TaskDTO;
    }

    static async updateTask(taskDto: TaskDTO): Promise<TaskDTO> {
        const updatedTask = await request(index).put(`/tasks`).send(taskDto)
        expect(updatedTask.statusCode).toBe(200);
        return updatedTask.body as TaskDTO;
    }

    static async deleteTask(taskId: string): Promise<any> {
        const deletedTask = await request(index).delete(`/tasks/${taskId}`);
        expect(deletedTask.statusCode).toBe(200);
        return deletedTask;
    }
}
