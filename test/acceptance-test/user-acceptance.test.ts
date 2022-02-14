import TaskDTO from '../../src/dto/task-dto';
import {TaskTestClient} from './test-client/clients/task.test-client';
import {UserTestClient} from './test-client/clients/user.test-client';
import {testUser} from './test-client/test-users';
import UserDTO from '../../src/dto/user-d-t-o';
import {mongoose} from '../../dist/configurations/db-configuration';
import User from '../../dist/domain/user/user';
import createServer from '../../src/app';


describe("User", () => {

    let userTestClient: UserTestClient;
    let taskTestClient: TaskTestClient;

    beforeEach((async () => {
        await mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true})
        const app = createServer()

        userTestClient = new UserTestClient(app)
        taskTestClient = new TaskTestClient(app)
    }));

    afterEach(async () => {
        await mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close()
        })
    })

    test("create new user and fetch all task without getting any unauthorizated response", async () => {

        // CREATE
        const createRespons: UserDTO = await userTestClient.createUser(testUser());
        expect(createRespons).toStrictEqual({username: 'James'} as UserDTO);

        // GET
        const getResponse: TaskDTO [] = await taskTestClient.getAllTasks();
        expect(getResponse).toStrictEqual([]);

    })
});
