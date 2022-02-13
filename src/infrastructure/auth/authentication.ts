import UserRepository from '../../domain/user/userRepository';
import User from '../../domain/user/user';

const authentication = async (req, res, next) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    if (isUsernameAndPasswordDeclared(username, password)) {
        const users: User[] = await new UserRepository().findBy(User.getSearchCriteria(username, password))
        if (users.length === 1) {
            next();
        }
    }

    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('Unauthorized');
}

function isUsernameAndPasswordDeclared(username: string, password: string): boolean {
    return username !== undefined && username !== '' && password !== undefined && password !== '';
}

export default authentication;
