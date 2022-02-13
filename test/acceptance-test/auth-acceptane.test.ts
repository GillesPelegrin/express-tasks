import index from '../../src';
import {agent as request} from "supertest";


describe("Authentication", () => {
    test("Authentication fails because did not add any user information is base64", async () => {

        const response = await request(index).post('/tasks').set('Authorization', 'Basic 1234567890').send({});

        expect(response.status).toStrictEqual(401);
        expect(response.text).toStrictEqual('Unauthorized');
    })

    test("Authentication fails because user is not authorized", async () => {

        const response = await request(index).post('/tasks').set('Authorization', 'Basic 1234567890').send({});

        expect(response.status).toStrictEqual(401);
        expect(response.text).toStrictEqual('Unauthorized');
    })
})
