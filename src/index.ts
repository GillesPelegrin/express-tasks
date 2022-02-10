import express = require('express');
import bodyParser = require('body-parser')
import taskRoute from './routes/task-router'

// should adapt env depending for development / tests / production
// require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` })
require('dotenv').config({ path: `./environment/.env.development` })
require('./configurations/db-configuration')

const app = express()

app.use(express.json())

app.use(taskRoute);

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))

export default app;
