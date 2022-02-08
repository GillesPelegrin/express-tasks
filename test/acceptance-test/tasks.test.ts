import { agent as request } from "supertest";
import index from '../../src/index'

describe("Tasks",  () => {
    test("create a task", async () => {

        //perhaps create a wrapper around this so we can get our specific DTO back
        const response = await request(index).post('/tasks').send({})

        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Created new tasks');
    })
})
