import mongoose, {Mongoose} from "mongoose";

const mongoDB = 'mongodb://localhost:27017';
const mongooseConnection: Promise<Mongoose> = mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: 'root',
    pass: 'rootpassword',
})

let dbConfiguration = mongoose.connection;
dbConfiguration.on('error', console.error.bind(console, 'MongoDB connection error:'))
dbConfiguration.once("open", () => console.log("Connected successfully to DB"));

export {mongoose, mongooseConnection};
