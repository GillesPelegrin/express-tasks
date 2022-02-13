import EntityFactory from '../../infrastructure/db/entity.factory';
import User from './user';

export default class UserFactory implements EntityFactory<User, any> {

    mapToEntity(schema: any): User {
        return new User(schema.username, schema.password, schema._id, schema.creationDate)
    }

    mapToSchema(entity: User): any {
        return {
            username: 'James',
            password: "132456",
            creationDate: new Date()
        }
    }
}
