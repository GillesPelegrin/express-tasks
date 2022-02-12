import EntityFactory from '../../infrastructure/db/entity.factory';
import Task from './task';


export default class TaskFactory implements EntityFactory<Task, any> {

    mapToEntity(schema: any): Task {
        return new Task(schema.message, schema._id, schema.creationDate)
    }

    mapToSchema(entity: Task): any {
        return {
            message: entity.message,
            creationDate: entity.creationDate
        }
    }
}
