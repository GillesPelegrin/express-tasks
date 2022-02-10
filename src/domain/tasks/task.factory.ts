import EntityFactory from '../entity.factory';
import Task from './task';


export default class TaskFactory implements EntityFactory<Task> {

    mapToEntity(schema): Task {
        // find out how to add the creationDate from the DB without using setters !!!
        return new Task(schema.message)
    }

    mapToSchema(entity: Task): any {
        return {
            message: entity.message,
            creationDate: entity.creationDate
        }
    }
}
