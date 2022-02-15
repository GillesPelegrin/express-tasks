import {agent as request} from "supertest";
import createServer from '../../src/app';
import {UserTestClient} from './test-client/clients/user.test-client';
import {testUser, testUserString} from './test-client/test-users';
import {TaskTestClient} from './test-client/clients/task.test-client';
import * as mongoose from 'mongoose';
import TaskDTO from '../../dist/dto/task-dto';


describe("Error", () => {

    const app = createServer()

    beforeEach((async () => {
        await mongoose.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: 'root',
            pass: 'rootpassword',
        })
        await new UserTestClient(app).createUser(testUser());
    }));

    afterEach(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    })

    test("visualize Error", async () => {

        const response = await request(app).post('/tasks').send({})
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`);

        expect(response.status).toStrictEqual(400);
        expect(response.body).toStrictEqual({
            "message": "Message should not be null or undefined",
            "status": 400
        });
    })

    test("Server should still run after error", async () => {

        const response = await request(app).post('/tasks').send({})
            .set('Authorization', `Basic ${Buffer.from(testUserString()).toString('base64')}`);

        expect(response.status).toStrictEqual(400);
        expect(response.body).toStrictEqual({
            "message": "Message should not be null or undefined",
            "status": 400
        });

        await new TaskTestClient(app).createTask({message: "something"} as TaskDTO);
    })
})
