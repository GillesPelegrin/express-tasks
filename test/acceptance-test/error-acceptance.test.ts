import {agent as request} from "supertest";
import {mongoose} from '../../dist/configurations/db-configuration';
import createServer from '../../src/app';
import {UserTestClient} from './test-client/clients/user.test-client';
import {testUser, testUserString} from './test-client/test-users';
import {TaskTestClient} from './test-client/clients/task.test-client';


describe("Error", () => {

    let taskTestClient: TaskTestClient;
    let app;

    beforeEach((async () => {
        await mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true})
        app = createServer()
        await new UserTestClient(app).createUser(testUser());
        taskTestClient = new TaskTestClient(app)
    }));

    afterEach(async () => {
        await mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close()
        })
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
})
