import {agent as request} from "supertest";
import {mongoose} from '../../dist/configurations/db-configuration';
import createServer from '../../src/app';
import {UserTestClient} from './test-client/clients/user.test-client';
import {testUser, testUserString} from './test-client/test-users';
import {HttpStatusCode} from '../../src/infrastructure/error/http-status-code';


describe("Authentication", () => {

    const app = createServer();

    beforeAll((async () => {
        await mongoose.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: 'root',
            pass: 'rootpassword',
        })
        await new UserTestClient(app).createUser(testUser());
    }));

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    })

    test("Authentication fails because did not add any user information is base64", async () => {

        const response = await request(app).get('/tasks').set('Authorization', 'Basic 1234567890');

        expect(response.status).toStrictEqual(HttpStatusCode.UNAUTHORIZED);
        expect(response.text).toStrictEqual('Unauthorized');
    })

    test("Authentication fails because username is wrong", async () => {

        const usernamePassword = Buffer.from("Jack:Bond").toString('base64');
        const response = await request(app).get('/tasks').set('Authorization', `Basic ${usernamePassword}`);

        expect(response.status).toStrictEqual(HttpStatusCode.UNAUTHORIZED);
        expect(response.text).toStrictEqual('Unauthorized');
    })

    test("Authentication fails because password is wrong", async () => {

        const usernamePassword = Buffer.from("James:Hendrickx").toString('base64');
        const response = await request(app).get('/tasks').set('Authorization', `Basic ${usernamePassword}`);

        expect(response.status).toStrictEqual(HttpStatusCode.UNAUTHORIZED);
        expect(response.text).toStrictEqual('Unauthorized');
    })

    test("Authentication is successful", async () => {

        const usernamePassword = Buffer.from(testUserString()).toString('base64');
        const response = await request(app).get('/tasks').set('Authorization', `Basic ${usernamePassword}`);

        expect(response.status).toStrictEqual(HttpStatusCode.OK);
    })
})
