import {isNotNullOrUndefined} from '../validation-util';
import Entity from '../entity';

export default class Task extends Entity {
    private _message: string;
    private _creationDate: Date;

    constructor(message: string, id?: string, creationDate?: Date) {
        super(id);

        this._message = message;
        this._creationDate = creationDate ? creationDate : new Date();

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
