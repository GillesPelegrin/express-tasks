import TaskDTO from '../../src/dto/task-dto';
import {TaskTestClient} from './client/task.test-client';

describe("Tasks", () => {
    test("CRUD task", async () => {

        // CREATE
        const createRespons: TaskDTO = await TaskTestClient.createTask({message: 'creating new task'} as TaskDTO);
        expect(createRespons).toStrictEqual({"message": "creating new task"});

        // GET
        const getResponse: TaskDTO [] = await TaskTestClient.getAllTasks();
        const taskId = getResponse[0].id;
        expect(getResponse.length).toBe(1);
        expect(getResponse[0].message).toStrictEqual('creating new task');

        // UPDATE
        const updateResponse: TaskDTO = await TaskTestClient.updateTask({
            message: 'updated task',
            id: taskId
        } as TaskDTO);
        expect(updateResponse.message).toStrictEqual('updated task');

        // DELETE
        const deleteResponse = await TaskTestClient.deleteTask(taskId);

        // GET ALL
        const getResponseForDelete = await TaskTestClient.getAllTasks();
        expect(getResponseForDelete).toStrictEqual([]);
    })
})
