import {agent as request} from "supertest";
import index from '../../src/index'
import TaskDTO from '../../src/dto/task-dto';

describe("Tasks", () => {
    test("CRUD task", async () => {

        // CREATE
        const createRespons = await request(index).post('/tasks')
            .send({message: 'creating new task'} as TaskDTO);
        expect(createRespons.statusCode).toBe(200);
        expect(createRespons.body).toStrictEqual({"message": "creating new task"});


        // GET
        const getResponse = await request(index).get('/tasks')
        const taskId = getResponse.body[0].id;
        expect(getResponse.body[0].message).toStrictEqual('creating new task');

        // UPDATE
        const updateResponse = await request(index).put(`/tasks`)
            .send({message: 'updated task', id: taskId} as TaskDTO)
        expect(updateResponse.body.message).toStrictEqual('updated task');

    })
})
