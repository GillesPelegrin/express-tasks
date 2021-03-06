import {model, Schema} from 'mongoose';

const UserSchema = new Schema({
    username: {type: String, required: true, index: { unique: true }},
    password: {type: String, required: true},
    creationDate: {type: Date, required: true}
});



const UserModel = model('User', UserSchema)

export default UserModel;
