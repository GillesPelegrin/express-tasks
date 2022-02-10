import {Task} from '../../../src/models/task-model';


test('task validation failed because no message', () => {
    expect(new Task(null)).toThrowError("")
})

