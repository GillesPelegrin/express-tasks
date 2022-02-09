import {model, Schema} from 'mongoose';

class Task {
    private message: string;
    private creationDate: Date;

    constructor( message: string) {
        this.message = message;
        this.creationDate = new Date();
    }
}


const taskModelSchema = new Schema<Task>({
    message: {type: String, required: true},
    creationDate: {type: Date, required: true}
});

const TaskModel = model<Task>('Task', taskModelSchema);

export {TaskModel, Task};
