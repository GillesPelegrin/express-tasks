import TaskDTO from '../../src/dto/task-dto';
import {TaskTestClient} from './test-client/clients/task.test-client';
import {UserTestClient} from './test-client/clients/user.test-client';
import {mongoose} from '../../dist/configurations/db-configuration';
import createServer from '../../src/app';
import {testUser} from './test-client/test-users';

describe("Tasks", () => {

    let taskTestClient: TaskTestClient;
    const app = createServer()


    beforeEach((async () => {
        await mongoose.connect("mongodb://localhost:27017",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: 'root',
            pass: 'rootpassword',
        })
        await new UserTestClient(app).createUser(testUser());
        taskTestClient = new TaskTestClient(app)
    }));

    afterEach(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    })

    test("CRUD task", async () => {

        // CREATE
        const createRespons: TaskDTO = await taskTestClient.createTask({message: 'creating new task'} as TaskDTO);
        expect(createRespons).toStrictEqual(expect.objectContaining({"message": "creating new task"}));

        // GET
        const getResponse: TaskDTO [] = await taskTestClient.getAllTasks();
        const taskId = getResponse[0].id;
        expect(getResponse.length).toBe(1);
        expect(getResponse[0].message).toStrictEqual('creating new task');

        // UPDATE
        const updateResponse: TaskDTO = await taskTestClient.updateTask({
            message: 'updated task',
            id: taskId
        } as TaskDTO);
        expect(updateResponse.message).toStrictEqual('updated task');

        // DELETE
        const deleteResponse = await taskTestClient.deleteTask(taskId);

        // GET ALL
        const getResponseForDelete = await taskTestClient.getAllTasks();
        expect(getResponseForDelete).toStrictEqual([]);
    })
})
