import {isNotNullOrUndefinedOrEmpty} from '../validation-util';
import Entity from '../entity';
import crypto from 'crypto';

export default class User extends Entity {
    readonly username: string;
    readonly password: string;
    readonly creationDate: Date;

    constructor(username: string, password: string, id?: string, creationDate?: Date) {
        super(id);
        this.validate(username, password);

        this.username = username;
        this.password = User.createHashOfPassword(password);
        this.creationDate = creationDate ? creationDate : new Date();
    }

    static getSearchCriteria(username, password): Object {
        return {
            username: username,
            password: this.createHashOfPassword(password)
        }
    }

    private static createHashOfPassword(password: string): string {
        const hash = crypto.createHash('sha512');
        const data = hash.update(password.trim(), 'utf-8');
        const hashedPassword =  data.digest('hex');
        return hashedPassword;
    }

    private validate(username: string, password: string): void {
        isNotNullOrUndefinedOrEmpty(username, 'Username should not be null, undefined or empty')
        isNotNullOrUndefinedOrEmpty(password, 'Password should not be null, undefined or empty')
    }
}
