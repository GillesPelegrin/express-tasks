import UserRepository from '../../domain/user/userRepository';
import UserMapper from './user-mapper';
import User from '../../domain/user/user';
import UserDTO from '../../dto/user-d-t-o';

export class UserController {

    private userRepository: UserRepository;
    private userMapper: UserMapper;

    constructor() {
        this.userRepository = new UserRepository();
        this.userMapper = new UserMapper();
    }

    async saveUser(user: UserDTO): Promise<UserDTO> {
        const newUser: User = await this.userRepository.save(this.userMapper.mapUser(user))
        return this.userMapper.mapUserDTO(newUser);
    }
}
