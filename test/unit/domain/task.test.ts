import Task from '../../../src/domain/tasks/task';


test('task validation failed because no message', () => {
    expect(() => new Task(null)).toThrowError("Message should not be null or undefined")
})

test('task validation should not fail', () => {
    expect(() => new Task("message")).not.toThrow()
})


