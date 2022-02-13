import TaskDTO from '../../src/dto/task-dto';
import {TaskTestClient} from './test-client/clients/task.test-client';
import {UserTestClient} from './test-client/clients/user.test-client';
import {testUser} from './test-client/test-users';
import UserDTO from '../../src/dto/user-d-t-o';

describe("User", () => {
    test("create new user and fetch all task without getting any unauthorizated response", async () => {

        // CREATE
        const createRespons: UserDTO = await UserTestClient.createUser(testUser());
        expect(createRespons).toStrictEqual({username: 'James'} as UserDTO);

        // // GET
        // const getResponse: TaskDTO [] = await TaskTestClient.getAllTasks();
        // expect(getResponse).toStrictEqual([]);

    })
})
