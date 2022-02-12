import index from '../../src';
import {agent as request} from "supertest";


describe("Error", () => {
    test("visualize Error", async () => {
        const response = await request(index).post('/tasks').send({});

        expect(response.status).toStrictEqual(500);
        expect(response.body).toStrictEqual({
            "message": "Message should not be null or undefined",
            "status": 500
        });
    })
})
