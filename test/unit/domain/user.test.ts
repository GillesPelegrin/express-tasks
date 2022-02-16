import User from '../../../dist/domain/user/user';


test('user validation failed because no username', () => {
    expect(() => new User(null, null)).toThrowError("Username should not be null, undefined or empty")
})

test('user validation failed because no password', () => {
    expect(() => new User('James', null)).toThrowError("Password should not be null, undefined or empty")
})

test('user validation should not fail', () => {
    expect(() => new User('James', 'Bond')).not.toThrow()
})


