import express = require('express');
import taskRoute from './routes/task/task-router'
import errorHandlerMiddleware from './infrastructure/error/error-handler-middleware';
import {mongoose, mongooseConnection} from './configurations/db-configuration';
import authentication from './infrastructure/auth/authentication';
import userRouter from './routes/user/user-router';

// should adapt env depending for development / tests / production
// require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` })
require('dotenv').config({path: `./environment/.env.development`})
require('./configurations/db-configuration')

const app = express()
app.use(express.json())

app.use(taskRoute);
app.use(userRouter);

app.use(errorHandlerMiddleware);

mongooseConnection.then(() => app.listen(process.env.PORT, () => console.log(`Start server successfully on port ${process.env.PORT}`)))

process.on('SIGINT', async function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    await mongoose.disconnect();
    process.exit(0);
});

export default app;
