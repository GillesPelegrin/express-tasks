import express = require('express');
import bodyParser = require('body-parser')
import taskRoute from './routes/task-route'

// should adapt env depending for development / tests / production
// require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` })
require('dotenv').config({ path: `./environment/.env.development` })
require('./configurations/db-configuration')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(taskRoute);

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))

export default app;
