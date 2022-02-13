import BaseRepository from '../../infrastructure/db/base.repository';
import UserFactory from './user.factory';
import UserModel from './user.model';
import User from './user';

export default class UserRepository extends BaseRepository<User> {

    constructor() {
        super(new UserFactory(), UserModel);
    }
}
