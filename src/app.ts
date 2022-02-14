import express = require('express');
import taskRoute from './routes/task/task-router'
import errorHandlerMiddleware from './infrastructure/error/error-handler-middleware';
import {mongoose, mongooseConnection} from './configurations/db-configuration';
import authentication from './infrastructure/auth/authentication';
import userRouter from './routes/user/user-router';

export default function createServer() {
    const app = express()
    app.use(express.json())

    app.use(taskRoute);
    app.use(userRouter);

    app.use(errorHandlerMiddleware);

    return app;
}
