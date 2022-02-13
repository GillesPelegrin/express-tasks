import UserDto from '../../../src/dto/user-d-t-o';

export function testUser(): UserDto {
    return {username: 'James', password: 'Bond'} as UserDto
}

export function testUserString(): string {
    return 'James : Bond'
}
