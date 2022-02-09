import { agent as request } from "supertest";
import index from '../../src/index'
import TaskDTO from '../../src/dto/task-dto';
import mongoose from '../../src/configurations/db-configuration'

describe("Tasks",  () => {
    test("CRUD task", async () => {

        //perhaps create a wrapper around this so we can get our specific DTO back
        const createRespons = await request(index).post('/tasks')
            .send({message: 'creating new task'} as TaskDTO);
        expect(createRespons.statusCode).toBe(200);

        const getResponse =await request(index).get('/tasks')
        expect(createRespons.body).toBe([
            {message: 'creating new task'} as TaskDTO]);

        // afterAll(() => mongoose.disconnect());
    })
})
