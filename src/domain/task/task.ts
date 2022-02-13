import {isNotNullOrUndefined} from '../validation-util';
import Entity from '../entity';

export default class Task extends Entity {
    readonly message: string;
    readonly creationDate: Date;

    constructor(message: string, id?: string, creationDate?: Date) {
        super(id);

        this.message = message;
        this.creationDate = creationDate ? creationDate : new Date();

        this.validate();
    }

    private validate(): void {
        isNotNullOrUndefined(this.message, 'Message should not be null or undefined')
    }
}
