import TestClient from '../test-client';
import UserDTO from '../../../../src/dto/user-d-t-o';

export class UserTestClient extends TestClient {

    constructor(app) {
        super(app);
    }

    async createUser(userDTO: UserDTO): Promise<UserDTO> {
        return this.post<UserDTO>('/user', userDTO);
    }
}
