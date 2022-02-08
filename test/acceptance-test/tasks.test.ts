import * as request from 'supertest'
import index from '../../src/index'

describe("Taks",  () => {
    test("create a task", async () => {
        const response = await request(index).post('/tasks').send({})
        expect(response.body).toEqual({});
    })
})
