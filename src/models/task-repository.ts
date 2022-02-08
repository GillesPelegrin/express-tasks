import {CallbackError} from 'mongoose';
import {Task, TaskModel} from './task-model';

function taskRepository() {
    async function save(task: Task) {
        await TaskModel.create(task, function (err: CallbackError, instance: Task) {
        })
    }

    return {save}
}



export {taskRepository}


