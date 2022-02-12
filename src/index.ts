import express = require('express');
import taskRoute from './routes/task-router'
import errorHandlerMiddleware from './infrastructure/error/error-handler-middleware';

// should adapt env depending for development / tests / production
// require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` })
require('dotenv').config({path: `./environment/.env.development`})
// require('./configurations/db-configuration')
require('./configurations/env-configuration')

const app = express()

app.use(express.json())

app.use(taskRoute);

app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))

export default app;
