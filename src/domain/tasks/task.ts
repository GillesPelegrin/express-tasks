import {isNotNullOrUndefined} from '../validation-util';
import Entity from '../entity';

export default class Task extends Entity {
    private _message: string;
    private _creationDate: Date;

    constructor(message: string) {
        super();

        this._message = message;
        this._creationDate = new Date();

        this.validate();
    }

    private validate(): void {
        isNotNullOrUndefined(this._message, 'Message should not be null or undefined')
    }

    get message(): string {
        return this._message;
    }

    get creationDate(): Date {
        return this._creationDate;
    }
}
