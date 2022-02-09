import {CallbackError} from 'mongoose';
import {Task, TaskModel} from './task-model';

function taskRepository() {
    async function save(task: Task): Promise<void> {
        await TaskModel.create(task, function (err: CallbackError, instance: Task) {
        })
    }

    async function getAll(): Promise<Task[]> {
        return TaskModel.find()
    }

    return {save, getAll}
}

export {taskRepository}


