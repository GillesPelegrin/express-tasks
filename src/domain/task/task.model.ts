import {model, Schema} from 'mongoose';

const TaskSchema = new Schema({
    message: {type: String, required: true},
    creationDate: {type: Date, required: true}
} );

const TaskModel = model('Task', TaskSchema)

export default TaskModel;
