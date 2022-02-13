import User from '../../domain/user/user';
import UserDTO from '../../dto/user-d-t-o';


export default class UserMapper {
    mapUser(userDto: UserDTO): User {
        return new User(userDto.username, userDto.password);
    }

    mapUserDTO(user: User): UserDTO {
        return {username: user.username} as UserDTO;
    }
}
