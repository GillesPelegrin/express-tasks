//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD
});

//Get the default connection
const dbConfiguration = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
dbConfiguration.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default mongoose;
