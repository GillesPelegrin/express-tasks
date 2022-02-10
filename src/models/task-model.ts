import {model, Schema} from 'mongoose';

class Task {
    private _message: string;
    private _creationDate: Date;

    constructor( message: string) {
        this._message = message;
        this._creationDate = new Date();
    }

    get message(): string {
        return this._message;
    }

    get creationDate(): Date {
        return this._creationDate;
    }
}


const taskModelSchema = new Schema<Task>({
    message: {type: String, required: true},
    creationDate: {type: Date, required: true}
});

const TaskModel = model<Task>('Task', taskModelSchema);

export {TaskModel, Task};
