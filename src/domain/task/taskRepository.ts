import BaseRepository from '../../infrastructure/db/base.repository';
import TaskFactory from './task.factory';
import Task from './task';
import TaskModel from './task.model';

export default class TaskRepository extends BaseRepository<Task> {

    constructor() {
        super(new TaskFactory(), TaskModel);
    }
}
