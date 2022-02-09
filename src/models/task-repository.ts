import {Task, TaskModel} from './task-model';

function taskRepository() {
    async function save(task: Task): Promise<void> {
        await TaskModel.create(task)
    }

    async function getAll(): Promise<Task[]> {
        return TaskModel.find()
    }

    return {save, getAll}
}

export {taskRepository}


